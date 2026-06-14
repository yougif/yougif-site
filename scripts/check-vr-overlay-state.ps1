param(
  [string]$OutputDir = (Join-Path (Split-Path -Parent $PSScriptRoot) "diagnostics")
)

$ErrorActionPreference = "Stop"

function Add-Line {
  param(
    [System.Collections.Generic.List[string]]$Lines,
    [string]$Text = ""
  )
  $Lines.Add($Text) | Out-Null
}

function Read-JsonFile {
  param([string]$Path)
  if (-not (Test-Path -LiteralPath $Path)) {
    return $null
  }
  try {
    return Get-Content -LiteralPath $Path -Raw | ConvertFrom-Json
  } catch {
    return $null
  }
}

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
$reportPath = Join-Path $OutputDir "vr-overlay-check_$timestamp.md"
$lines = [System.Collections.Generic.List[string]]::new()

Add-Line $lines "# VR Overlay State Check"
Add-Line $lines
Add-Line $lines "- Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss zzz')"
Add-Line $lines "- Mode: read-only"
Add-Line $lines "- Scope: SteamVR Input, OVR Toolkit, Oculus Link manifests, VRCFaceTracking module inventory"
Add-Line $lines

$steamConfig = "C:\Program Files (x86)\Steam\config"
$steamVrSettings = Join-Path $steamConfig "steamvr.vrsettings"
$ovrToolkitDir = "C:\Program Files (x86)\Steam\steamapps\common\OVR Toolkit"
$ovrToolkitBinding = Join-Path $ovrToolkitDir "bindings_oculus_touch.json"
$oculusManifestDir = "C:\Program Files\Oculus\CoreData\Manifests"
$vrcftCustomLibs = Join-Path $env:APPDATA "VRCFaceTracking\CustomLibs"
$expectedQuestOpenXrModule = "e90de1b0-1d67-4d5b-b517-597043fa3852"

Add-Line $lines "## Process Snapshot"
$processNames = @("vrserver", "vrmonitor", "vrcompositor", "vrdashboard", "OVR Toolkit", "OVRServer_x64", "VRCFaceTracking", "VRChat")
foreach ($name in $processNames) {
  $found = Get-Process -Name $name -ErrorAction SilentlyContinue
  if ($found) {
    $items = $found | ForEach-Object { "$($_.ProcessName)($($_.Id))" }
    Add-Line $lines "- ${name}: running - $($items -join ', ')"
  } else {
    Add-Line $lines "- ${name}: not running"
  }
}
Add-Line $lines

Add-Line $lines "## SteamVR Settings"
Add-Line $lines "- Path: '$steamVrSettings'"
if (Test-Path -LiteralPath $steamVrSettings) {
  $settingsItem = Get-Item -LiteralPath $steamVrSettings
  Add-Line $lines "- LastWriteTime: $($settingsItem.LastWriteTime)"
  $settings = Read-JsonFile $steamVrSettings
  if ($settings -and ($settings.PSObject.Properties.Name -contains "steam.overlay.1068820")) {
    $overlay = $settings."steam.overlay.1068820"
    Add-Line $lines "- OVR Toolkit overlay binding override: PRESENT"
    foreach ($prop in $overlay.PSObject.Properties) {
      Add-Line $lines "  - $($prop.Name): $($prop.Value)"
    }
    Add-Line $lines "- Action: remove this block if OVR Toolkit pointer works but trigger click does nothing."
  } else {
    Add-Line $lines "- OVR Toolkit overlay binding override: absent"
    Add-Line $lines "- Interpretation: SteamVR should fall back to OVR Toolkit's default binding."
  }
} else {
  Add-Line $lines "- Missing: SteamVR settings file was not found."
}
Add-Line $lines

Add-Line $lines "## OVR Toolkit Default Binding"
Add-Line $lines "- Path: '$ovrToolkitBinding'"
$binding = Read-JsonFile $ovrToolkitBinding
if ($binding) {
  $sources = $binding.bindings."/actions/ui".sources
  $leftClickSources = @()
  foreach ($source in $sources) {
    if ($source.inputs -and $source.inputs.click -and ($source.inputs.click.output -match "leftclick")) {
      $leftClickSources += $source.path
    }
  }
  if ($leftClickSources.Count -gt 0) {
    $joinedLeftClickSources = $leftClickSources -join ", "
    Add-Line $lines "- LeftClick bindings: $joinedLeftClickSources"
  } else {
    Add-Line $lines "- LeftClick bindings: NOT FOUND"
    Add-Line $lines "- Action: verify OVR Toolkit installation or Steam file integrity."
  }
} else {
  Add-Line $lines "- Could not parse default OVR Toolkit binding file."
}
Add-Line $lines

Add-Line $lines "## Oculus SteamVR Manifests"
Add-Line $lines "- Directory: '$oculusManifestDir'"
if (Test-Path -LiteralPath $oculusManifestDir) {
  $candidateManifestFiles = Get-ChildItem -LiteralPath $oculusManifestDir -Filter "*SteamVR*.json" -File |
    Where-Object { $_.Name -notmatch "\.bak_|\.disabled_" -and $_.Name -notmatch "_assets\.json$" }
  $steamVrTileCount = 0
  Add-Line $lines "- Active SteamVR-related manifest count: $($candidateManifestFiles.Count)"
  foreach ($manifestFile in $candidateManifestFiles) {
    $manifest = Read-JsonFile $manifestFile.FullName
    if ($manifest) {
      if ($manifest.displayName -eq "SteamVR") {
        $steamVrTileCount += 1
      }
      Add-Line $lines "- $($manifestFile.Name)"
      Add-Line $lines "  - displayName: $($manifest.displayName)"
      Add-Line $lines "  - launchFile: $($manifest.launchFile)"
      Add-Line $lines "  - launchParameters: $($manifest.launchParameters)"
      Add-Line $lines "  - versionCode: $($manifest.versionCode)"
    } else {
      Add-Line $lines "- $($manifestFile.Name): parse failed"
    }
  }
  Add-Line $lines "- SteamVR displayName tile count: $steamVrTileCount"
  if ($steamVrTileCount -gt 2) {
    Add-Line $lines "- Action: possible duplicate SteamVR tiles in Air Link dashboard. Inspect recently generated manifests before disabling anything."
  }
} else {
  Add-Line $lines "- Missing: Oculus manifest directory was not found."
}
Add-Line $lines

Add-Line $lines "## VRCFaceTracking CustomLibs Inventory"
Add-Line $lines "- Directory: '$vrcftCustomLibs'"
Add-Line $lines "- Safety rule: inventory only; do not rename, move, or swap modules from this script."
if (Test-Path -LiteralPath $vrcftCustomLibs) {
  $items = Get-ChildItem -LiteralPath $vrcftCustomLibs -Force
  foreach ($item in $items) {
    Add-Line $lines "- $($item.Name) [$($item.Mode)] LastWriteTime=$($item.LastWriteTime)"
  }
  $expected = Join-Path $vrcftCustomLibs $expectedQuestOpenXrModule
  if (Test-Path -LiteralPath $expected) {
    Add-Line $lines "- Expected Quest OpenXR module: present"
  } else {
    Add-Line $lines "- Expected Quest OpenXR module: NOT FOUND"
    Add-Line $lines "- Action: stop and confirm with the user before changing VRCFT modules."
  }
} else {
  Add-Line $lines "- Missing: VRCFaceTracking CustomLibs directory was not found."
}
Add-Line $lines

Add-Line $lines "## Suggested Recovery Checks"
Add-Line $lines "1. If OVR Toolkit pointer appears but trigger click fails, remove only the 'steam.overlay.1068820' block from 'steamvr.vrsettings' after backing up the file."
Add-Line $lines "2. If Air Link shows multiple SteamVR tiles, inspect active Oculus SteamVR manifests and disable only confirmed duplicate generated entries."
Add-Line $lines "3. If Quest Pro face tracking fails, do not experiment with ALXR modules in 'CustomLibs'; verify the Quest OpenXR module is present first."
Add-Line $lines "4. Restart SteamVR after any SteamVR Input binding change."

Set-Content -LiteralPath $reportPath -Value $lines -Encoding UTF8
Write-Output $reportPath
