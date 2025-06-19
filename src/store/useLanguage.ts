'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../providers/i18n';

type LanguageState = {
    language: 'en' | 'es';
    changeLanguage: (lang: 'en' | 'es') => void;
};

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            language: i18n.language as 'en' | 'es',
            changeLanguage: (lang: 'en' | 'es') => {
                i18n.changeLanguage(lang);
                set({ language: lang });
            },
        }),
        {
            name: 'language-storage',
        }
    )
);
