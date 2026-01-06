
import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const isAuthenticated = request.cookies.get('auth')?.value === 'true'
  const isLoginPage = request.nextUrl.pathname === '/login'
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard')

  // If user is not authenticated and trying to access dashboard
  if (!isAuthenticated && isDashboardPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If user is authenticated and trying to access login page
  if (isAuthenticated && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
}