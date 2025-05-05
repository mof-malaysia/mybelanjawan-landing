import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const _headers = await headers();
  const host = _headers.get("host") || "mybelanjawan.gov.my";

  if (host === "mybelanjawan.gov.my") {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
