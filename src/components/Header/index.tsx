'use client';
import { setLanguageCookie } from '../../../utils/setLanguageCookie';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '@/store/useLanguage';
import { useActiveComponent } from '@/store/useActiveComponent';
import { useSectionRefs } from '@/store/useSectionsRefs';
import { LanguageIcon } from '@/components/Icons';
import SideBar from '@/components/Header/SideBar';
import { sections } from './data'


export default function HeaderClient() {
    const { t, i18n } = useTranslation();
    const { changeLanguage } = useLanguageStore();
    const { activeIndex } = useActiveComponent();
    const { welcomeRef, aboutMeRef, experienceRef, projectsRef, skillsRef } = useSectionRefs();

    const sectionRefs = [welcomeRef, aboutMeRef, experienceRef, projectsRef, skillsRef];

    const languages = [
        { code: 'en' as const, label: t('header.language.english') },
        { code: 'es' as const, label: t('header.language.spanish') },
    ];

    const scrollToSection = (index: number) => {
        const ref = sectionRefs[index];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getButtonClass = (lang: string) =>
        i18n.language === lang
            ? 'text-[#AF9661]'
            : 'text-[#7e7e8a] hover:text-[#AF9661] cursor-pointer';

    const getNavButtonClass = (index: number) =>
        activeIndex === index
            ? 'text-[#AF9661] font-semibold border-b-1 border-[#AF9661] p-1'
            : 'text-[#7e7e8a] font-semibold p-1 hover:text-[#AF9661] cursor-pointer';

    return (
        <div className="absolute w-full flex justify-between z-50 px-4 py-2 bg-[#0F172A]">
            <div className="sm:block md:hidden">
                <SideBar />
            </div>

            <div className="hidden md:flex gap-6 text-[14px]">
                {sections.map(({ label, index, Icon }) => (
                    <button
                        key={label}
                        onClick={() => scrollToSection(index)}
                        className={`flex items-center gap-2 ${getNavButtonClass(index)}`}
                    >
                        <Icon color={'#AF9661'} />
                        {t(label)}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4 text-[14px] font-semibold">
                <LanguageIcon color="#AF9661" />
                {languages.map(({ code, label }, idx) => (
                    <div key={code} className="flex items-center gap-4">
                        <button
                            className={getButtonClass(code)}
                            onClick={() => {
                                setLanguageCookie(code);
                                changeLanguage(code);
                            }}
                        >
                            {label}
                        </button>
                        {idx === 0 && <div className="h-4 border-l border-[#AF9661]" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
