/**
 * Pricing Cards Component
 * Displays bootcamp pricing packages with features
 */

import { Check } from 'lucide-react';

interface PricingPackage {
  id: string;
  name: string;
  category: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  sessions: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
}

const pricingPackages: PricingPackage[] = [
  {
    id: 'mini-bootcamp',
    name: 'Bootcamp Minicon - Online',
    category: 'Mini Intensive',
    description: 'Belajar dari rumah dengan live class interaktif',
    originalPrice: 2500000,
    discountPrice: 1999999,
    sessions: '6 Sesi',
    features: [
      '6 Sesi Live Class',
      'Materi & Recording',
      'Sertifikat Kompetensi',
      'Akses Komunitas Alumni'
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science Beginner',
    category: 'Bootcamp Online',
    description: '12 Sesi Live Class',
    originalPrice: 3500000,
    discountPrice: 2499999,
    sessions: '12 Sesi',
    features: [
      '12 Sesi Live Class',
      'Python & SQL Basics',
      'Data Visualization',
      'Sertifikat Kompetensi',
      '1x Mentoring Private'
    ],
    badge: 'Populer',
    highlighted: true
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    category: 'Bootcamp Online',
    description: '16 Sesi Live Class',
    originalPrice: 5000000,
    discountPrice: 3999999,
    sessions: '16 Sesi',
    features: [
      '16 Sesi Live Class',
      'ML & Deep Learning',
      'NLP & Computer Vision',
      'Portfolio Project',
      'Job Connector Access'
    ]
  },
  {
    id: 'weekend-bootcamp',
    name: 'Weekend Bootcamp',
    category: 'Bootcamp Offline',
    description: '8 Weekend Intensive',
    originalPrice: 4000000,
    discountPrice: 2999999,
    sessions: '8 Weekends',
    features: [
      '8 Weekend Sessions',
      'Full Stack Data',
      'Materi & Recording',
      'Sertifikat',
      'Career Coaching'
    ]
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

const calculateDiscount = (original: number, discount: number) => {
  return Math.round(((original - discount) / original) * 100);
};

export const PricingCards = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Paket Harga & Investasi Karir Anda
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan kemampuan Anda. Investasi terbaik untuk karir impian.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-lg border transition-all duration-300 overflow-hidden ${
                pkg.highlighted
                  ? 'border-blue-500 shadow-lg md:scale-105'
                  : 'border-slate-200 hover:shadow-md'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  {pkg.badge}
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 flex flex-col h-full bg-white">
                {/* Category & Name */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                    {pkg.category}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {pkg.name}
                  </h3>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-slate-900">
                      {formatPrice(pkg.discountPrice)}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      {formatPrice(pkg.originalPrice)}
                    </span>
                  </div>
                  <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                    Hemat {calculateDiscount(pkg.originalPrice, pkg.discountPrice)}%
                  </div>
                </div>

                {/* Sessions */}
                <p className="text-sm text-slate-600 font-medium mb-6">
                  {pkg.sessions}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-2.5 rounded-lg font-semibold transition-colors ${
                    pkg.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-slate-600">
          <p>Harga terbatas! Buruan daftar sebelum kuota habis 🚀</p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
