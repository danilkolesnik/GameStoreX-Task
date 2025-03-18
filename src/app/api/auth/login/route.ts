import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {

  const cookieStore = await cookies();

  try {
    // const { email, password } = await req.json();
    
    // приклад реального запиту
    // const response = await fetch(`https://api-example.com/auth/login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    // });

    // const data = await response.json();

    //приклад вiдповiдi серверу

    const data = {
        token : '12345678',
    }

    if (data?.token) {
        cookieStore.set('auth_token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });
    }
    
    return NextResponse.json({ data },{ status: 200 });

  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 400 });
  }
}
