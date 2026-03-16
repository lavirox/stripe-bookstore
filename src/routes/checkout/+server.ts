import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST: RequestHandler = async ({ request, url }) => {
	const formData = await request.formData();
	const quantity = Number(formData.get('quantity')) || 1;

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: 'price_1TBbV1DUOAXim5zmbL6Iy18E',
				quantity
			}
		],
		mode: 'payment',
		success_url: `${url.origin}/success`,
		cancel_url: `${url.origin}/cancel`
	});

	redirect(303, session.url!);
};
