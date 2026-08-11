import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const dc = apiKey?.split("-").pop();

    if (!apiKey || !audienceId || !dc) {
      return NextResponse.json({ error: "Mailchimp not configured" }, { status: 500 });
    }

    const res = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      if (data.title === "Member Exists") {
        return NextResponse.json(
          { message: "You're already subscribed!" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: data.detail || "Failed to subscribe" },
        { status: res.status }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
