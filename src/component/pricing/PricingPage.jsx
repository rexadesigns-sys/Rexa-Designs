import { Link } from 'react-router-dom';
import { createWhatsAppLink } from '../../data/whatsapp';

const pricingPlans = [
  {
    name: 'Basic',
    price: 'LKR 29,900',
    period: '/project',
    features: ['2 Logo Concepts', 'Brand Guidelines', 'Unlimited Revisions'],
    buttonLabel: 'Choose Basic',
    highlighted: false
  },
  {
    name: 'Professional',
    price: 'LKR 89,900',
    period: '/project',
    features: ['4 Logo Concepts', 'Full Identity Pack', 'CMS Website'],
    buttonLabel: 'Choose Professional',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '/quote',
    features: ['E-commerce Solutions', 'SEO Setup', 'Dedicated Manager'],
    buttonLabel: 'Choose Custom',
    highlighted: false
  }
];

const createPlanMessage = (plan) => (
  `Hello Rexa Designs, I am interested in the ${plan.name} pricing plan (${plan.price} ${plan.period}). Please share more details.`
);

export default function PricingPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="/images/agency-hero.svg"
            className="w-full h-full object-cover"
            alt="Pricing Hero"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Pricing Plans</h1>
          <p className="text-gray-400 font-medium text-sm">
            <Link to="/" className="cursor-pointer hover:text-orange-500 transition-colors">
              Home
            </Link>
            <span className="text-orange-500 mx-2">/</span>
            <span className="text-white">Pricing</span>
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">
              Choose Your Plan
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Affordable Solutions For You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.highlighted
                    ? 'bg-gray-900 rounded-2xl shadow-xl border border-orange-500 p-8 transform md:scale-105 relative z-10 text-white'
                    : 'bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow'
                }
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-black mb-6 ${plan.highlighted ? 'text-orange-500' : 'text-gray-900'}`}>
                  {plan.price}{' '}
                  <span className={`text-lg font-medium ${plan.highlighted ? 'text-gray-500' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className={`space-y-4 mb-8 text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={createWhatsAppLink(createPlanMessage(plan))}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    plan.highlighted
                      ? 'block w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-lg text-center hover:bg-orange-600 transition-colors'
                      : 'block w-full bg-gray-100 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors text-center'
                  }
                >
                  {plan.buttonLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
