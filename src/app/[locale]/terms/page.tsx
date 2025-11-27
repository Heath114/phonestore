import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/locales/business-config';
import Link from 'next/link';

export default async function TermsOfServicePage({
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
            {t.terms.title}
          </h1>
          <div className="w-16 h-px bg-gray-900 mb-6"></div>
          <p className="text-xs text-gray-400 tracking-wider uppercase">
            {t.terms.last_updated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-20 md:space-y-24">
          <section className="max-w-3xl">
            <p className="text-base md:text-lg text-gray-700 leading-loose font-light">
              {t.terms.intro}
            </p>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.terms.acceptance.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.terms.acceptance.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.terms.use_license.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.terms.use_license.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.terms.disclaimer.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.terms.disclaimer.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.terms.limitations.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.terms.limitations.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.terms.privacy.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.terms.privacy.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.terms.changes.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.terms.changes.content}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium sticky top-24">
                  {t.terms.contact.title}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
                  {t.terms.contact.content}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
