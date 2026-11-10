// Generates the preview image Facebook shows when someone shares the site.
// Facebook can't display SVGs, so this renders a PNG at build time.
// Swap for a real farm photo later by deleting this file and adding
// src/app/opengraph-image.jpg (1200x630).

import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf6f0",
          color: "#8f2a4f",
          border: "24px solid #f7e1e4",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 40, color: "#6b5560", marginTop: 16 }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
