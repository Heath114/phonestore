import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/locales/business-config';
import Link from 'next/link';

export default async function StoreLocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || 'en';
  const t = getTranslations(currentLocale, 'legal');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
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
            {t.location.title}
          </h1>
          <div className="w-16 h-px bg-gray-900 mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 leading-loose font-light max-w-3xl">
            {t.location.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Map Placeholder */}
          <div className="bg-white border border-gray-200 h-[500px] flex items-center justify-center group">
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-gray-300 group-hover:text-gray-400 transition-colors duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="mt-4 text-sm text-gray-400 uppercase tracking-widest">
                {t.location.directions}
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wider"
              >
                {t.location.directions}
              </a>
            </div>
          </div>

          {/* Store Information */}
          <div className="space-y-12">
            {/* Address */}
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-6">
                {t.location.address.title}
              </h2>
              <div className="text-sm md:text-base text-gray-600 leading-loose font-light space-y-1">
                <p>{t.location.address.street}</p>
                <p>{t.location.address.city}</p>
                <p>{t.location.address.country}</p>
                <p>{t.location.address.postal}</p>
              </div>
            </section>

            {/* Hours */}
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-6">
                {t.location.hours.title}
              </h2>
              <div className="text-sm md:text-base text-gray-600 leading-loose font-light space-y-2">
                <p>{t.location.hours.weekdays}</p>
                <p>{t.location.hours.saturday}</p>
                <p>{t.location.hours.sunday}</p>
              </div>
            </section>

            {/* Contact */}
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-6">
                {t.location.contact.title}
              </h2>
              <div className="text-sm md:text-base text-gray-600 leading-loose font-light space-y-2">
                <p>{t.location.contact.phone}</p>
                <p>{t.location.contact.email}</p>
                <p>{t.location.contact.whatsapp}</p>
              </div>
            </section>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-24">
          <section className="bg-white border border-gray-200 p-8">
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-4">
              {t.location.parking.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
              {t.location.parking.content}
            </p>
          </section>

          <section className="bg-white border border-gray-200 p-8">
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-4">
              {t.location.public_transport.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-loose font-light">
              {t.location.public_transport.content}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
