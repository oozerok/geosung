import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `secret=${secret}&response=${token}`
    }
  );

  const data = await res.json();
  return data.success;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { company, manager, phone, email, subject, content, token, attachment } = body;

    const valid = await verifyTurnstile(token);

    if (!valid) {
      return Response.json({ error: "보안 검증에 실패했습니다. (Bot detected)" }, { status: 400 });
    }

    // Resend 메일 전송 옵션 구성
    const emailOptions: any = {
      from: "Website <contact@geosung.store>",
      to: process.env.TO_EMAIL || "gs7414@naver.com",
      replyTo: email,
      subject: `[홈페이지 문의] ${company} - ${subject}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #1d4ed8; border-bottom: 2px solid #1d4ed8; padding-bottom: 10px;">새로운 홈페이지 문의가 접수되었습니다.</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: bold; width: 120px;">업체명</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: bold;">담당자명</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${manager}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: bold;">연락처</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: bold;">이메일</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: bold;">제목</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;">
            <h3 style="margin-top: 0; font-size: 16px; color: #111827;">문의 내용</h3>
            <p style="white-space: pre-wrap;">${content}</p>
          </div>
          ${attachment ? `<p style="margin-top: 20px; font-size: 13px; color: #6b7280;">📎 첨부파일: <b>${attachment.filename}</b> 이 포함되어 있습니다.</p>` : ""}
          <footer style="margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center;">
            본 메일은 거성정밀 홈페이지 문의 폼을 통해 자동 발송되었습니다.
          </footer>
        </div>
      `
    };

    // 첨부파일이 있는 경우 추가
    if (attachment) {
      emailOptions.attachments = [
        {
          filename: attachment.filename,
          content: attachment.content,
        }
      ];
    }

    await resend.emails.send(emailOptions);

    return Response.json({ success: true });

  } catch (error: any) {
    console.error("Email API Error:", error);
    return Response.json({ error: error.message || "메일 전송 실패" }, { status: 500 });
  }
}
