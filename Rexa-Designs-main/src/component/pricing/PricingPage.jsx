import { Link } from 'react-router-dom';
import { createWhatsAppLink } from '../../data/whatsapp';

const pricingPlans = [
  {
    name: 'Silver',
    price: 'LKR 5,000',
    originalPrice: 'LKR 5,500',
    description: '1 Concept + High Quality JPG, PNG & PDF + 1 Revisions',
    delivery: '3 Day Delivery',
    features: ['Logo  Design - LKR 2000', 'Social Media Post - LKR 1500', 'Banner Design - LKR 1000', 'Business Card - LKR 1000'],
    buttonLabel: 'Choose Silver',
    highlighted: false
  },
  {
    name: 'Gold',
    badge: 'Most Popular',
    price: 'LKR 7,000',
    originalPrice: 'LKR 8,000',
    description: '2 Concept + High Quality JPG, PNG & PDF + Source File + 2 Revisions',
    delivery: '2 Day Delivery',
    features: ['Logo  Design - LKR 3000', 'Social Media Post - LKR 2000', 'Banner Design - LKR 1500', 'Business Card - LKR 1500'],
    buttonLabel: 'Choose Gold',
    highlighted: true
  },
  {
    name: 'Platinum',
    price: 'LKR 10,000',
    originalPrice: 'LKR 11,000',
    description: '2 Concept + High Quality JPG, PNG & PDF + Source File + 3 Revisions',
    delivery: '1 Day Delivery',
    features: ['Logo  Design - LKR 4000', 'Social Media Post - LKR 3000', 'Banner Design - LKR 2000', 'Business Card - LKR 2000'],
    buttonLabel: 'Choose Platinum',
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
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={
                  plan.highlighted
                    ? 'bg-gray-900 rounded-2xl shadow-xl border border-orange-500 p-8 transform md:scale-105 relative z-10 text-white'
                    : 'bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow'
                }
              >
                <h3 className={`text-2xl font-bold mb-2 flex items-center justify-between ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                  {plan.badge && (
                    <span className="text-xs font-bold bg-orange-500 text-white px-3 py-1 rounded-full uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  )}
                </h3>
                <div className={`text-3xl xl:text-4xl font-black mb-6 flex items-baseline gap-3 ${plan.highlighted ? 'text-orange-500' : 'text-gray-900'}`}>
                  <span className="whitespace-nowrap">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-xl text-gray-400 line-through font-bold whitespace-nowrap">
                      {plan.originalPrice}
                    </span>
                  )}
                  {plan.period && (
                    <span className={`text-lg font-medium ${plan.highlighted ? 'text-gray-500' : 'text-gray-400'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {plan.description && (
                  <p className={`mb-2 text-sm font-medium ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                )}

                {plan.delivery && (
                  <p className={`mb-6 text-sm font-bold ${plan.highlighted ? 'text-orange-300' : 'text-orange-500'}`}>
                    {plan.delivery}
                  </p>
                )}

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
