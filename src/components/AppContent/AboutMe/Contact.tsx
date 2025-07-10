'use client';

import { LocationIcon, GitHubIcon, LinkedInIcon, MessageIcon } from "../../Icons";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const contactInformation = [
    {
        img: LocationIcon,
        textInformation: 'Cali Valle del cauca, Colombia',
        href: 'https://www.google.com/maps/search/?api=1&query=Cali+Valle+del+cauca,+Colombia'
    },
    {
        img: GitHubIcon,
        textInformation: 'github.com',
        href: 'https://github.com/GiselleSeleneV'
    },
    {
        img: LinkedInIcon,
        textInformation: 'www.linkedin.com',
        href: 'https://www.linkedin.com/in/selene-vargas'
    },
    {
        img: MessageIcon,
        textInformation: 'selenegiss23@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=selenegiss23@gmail.com'
    }
];

export default function Contact() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="relative flex flex-col w-full items-center bg-[#0F172A] overflow-hidden pt-13 pb-2"
        >
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-6 h-6 bg-gradient-to-br from-[#AF9661] to-[#ededed] rounded-full opacity-20"
                    initial={{ x: Math.random() * 800 - 400, y: Math.random() * 600 - 300 }}
                    animate={{ y: ["0%", "-100%", "0%"], rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8 + Math.random() * 4, delay: Math.random() * 2 }}
                    style={{ top: "50%", left: "50%" }}
                />
            ))}

            <motion.p
                className="text-[#AF9661] text-[12px] md:text-[14px] lg:text-[16px] xl-[18px] mt-2 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                G | V
            </motion.p>

            <motion.h1
                className="text-[26px] md:text-[26px] lg:text-[36px] xl-[46px] text-[#ededed]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                GISELLE VARGAS
            </motion.h1>

            <motion.div
                className="flex items-center justify-center w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="flex-1 h-px bg-[#AF9661] mr-0 md:mr-0 lg:mr-2 xl:mr-2" />
                <p className="text-[#AF9661] text-[14px] md:text-[16px] lg:text-[20px] xl-[24px] ">{t('contact.software_developer')}</p>
                <div className="flex-1 h-px bg-[#AF9661] ml-0 md:ml-0 lg:ml-2 xl:ml-2" />
            </motion.div>

            <motion.div
                className="grid grid-cols-2 place-items-center sm:flex sm:justify-between w-full mt-4 gap-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5 }}
            >
                {contactInformation.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex w-full flex-col items-center text-[#ededed] relative overflow-hidden pt-1 pl-2 pr-2 cursor-pointer
            ${index !== 0 ? "border-l border-[#AF9661]" : ""}`}
                        whileHover={{ scale: 1.1 }}
                    >
                        <item.img color="#AF9661" />
                        <span className="w-full text-[12px] md:[14px] lg:text-[14px] xl:text-[14px] mt-2 relative z-10 break-words">
                            {item.textInformation}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#AF9661] to-transparent opacity-20" />
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
}
