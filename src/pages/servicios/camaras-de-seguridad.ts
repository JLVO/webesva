export const prerender = true;

export async function GET() {
  return Response.redirect('/', 308);
}