import { ImageResponse } from "next/og";

/** PNG 180×180 para apple-touch-icon y acceso directo en inicio (iOS/Android esperan raster, no solo SVG). */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #112236 0%, #0a1929 55%, #081420 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 26,
          }}
        >
          <div
            style={{
              width: 11,
              height: 94,
              borderRadius: 4,
              background: "#c9a961",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                width: 88,
                height: 8,
                borderRadius: 4,
                background: "rgba(245,236,217,0.48)",
              }}
            />
            <div
              style={{
                width: 72,
                height: 8,
                borderRadius: 4,
                background: "#c9a961",
              }}
            />
            <div
              style={{
                width: 80,
                height: 8,
                borderRadius: 4,
                background: "rgba(245,236,217,0.32)",
              }}
            />
          </div>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 29,
              background: "linear-gradient(145deg, #e8dcc0 0%, #c9a961 52%, #a67c3d 100%)",
              boxShadow: "inset -6px -6px 12px rgba(10,25,41,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 16,
              paddingBottom: 4,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 8,
                background: "rgba(255,255,255,0.42)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
