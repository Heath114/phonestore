import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/locales/business-config';
import Link from 'next/link';

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || 'en';
  const t = getTranslations(currentLocale, 'legal');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <Link
            href={`/${currentLocale}`}
            className="group inline-flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-gray-900 mb-12 transition-colors duration-500 uppercase tracking-widest"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-500">←</span>
            {currentLocale === 'ar' ? 'العودة' : 'Back'}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1]">
            {t.faq.title}
          </h1>
          <div className="w-16 h-px bg-gray-900 mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 leading-loose font-light max-w-3xl">
            {t.faq.intro}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-20 md:space-y-24">
          {/* Ordering Section */}
          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.faq.ordering.title}
                </h2>
              </div>
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.ordering.q1.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.ordering.q1.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.ordering.q2.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.ordering.q2.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.ordering.q3.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.ordering.q3.answer}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Section */}
          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.faq.shipping_faq.title}
                </h2>
              </div>
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.shipping_faq.q1.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.shipping_faq.q1.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.shipping_faq.q2.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.shipping_faq.q2.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.shipping_faq.q3.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.shipping_faq.q3.answer}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Returns Section */}
          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.faq.returns_faq.title}
                </h2>
              </div>
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.returns_faq.q1.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.returns_faq.q1.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.returns_faq.q2.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.returns_faq.q2.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.returns_faq.q3.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.returns_faq.q3.answer}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.faq.products_faq.title}
                </h2>
              </div>
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.products_faq.q1.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.products_faq.q1.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.products_faq.q2.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.products_faq.q2.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">
                    {t.faq.products_faq.q3.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                    {t.faq.products_faq.q3.answer}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
