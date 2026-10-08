"use client";

import TechStack from "@/components/TechStack/TechStack";
import { ProjectsType } from "@/types/projects";
import { motion } from "framer-motion";
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
      className="relative flex w-full min-h-full shrink-0 flex-col justify-center lg:max-w-[min(94vw,1600px)] mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-(--accent) opacity-[0.09] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center shrink-0 mb-6 xl:mb-14 short:mb-3! short:xl:mb-4!"
      >
        <h2 className="display-title text-center text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] short:text-[28px]! short:md:text-[32px]! short:lg:text-[36px]! short:xl:text-[40px]! leading-[0.92] text-[#F6F1EC]">
          {t("projects.title")}
        </h2>
        <div className="mx-auto mt-3 h-px w-12 bg-(--accent)/55 short:mt-2!" />
      </motion.div>

      <div className="relative z-10 grid w-full grid-cols-1 items-stretch gap-6 sm:gap-7 md:grid-cols-2 md:gap-4 lg:gap-5 xl:gap-6 short:gap-5! short:md:gap-2.5! short:lg:gap-3!">
        {projectsData.map((project, idx) => {
          const showJournalBrand = isJournalProject(project.title);
          const showHeroesTitle = isHeroesProject(project.title);
          const showCalendarBrand = isCalendarProject(project.title);
          const spansRow = idx === projectsData.length - 1 && projectsData.length % 2 === 1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative flex h-full min-w-0 flex-col justify-between border border-white/10 bg-white/[0.02] px-4 py-3.5 sm:px-5 sm:py-4 lg:px-5 lg:py-5 xl:px-6 short:px-3! short:py-2.5! transition-colors duration-300 hover:border-(--accent)/40 overflow-hidden ${spansRow ? "md:col-span-2" : ""}`}
            >
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    {showJournalBrand ? (
                      <JournalBrand label={project.title} />
                    ) : showHeroesTitle ? (
                      <HeroesTitle title={project.title} />
                    ) : showCalendarBrand ? (
                      <CalendarBrand label={project.title} />
                    ) : (
                      <h3 className="display-title text-[18px] md:text-[20px] lg:text-[26px] leading-none text-[#F6F1EC] truncate">
                        {project.title}
                      </h3>
                    )}
                  </div>
                  <span className="shrink-0 pt-1 text-[11px] tracking-[0.22em] text-(--accent)">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="my-3 h-px w-8 bg-(--accent)/50 short:my-2!" />
                <p className="text-left text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] short:text-[12px]! short:lg:text-[13px]! leading-relaxed text-[#E6E1E8] line-clamp-3 lg:line-clamp-4 xl:line-clamp-3 short:line-clamp-2!">
                  {project.description}
                </p>
              </div>

              <div className={`mt-4 short:mt-2! flex min-w-0 flex-col gap-3 short:gap-2! ${spansRow ? "md:flex-row md:items-end md:justify-between xl:flex-col xl:items-stretch" : ""}`}>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <TechStack techStack={project?.techStack} />
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 border border-(--accent)/45 px-3 py-1.5 text-[10px] md:text-[12px] uppercase tracking-[0.14em] text-(--accent) transition-colors hover:bg-(--accent) hover:text-[#100E12]"
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
                      <div className="inline-flex items-center border border-white/10 px-3 py-1.5 text-[10px] md:text-[12px] uppercase tracking-[0.14em] text-[#8A8580] cursor-not-allowed">
                        {t("projects.buttonText")}
                      </div>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="shrink-0 inline-flex items-center justify-center gap-0.5 sm:gap-1 text-[9px] md:text-[11px] uppercase tracking-[0.12em] font-medium py-1 md:py-1.5 px-2 sm:px-2.5 md:px-3 border border-(--accent)/40 text-[#F6F1EC] bg-transparent hover:border-(--accent) hover:text-(--accent) transition-colors whitespace-nowrap"
                      >
                        <span className="scale-75 origin-center inline-flex shrink-0">
                          <GitHubIcon color="var(--accent)" />
                        </span>
                        <span>{t("projects.githubText")}</span>
                      </a>
                    )}
                  </div>
                </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
