'use client';

import { useRef, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/providers/i18n';

export const I18nProvider = ({
    children,
    lang,
}: {
    children: React.ReactNode;
    lang: 'en' | 'es';
}) => {
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current && i18n.language !== lang) {
            i18n.changeLanguage(lang);
            initialized.current = true;
        }
    }, [i18n, lang]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
