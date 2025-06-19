// src/components/SideBar.tsx
'use client';

import { Drawer } from 'antd';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useActiveComponent } from '@/store/useActiveComponent';
import { useSectionRefs } from '@/store/useSectionsRefs';
import { motion } from 'framer-motion';
import { CloseIcon } from "./Icons";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const { activeIndex } = useActiveComponent();
    const { welcomeRef, aboutMeRef, experienceRef, skillsRef } = useSectionRefs();

    const scrollToSection = (index: number) => {
        const refs = [welcomeRef, aboutMeRef, experienceRef, skillsRef];
        const ref = refs[index];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false); // cerrar el drawer después del clic
    };

    return (
        <>
            {/* Hamburguesa */}
            <button onClick={() => setOpen(true)} aria-label="Open Menu">
                <Menu size={30} className="text-[#AF9661]" />
            </button>

            {/* Drawer / SideBar */}
            <Drawer
                title={null}
                placement="left"
                onClose={() => setOpen(false)}
                open={open}
                closeIcon={false}
                styles={{
                    header: { backgroundColor: '#0F172A', color: '#AF9661' },
                    body: { backgroundColor: '#0F172A' }
                }}
            >
                <div className="relative">


                    <div className='flex items-center '>
                        <motion.button
                            onClick={() => setOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 transition-all cursor-pointer"
                        >
                            <CloseIcon color="#AF9661" />
                        </motion.button>

                        <p

                            className={`text-[20px] text-[#AF9661] font-semibold`}
                        >
                            {t('header.menu')}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-[#ededed] text-lg mt-10">

                        <button
                            onClick={() => scrollToSection(0)}
                            className={`text-[20px] ${activeIndex === 0 ? 'text-[#AF9661] font-semibold' : ''}`}
                        >
                            {t('header.home')}
                        </button>

                        <button
                            onClick={() => scrollToSection(1)}
                            className={activeIndex === 1 ? 'text-[#AF9661] font-semibold' : ''}
                        >
                            {t('header.about')}
                        </button>
                        <button
                            onClick={() => scrollToSection(2)}
                            className={activeIndex === 2 ? 'text-[#AF9661] font-semibold' : ''}
                        >
                            {t('header.experience')}
                        </button>
                        <button
                            onClick={() => scrollToSection(3)}
                            className={activeIndex === 3 ? 'text-[#AF9661] font-semibold' : ''}
                        >
                            {t('header.skills')}
                        </button>
                    </div>
                </div>
            </Drawer>

        </>
    );
};

export default SideBar;
