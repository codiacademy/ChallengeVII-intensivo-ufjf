import { NextResponse } from "next/server";

const routes = [
  { path: "/", whenAuthenticated: 'redirect' }
]

const REDIRECT_WHE_NOT_AUTHENTICATED = '/'

export function middleware(request) {
  const path = request.nextUrl.pathname
  const route = routes.find(route => route.path === path)
  const isAuthenticated = request.cookies.get('token')
  
  //Futuramente definir uma autenticacao para cada usuario, por enquanto é um cookie que define se o usuario está autenticado ou não.
  
  // Precisa definir o que fazer quando o usuario está autenticado e tenta acessar uma rota que não existe.
  if (!isAuthenticated && route) {
    return NextResponse.next()
  }

  if (!isAuthenticated && !route) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHE_NOT_AUTHENTICATED
    return NextResponse.redirect(redirectUrl)
  }
  // Precisa verificar qual é a autenticação do usuario, se é admin ou user, e redirecionar para a rota correta.
  if (isAuthenticated && route && route.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/admin'
    return NextResponse.redirect(redirectUrl)

  }

  // Precisa verificar qual é a autenticação do usuario, se é admin ou user, e redirecionar para a rota correta.
    // Checar se o usuario é admin ou user e redirecionar para a rota correta.
    // Checar se o JWT é valido (expirado) e redirecionar para a rota correta.
    // Se sim remover o Cookie e redirecionar para o login "/".
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}