import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, defaultLocale } from './navigation';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  localeDetection: false,
});

export const config = {
  matcher: ['/', '/(en-US|en-GB|uk)/:path*']
};
