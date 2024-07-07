import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
	return redirect('/api-ref/1.8.0', 307);
};
