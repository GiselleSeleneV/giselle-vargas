'use client';
import { setLanguageCookie } from '../../../utils/setLanguageCookie';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '@/store/useLanguage';
import { useActiveComponent } from '@/store/useActiveComponent';
import { useSectionRefs } from '@/store/useSectionsRefs';
import { LanguageIcon } from '@/components/Icons';
import SideBar from '@/components/Header/SideBar';

export default function HeaderClient() {
    const { t, i18n } = useTranslation();
    const { changeLanguage } = useLanguageStore();
    const { activeIndex } = useActiveComponent();
    const { welcomeRef, aboutMeRef, experienceRef, skillsRef } = useSectionRefs();

    const scrollToSection = (index: number) => {
        const refs = [welcomeRef, aboutMeRef, experienceRef, skillsRef];
        const ref = refs[index];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getButtonClass = (lang: 'en' | 'es') => {
        return i18n.language === lang
            ? 'text-[#ededed]'
            : 'text-[#7e7e8a] hover:text-[#AF9661] cursor-pointer';
    };

    return (
        <div className="absolute w-full flex justify-between z-50 px-4 py-2 bg-[#0F172A]">

            <div className="sm:block md:hidden">
                <SideBar />
            </div>

            <div className="hidden md:flex gap-4 text-[14px]">

                <button
                    onClick={() => scrollToSection(0)}
                    className={activeIndex === 0 ? 'border border-[#AF9661] rounded-lg p-1 text-[#ededed]' : 'text-[#7e7e8a] p-1 hover:text-[#AF9661] cursor-pointer'}
                >
                    {t('header.home')}
                </button>

                <button
                    onClick={() => scrollToSection(1)}
                    className={activeIndex === 1 ? 'border border-[#AF9661] rounded-lg p-1 text-[#ededed]' : 'text-[#7e7e8a] p-1 hover:text-[#AF9661] cursor-pointer'}
                >
                    {t('header.about')}
                </button>

                <button
                    onClick={() => scrollToSection(2)}
                    className={activeIndex === 2 ? 'border border-[#AF9661] rounded-lg p-1 text-[#ededed]' : 'text-[#7e7e8a] p-1 hover:text-[#AF9661] cursor-pointer'}
                >
                    {t('header.experience')}
                </button>

                <button
                    onClick={() => scrollToSection(3)}
                    className={activeIndex === 3 ? 'border border-[#AF9661] rounded-lg p-1 text-[#ededed]' : 'text-[#7e7e8a] p-1 hover:text-[#AF9661] cursor-pointer'}
                >
                    {t('header.skills')}
                </button>

            </div>

            <div className={`flex items-center gap-4 text-[14px]`}>
                <LanguageIcon color="#AF9661" />
                <button className={getButtonClass('en')} onClick={() => {
                    setLanguageCookie('en');
                    changeLanguage('en');
                }}>
                    {t('header.language.english')}
                </button>

                <div className="h-4 border-l border-[#AF9661]" />

                <button className={getButtonClass('es')} onClick={() => {
                    setLanguageCookie('es');
                    changeLanguage('es');
                }}>
                    {t('header.language.spanish')}
                </button>
            </div>
        </div>
    );
}
