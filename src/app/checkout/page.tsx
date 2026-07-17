import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

export default async function CheckoutPage() {
  if (!process.env.STRIPE_SECRET_KEY) {
    redirect('mailto:support@micro-titan.com?subject=Get%20My%20Greg')
  }

  const headersList = await headers()
  const host = headersList.get('host') || 'greg.micro-titan.com'
  const proto = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${proto}://${host}`

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Greg — Full Setup',
              description:
                'Personalized AI Chief of Staff. Pre-launch intake call, full installation, custom memory & task configuration, 30-day email support.',
            },
            unit_amount: 50000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
      allow_promotion_codes: true,
      metadata: { product: 'greg_setup' },
    })

    redirect(session.url!)
  } catch {
    redirect('mailto:support@micro-titan.com?subject=Get%20My%20Greg')
  }
}
