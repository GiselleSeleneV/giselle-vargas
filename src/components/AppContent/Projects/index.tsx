"use client";

import TechStack from "@/components/TechStack/TechStack";
import { ProjectsType } from "@/types/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import JournalBrand from "./JournalBrand";
import HeroesTitle from "./HeroesTitle";
import CalendarBrand from "./CalendarBrand";
import { GitHubIcon } from "@/components/Icons";
import { ExternalLink } from "lucide-react";

type ProjectsProps = {
  projectsData: ProjectsType[];
};

const isJournalProject = (title: string) =>
  title === "Journal" || title === "Diario";

const isHeroesProject = (title: string) =>
  title === "Universo de superheroes" || title === "Universe of Superheroes";

const isCalendarProject = (title: string) =>
  title === "Calendar" || title === "Calendario";

export default function Projects({ projectsData }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex-1 w-full max-h-full lg:max-w-[min(94vw,1600px)] px-4 sm:px-6 md:px-8 flex flex-col justify-center min-h-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center shrink-0"
      >
        <h2 className="text-center text-[22px] sm:text-[24px] md:text-[38px] xl:text-[68px] font-extrabold text-[#AF9661] mb-2 sm:mb-3 md:mb-3">
          {t("projects.title")}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 lg:gap-6 xl:gap-8 min-h-0 p-0.5 md:p-2 items-stretch md:auto-rows-fr">
        {projectsData.map((project, idx) => {
          const showJournalBrand = isJournalProject(project.title);
          const showHeroesTitle = isHeroesProject(project.title);
          const showCalendarBrand = isCalendarProject(project.title);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full md:min-h-[168px] lg:min-h-[220px] bg-white/5 border border-white/10 backdrop-blur-md shadow-lg rounded-xl md:rounded-2xl flex justify-between transition-transform duration-300 px-2.5 py-2 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-4 lg:py-3 hover:shadow-[#AF9661]/30 lg:hover:scale-[1.03] overflow-hidden origin-center will-change-transform"
            >
              <div className="relative z-10 flex flex-col w-full lg:w-[66%] h-full justify-between min-w-0 gap-1 md:gap-1 lg:gap-2">
                <div className="min-w-0 min-h-0 overflow-hidden">
                  <div className="flex items-center min-w-0 md:min-h-0 lg:min-h-[3.75rem]">
                    {showJournalBrand ? (
                      <JournalBrand label={project.title} />
                    ) : showHeroesTitle ? (
                      <HeroesTitle title={project.title} />
                    ) : showCalendarBrand ? (
                      <CalendarBrand label={project.title} />
                    ) : (
                      <div className="flex items-center gap-2 min-w-0">
                        <Image
                          src="/images/photo-projects.png"
                          alt="Photo caricatura"
                          width={26}
                          height={26}
                          className="rounded-[6px] lg:hidden shrink-0"
                        />
                        <h3 className="text-[14px] md:text-[16px] lg:text-[24px] font-bold text-white truncate">
                          {project.title}
                        </h3>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-[11px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-justify mb-1 mt-1 md:mb-1 md:mt-1 lg:mb-2 lg:mt-2 leading-snug line-clamp-3 md:line-clamp-2 lg:line-clamp-none">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col mt-auto min-w-0 shrink-0">
                  <div className="overflow-hidden scale-90 origin-left md:scale-90 lg:scale-100">
                    <TechStack techStack={project?.techStack} />
                  </div>

                  <div className="mt-1.5 md:mt-1.5 lg:mt-2 flex items-stretch gap-1.5 sm:gap-2 w-full min-w-0 shrink-0">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 text-center text-[10px] md:text-[13px] bg-[#AF9661] text-black font-semibold py-0.5 md:py-1 px-1.5 sm:px-2 md:px-3 rounded-md md:rounded-lg hover:bg-[#d0b97b] transition-all"
                      >
                        <ExternalLink
                          className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0"
                          strokeWidth={2.25}
                        />
                        <span className="truncate">
                          {t("projects.buttonText")}
                        </span>
                      </a>
                    ) : (
                      <div className="flex-1 min-w-0 text-center text-[10px] md:text-[12px] bg-gray-600/40 text-gray-400 font-semibold py-0.5 md:py-1 px-1.5 sm:px-2 rounded-md md:rounded-lg cursor-not-allowed">
                        {t("projects.buttonText")} 🔒
                      </div>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="shrink-0 inline-flex items-center justify-center gap-0.5 sm:gap-1 text-[9px] md:text-[12px] font-semibold py-0.5 md:py-1 px-2 sm:px-2.5 md:px-3 rounded-md md:rounded-lg border border-[#AF9661]/70 text-[#AF9661] bg-white/5 hover:bg-[#AF9661]/15 hover:border-[#AF9661] transition-all whitespace-nowrap"
                      >
                        <span className="scale-75 origin-center inline-flex shrink-0">
                          <GitHubIcon color="#AF9661" />
                        </span>
                        <span>{t("projects.githubText")}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="hidden lg:block relative z-10 w-[30%] min-w-[8rem] xl:min-w-[9.5rem] shrink-0 self-stretch rounded-xl overflow-hidden">
                <Image
                  src="/images/photo-projects.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 0px"
                  className="object-cover object-center"
                  aria-hidden
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
