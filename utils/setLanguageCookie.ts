// utils/setLanguageCookie.ts
export function setLanguageCookie(lang: 'en' | 'es') {
    document.cookie = `NEXT_LOCALE=${lang}; path=/`;
}
