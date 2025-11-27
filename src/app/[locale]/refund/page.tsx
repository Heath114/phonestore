import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/locales/business-config';
import Link from 'next/link';

export default async function RefundPolicyPage({
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
            {t.refund.title}
          </h1>
          <div className="w-16 h-px bg-gray-900 mb-6"></div>
          <p className="text-xs text-gray-400 tracking-wider uppercase">
            {t.refund.last_updated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-20 md:space-y-24">
          <section className="max-w-3xl">
            <p className="text-base md:text-lg text-gray-700 leading-loose font-light">
              {t.refund.intro}
            </p>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.refund.returns.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.refund.returns.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.refund.conditions.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light mb-6">
                  {t.refund.conditions.content}
                </p>
                <p className="text-sm font-medium text-gray-900 mb-4">
                  {t.refund.conditions.list_title}
                </p>
                <ul className="space-y-3 text-sm md:text-base text-gray-600 font-light">
                  {t.refund.conditions.list.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.refund.process.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light mb-6">
                  {t.refund.process.content}
                </p>
                <ol className="space-y-4 text-sm md:text-base text-gray-600 font-light">
                  <li className="flex items-start gap-4">
                    <span className="text-gray-400 font-medium">01.</span>
                    <span>{t.refund.process.step1}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-gray-400 font-medium">02.</span>
                    <span>{t.refund.process.step2}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-gray-400 font-medium">03.</span>
                    <span>{t.refund.process.step3}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-gray-400 font-medium">04.</span>
                    <span>{t.refund.process.step4}</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.refund.refund_time.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.refund.refund_time.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.refund.exchanges.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.refund.exchanges.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.refund.shipping_cost.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.refund.shipping_cost.content}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
