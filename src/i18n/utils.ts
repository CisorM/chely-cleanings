import { ui, defaultLang, showDefaultLang, languages, type UiKey } from './ui';

export type Lang = keyof typeof ui;

/** Extract the locale from a URL pathname (`/es/...` -> `es`). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Returns a `t()` translator bound to a locale, with fallback to the default. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a locale-aware path. `localizePath('es', '/services')` -> `/es/services/`.
 * The default locale is served from the root unless `showDefaultLang` is enabled.
 * Paths keep a trailing slash for canonical consistency.
 */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = `/${path}/`.replace(/\/+/g, '/');
  if (lang === defaultLang && !showDefaultLang) return clean;
  return `/${lang}${clean}`.replace(/\/+/g, '/');
}

/** Same path in every other locale — used for the language switcher + hreflang. */
export function getAlternateLinks(url: URL): { lang: Lang; href: string }[] {
  const current = getLangFromUrl(url);
  let rest = url.pathname;
  if (current !== defaultLang || showDefaultLang) {
    rest = rest.replace(new RegExp(`^/${current}`), '') || '/';
  }
  return (Object.keys(languages) as Lang[]).map((lang) => ({
    lang,
    href: localizePath(lang, rest),
  }));
}

export { languages, defaultLang };
