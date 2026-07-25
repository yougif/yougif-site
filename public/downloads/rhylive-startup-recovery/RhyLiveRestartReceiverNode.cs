using System;
using System.Reflection;
using UnityEngine;
using Warudo.Core.Attributes;
using Warudo.Core.Graphs;
using Warudo.Plugins.RhyLive.Assets;

[NodeType(
    Id = "ec39ce9d-4d6d-48ab-8d5d-27e96c48d5a8",
    Title = "RhyLive 수신기 다시 시작"
)]
public class RhyLiveRestartReceiverNode : Node
{
    [DataInput]
    public RhyLiveReceiverAsset Receiver;

    [FlowInput]
    public Continuation Enter()
    {
        if (Receiver == null)
        {
            Debug.LogError("[RhyLiveStartRecovery] RhyLive receiver is not selected.");
            return Exit;
        }

        MethodInfo resetReceiver = typeof(RhyLiveReceiverAsset).GetMethod(
            "ResetReceiver",
            BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic
        );

        if (resetReceiver == null)
        {
            Debug.LogError("[RhyLiveStartRecovery] ResetReceiver method was not found.");
            return Exit;
        }

        try
        {
            Debug.Log("[RhyLiveStartRecovery] Invoking ResetReceiver.");
            resetReceiver.Invoke(Receiver, null);
        }
        catch (TargetInvocationException exception)
        {
            Exception cause = exception.InnerException ?? exception;
            Debug.LogException(cause);
        }
        catch (Exception exception)
        {
            Debug.LogException(exception);
        }

        return Exit;
    }

    [FlowOutput]
    public Continuation Exit;
}
