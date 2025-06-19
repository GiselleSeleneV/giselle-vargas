'use client';

import { useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/providers/i18n';

export const I18nProvider = ({
    children,
    lang,
}: {
    children: React.ReactNode;
    lang: 'en' | 'es';
}) => {
    // Esta ref asegura que el idioma solo se cambie una vez al montar
    const initialized = useRef(false);

    if (!initialized.current && i18n.language !== lang) {
        i18n.changeLanguage(lang); // ⬅️ Se ejecuta justo antes del primer render
        initialized.current = true;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
