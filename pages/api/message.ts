import { NextApiRequest, NextApiResponse } from "next";

let lastRequestTime: number = 0;
const rateLimitInterval: number = 5000;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        const currentTime = Date.now();
        if (currentTime - lastRequestTime < rateLimitInterval) {
            return res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
        }

        try {
            const content = `**Name:** ${name} | **Email:** ${email} | **Message:** ${message}`;

            await fetch("https://discord.com/api/webhooks/1230184199864975441/Xb4fsdXAAmU1CSY_ktNvF0ue6BhaKCwDztsP4bOVRlXHSp079fj80Jv4DjHmrHOIi0eu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: content,
                }),
            });

            lastRequestTime = currentTime;

            return res.status(200).end();
        } catch (error: any) {
            console.log(error);

            return res.status(500).json({ error: "Internal server error" });
        }
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
}
