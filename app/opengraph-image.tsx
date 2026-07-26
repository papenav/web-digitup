import { ImageResponse } from "next/og";

export const alt =
  "Digitup - Soluciones TI para fortalecer la gestión operativa";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          background: "#102a43",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -150,
            height: 520,
            width: 520,
            borderRadius: 520,
            background: "rgba(77, 163, 179, 0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: 120,
            height: 520,
            width: 520,
            borderRadius: 520,
            background: "rgba(56, 189, 248, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 10,
            width: "100%",
            background: "#4da3b3",
          }}
        />

        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 78px 62px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                height: 66,
                width: 66,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 66,
                background: "#ffffff",
                color: "#102a43",
                fontSize: 38,
                fontWeight: 800,
              }}
            >
              D
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 42,
                fontWeight: 800,
                letterSpacing: -1,
              }}
            >
              digit
              <span style={{ color: "#4da3b3" }}>up</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                marginBottom: 20,
                color: "#85d5df",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Servicios TI · Automatización · Reportabilidad
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 900,
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -2,
              }}
            >
              Soluciones TI para fortalecer la gestión operativa
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                maxWidth: 820,
                color: "#d8e6ec",
                fontSize: 28,
                lineHeight: 1.35,
              }}
            >
              Automatización de procesos, integraciones, cloud y soporte
              tecnológico para empresas en Antofagasta y Chile.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#d8e6ec",
              fontSize: 22,
            }}
          >
            <span>digitup.cl</span>
            <span style={{ color: "#85d5df", fontWeight: 700 }}>
              Antofagasta · Chile
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
