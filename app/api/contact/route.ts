export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nombre, empresa, email, telefono, servicio, mensaje } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nueva solicitud desde Digitup - ${nombre}`,
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