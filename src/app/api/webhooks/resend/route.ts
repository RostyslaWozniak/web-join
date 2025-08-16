import { type NextRequest, NextResponse } from "next/server";

type ResendRequestBodyType = {
  created_at: Date;
  data: {
    created_at: Date;
    email_id: string;
    from: string;
    subject: string;
    to: string[];
  };
  type: "email.delivered" | "email.clicked" | "email.failed" | "email.opened";
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ResendRequestBodyType;

  if (body.type === "email.delivered") {
    console.log("DELIVERED");
  }
  if (body.type === "email.opened") {
    console.log("OPENED");
  }
  if (body.type === "email.failed") {
    console.log("FAILED");
  }
  return NextResponse.json({ status: 200 });
}
