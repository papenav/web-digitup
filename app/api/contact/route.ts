export const runtime = "nodejs";

import nodemailer from "nodemailer";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_EMAIL",
];

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
      text: `
    Nombre: ${nombre}
    Empresa: ${empresa || "-"}
    Email: ${email}
    Teléfono: ${telefono || "-"}
    Servicio: ${servicio}

    Mensaje:
    ${mensaje}
    `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
