interface Env {
  YOUGIF_DB?: D1Database;
  YOUGIF_MEDIA?: R2Bucket;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  return Response.json({
    ok: true,
    runtime: "cloudflare-pages-functions",
    storage: {
      d1: Boolean(env.YOUGIF_DB),
      r2: Boolean(env.YOUGIF_MEDIA)
    }
  });
};
