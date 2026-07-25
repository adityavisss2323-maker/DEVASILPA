import { NextResponse } from 'next/server';
import { inquirySchema } from '@/app/lib/validations';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input using Zod
    const validatedData = inquirySchema.parse(body);
    
    // Server-Side Turnstile Validation
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(validatedData.turnstileToken)}`,
      });
      const verifyOutcome = await verifyRes.json();
      if (!verifyOutcome.success) {
        return NextResponse.json({ error: 'Turnstile verification failed.' }, { status: 400 });
      }
    }

    // In a real application, you would save `validatedData` to the DB or trigger an email here.
    // For now, we simulate success.
    console.log("Valid Inquiry Received:", validatedData);
    
    return NextResponse.json({ success: true, message: "Inquiry sent successfully" }, { status: 201 });
    
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error("Inquiry Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
