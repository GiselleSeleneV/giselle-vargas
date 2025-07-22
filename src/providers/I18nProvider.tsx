'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/providers/i18n';

export const I18nProvider = ({
    children,
    lang,
}: {
    children: React.ReactNode;
    lang: 'en' | 'es';
}) => {
    if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
