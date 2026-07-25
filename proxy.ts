import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  
  // Only protect /admin and /api/admin routes
  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api/admin')) {
    const basicAuth = req.headers.get('authorization');
    
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');
      
      // Default credentials: admin / Devashilpa2026 (should be overridden by ENV vars)
      const validUser = process.env.ADMIN_USER || 'admin';
      const validPwd = process.env.ADMIN_PASSWORD || 'Devashilpa2026';
      
      if (user === validUser && pwd === validPwd) {
        return NextResponse.next();
      }
    }
    
    url.pathname = '/api/auth';
    return new NextResponse('Auth Required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
