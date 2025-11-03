import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mailOptions, { FormData } from "@data/emailTemplate";

export async function POST(request: Request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  try {
    const data: FormData = await request.json();
    const { email, message } = data;

    if (!email || !message) {
      console.warn("⚠️ [API] Campos faltantes:", { email, message });
      return NextResponse.json(
        { message: "Faltan campos obligatorios." },
        { status: 400, headers }
      );
    }

    const emailTemplate = mailOptions(data);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.error("❌ [API] Faltan variables de entorno EMAIL_USER o EMAIL_PASS.");
      return NextResponse.json(
        { message: "Error de configuración del servidor (credenciales faltantes)." },
        { status: 500, headers }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("❌ [API] Error al verificar transporte SMTP:", verifyError);
      return NextResponse.json(
        { message: "Error al verificar el transporte SMTP.", error: (verifyError as Error).message },
        { status: 500, headers }
      );
    }

    const result = await transporter.sendMail(emailTemplate);

    return NextResponse.json(
      { message: "Mensaje enviado con éxito." },
      { status: 200, headers }
    );
  } catch (error) {
    console.error("🔥 [API] Error al procesar o enviar el email:", error);
    return NextResponse.json(
      {
        message: "Error en el servidor al enviar el correo.",
        error: (error as Error).message,
      },
      { status: 500, headers }
    );
  }
}
