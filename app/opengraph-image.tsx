import { ImageResponse } from "next/og";

export const alt = "Dru Martin: Product Design Leader";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0b0c",
          color: "#f5f5f4",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a1a1a0",
          }}
        >
          Dru Martin · Product Design Leader
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          <span>I build design teams</span>
          <span style={{ color: "#3fb4a6" }}>and still ship the work.</span>
        </div>
        <div style={{ fontSize: 26, color: "#a1a1a0" }}>
          B2B SaaS design leadership · AI products in regulated health · drumartinshead.com
        </div>
      </div>
    ),
    size
  );
}
