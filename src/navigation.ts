import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import type { LocalePrefix } from 'next-intl/routing';

export const locales = ['en-US', 'en-GB'] as const;

export const defaultLocale = 'en-US' as const;

// Use the default: `always`
export const localePrefix = {
  mode: 'always',
  prefixes: {
    'en-GB': '/uk'
  }
} satisfies LocalePrefix<typeof locales>;

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({
    locales,
    localePrefix
  });
