import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const body = await request.json();
  console.log('📦 Received login data:', body);

  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  console.log('📥 DummyJSON response:', data);

  if (res.ok) {
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60, 
    });

    return NextResponse.json({ success: true, token: data.token });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
