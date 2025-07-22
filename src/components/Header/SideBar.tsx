'use client';

import { Drawer } from 'antd';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useActiveComponent } from '@/store/useActiveComponent';
import { useSectionRefs } from '@/store/useSectionsRefs';
import { motion } from 'framer-motion';
import { CloseIcon } from "../Icons";
import { sections } from './data'

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
                        padding: 0,
                        backgroundColor: '#0F172A',
                    },
                }}
            >
                <div className="h-full w-full p-4 flex items-center justify-center bg-[#0F172A]">
                    <div className="w-full h-full bg-white/5 border border-white/10 shadow-lg rounded-2xl p-6 flex flex-col justify-between">
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
                                {sections.map(({ label, index, Icon }) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => scrollToSection(index)}
                                        whileHover={{ scale: 1.05, x: 6 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center gap-3 text-left text-[18px] font-medium transition-all ${activeIndex === index
                                            ? 'text-[#AF9661] font-semibold'
                                            : 'text-[#ededed]'
                                            }`}
                                    >
                                        <Icon color={'#AF9661'} />
                                        {t(label)}
                                    </motion.button>
                                ))}
                            </nav>
                        </div>

                        <div className="text-[12px] text-[#9ca3af] text-center mt-12">
                            © {new Date().getFullYear()} Giselle Vargas.
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default SideBar;
