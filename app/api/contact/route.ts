export const runtime = "nodejs";

import nodemailer from "nodemailer";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_EMAIL",
];

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPlainText({
  nombre,
  empresa,
  email,
  telefono,
  servicio,
  mensaje,
}: {
  nombre: string;
  empresa?: string;
  email: string;
  telefono?: string;
  servicio: string;
  mensaje: string;
}) {
  return [
    "Nueva solicitud desde Digitup",
    "",
    `Nombre: ${nombre}`,
    `Empresa: ${empresa || "-"}`,
    `Email: ${email}`,
    `Telefono / WhatsApp: ${telefono || "-"}`,
    `Solucion de interes: ${servicio}`,
    "",
    "Mensaje:",
    mensaje,
  ].join("\n");
}

function buildContactEmail({
  nombre,
  empresa,
  email,
  telefono,
  servicio,
  mensaje,
}: {
  nombre: string;
  empresa?: string;
  email: string;
  telefono?: string;
  servicio: string;
  mensaje: string;
}) {
  const safeNombre = escapeHtml(nombre);
  const safeEmpresa = escapeHtml(empresa || "No informado");
  const safeEmail = escapeHtml(email);
  const safeTelefono = escapeHtml(telefono || "No informado");
  const safeServicio = escapeHtml(servicio);
  const safeMensaje = escapeHtml(mensaje).replace(/\n/g, "<br />");

  return `
<!doctype html>
<html lang="es">
  <body style="margin:0; padding:0; background:#f4f8fb; font-family:Arial, Helvetica, sans-serif; color:#123036;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f8fb; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px; overflow:hidden; border:1px solid #d8e6ec; border-radius:14px; background:#ffffff;">
            <tr>
              <td style="background:#0e2f3a; padding:28px 32px;">
                <p style="margin:0 0 10px; color:#67c5d2; font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase;">Contacto Digitup</p>
                <h1 style="margin:0; color:#ffffff; font-size:26px; line-height:1.25; font-weight:700;">Nueva solicitud comercial</h1>
                <p style="margin:12px 0 0; color:#d8e6ec; font-size:15px; line-height:1.6;">Un visitante completó el formulario de contacto del sitio web.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 16px;">
                      <p style="margin:0; color:#6b7a90; font-size:12px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase;">Solicitante</p>
                      <h2 style="margin:8px 0 0; color:#123036; font-size:24px; line-height:1.25;">${safeNombre}</h2>
                    </td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0 10px;">
                  <tr>
                    <td style="width:50%; padding:14px 16px; border:1px solid #d8e6ec; border-radius:10px; background:#f8fbfd;">
                      <p style="margin:0 0 5px; color:#6b7a90; font-size:12px; font-weight:700; text-transform:uppercase;">Empresa</p>
                      <p style="margin:0; color:#123036; font-size:15px; line-height:1.5;">${safeEmpresa}</p>
                    </td>
                    <td style="width:12px;"></td>
                    <td style="width:50%; padding:14px 16px; border:1px solid #d8e6ec; border-radius:10px; background:#f8fbfd;">
                      <p style="margin:0 0 5px; color:#6b7a90; font-size:12px; font-weight:700; text-transform:uppercase;">Solución</p>
                      <p style="margin:0; color:#123036; font-size:15px; line-height:1.5;">${safeServicio}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="width:50%; padding:14px 16px; border:1px solid #d8e6ec; border-radius:10px; background:#f8fbfd;">
                      <p style="margin:0 0 5px; color:#6b7a90; font-size:12px; font-weight:700; text-transform:uppercase;">Correo</p>
                      <p style="margin:0; color:#123036; font-size:15px; line-height:1.5;"><a href="mailto:${safeEmail}" style="color:#146d7d; text-decoration:none;">${safeEmail}</a></p>
                    </td>
                    <td style="width:12px;"></td>
                    <td style="width:50%; padding:14px 16px; border:1px solid #d8e6ec; border-radius:10px; background:#f8fbfd;">
                      <p style="margin:0 0 5px; color:#6b7a90; font-size:12px; font-weight:700; text-transform:uppercase;">Teléfono / WhatsApp</p>
                      <p style="margin:0; color:#123036; font-size:15px; line-height:1.5;">${safeTelefono}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 32px 32px;">
                <div style="border-left:4px solid #4da3b3; border-radius:10px; background:#f8fbfd; padding:18px 20px;">
                  <p style="margin:0 0 8px; color:#6b7a90; font-size:12px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase;">Mensaje</p>
                  <p style="margin:0; color:#243b53; font-size:16px; line-height:1.7;">${safeMensaje}</p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="border-top:1px solid #e3edf2; padding:18px 32px; background:#fbfdfe;">
                <p style="margin:0; color:#6b7a90; font-size:12px; line-height:1.6;">Responde directamente este correo para contactar al solicitante.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const { nombre, empresa, email, telefono, servicio, mensaje } = await req.json();
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);

    if (missingEnv.length > 0) {
      console.error(`Missing contact email env vars: ${missingEnv.join(", ")}`);

      return Response.json(
        { ok: false, error: "Email service is not configured" },
        { status: 500 },
      );
    }

    if (!nombre || !email || !servicio || !mensaje) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nueva solicitud desde Digitup - ${nombre}`,
      replyTo: email,
      text: formatPlainText({
        nombre,
        empresa,
        email,
        telefono,
        servicio,
        mensaje,
      }),
      html: buildContactEmail({
        nombre,
        empresa,
        email,
        telefono,
        servicio,
        mensaje,
      }),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
