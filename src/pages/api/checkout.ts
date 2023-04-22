import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { priceID } = request.body;

  if (request.method !== 'POST') {
    return response.status(405);
  }

  if (!priceID) {
    return response.status(400).json({ error: 'price not found.' });
  }

  const success_url = `${process.env.NEXT_URL}/success`;
  const cancel_url = `${process.env.NEXT_URL}`;

  const chekoutSection = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: 'payment',
    line_items: [
      {
        price: priceID,
        quantity: 1,
      },
    ],
  });

  return response.status(201).json({
    checkoutUrl: chekoutSection.url,
  });
}
