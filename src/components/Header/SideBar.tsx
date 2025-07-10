'use client';

import { Drawer } from 'antd';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useActiveComponent } from '@/store/useActiveComponent';
import { useSectionRefs } from '@/store/useSectionsRefs';
import { motion } from 'framer-motion';
import { CloseIcon } from "../Icons";

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
        setOpen(false);
    };

    const sections = [
        { label: t('header.home'), index: 0 },
        { label: t('header.about'), index: 1 },
        { label: t('header.experience'), index: 2 },
        { label: t('header.skills'), index: 3 },
    ];

    return (
        <>
            <button onClick={() => setOpen(true)} aria-label="Open Menu">
                <Menu size={30} className="text-[#AF9661]" />
            </button>

            <Drawer
                title={null}
                placement="left"
                onClose={() => setOpen(false)}
                open={open}
                closeIcon={false}
                width="80%"
                styles={{
                    body: {
                        background: 'rgba(15, 23, 42, 0.9)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.5rem',
                    },
                }}
            >
                <div className="relative h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <p className="text-[20px] text-[#AF9661] font-bold uppercase tracking-widest">
                                {t('header.menu')}
                            </p>

                            <motion.button
                                onClick={() => setOpen(false)}
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-[#AF9661]"
                                aria-label="Close Menu"
                            >
                                <CloseIcon color="#AF9661" />
                            </motion.button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {sections.map(({ label, index }) => (
                                <motion.button
                                    key={index}
                                    onClick={() => scrollToSection(index)}
                                    whileHover={{ scale: 1.05, x: 6 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`text-left text-[18px] font-medium transition-all ${activeIndex === index ? 'text-[#AF9661] font-semibold' : 'text-[#ededed]'
                                        }`}
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </nav>
                    </div>

                    <div className="text-sm text-[#9ca3af] text-center mt-12">
                        © {new Date().getFullYear()} Giselle Vargas
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default SideBar;
