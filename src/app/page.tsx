"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { useState } from "react";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { CertificateCard } from "@/components/CertificateCard";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "Blockchain",
    "CloudComputing",
    "DevOps",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? DATA.projects
      : DATA.projects.filter((project) =>
          project.category?.includes(selectedCategory)
        );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <a
            href="Aditya-Khote-Resume.pdf"
            download
            className="text-blue-500 hover:text-blue-700"
          >
            Download Resume
          </a>
        </BlurFade>
      </section>

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                period={`${education.start} - ${education.end}`}
                description={education.degree}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Work-Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((job, id) => (
            <BlurFade
              key={job.company}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                logoUrl={job.logoUrl}
                altText={job.company}
                title={`${job.title} @ ${job.company}`}
                period={`${job.start} - ${job.end}`}
                description={job.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Programming Languages</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* mern */}
      <section id="mern">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">MERN stack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.mern.map((mern, id) => (
              <BlurFade key={mern} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={mern}>{mern}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain */}
      <section id="blockchain">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Blockchain</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.blockchain.map((blockchain, id) => (
              <BlurFade
                key={blockchain}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={blockchain}>{blockchain}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skill */}
      <section id="add">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Additional Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.add.map((add, id) => (
              <BlurFade key={add} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={add}>{add}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
                {/* Project Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-1.5 text-sm rounded-full border font-medium transition ${
                        selectedCategory === cat
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto]">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))
            ) : (
              <p className="text-center text-muted-foreground w-full col-span-full">
                Projects coming soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section id="certificates">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certificates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Courses & Certifications
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Here are some of the certifications I&apos;ve completed recently.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {DATA.certificates.map((cert, id) => (
              <BlurFade
                key={cert.title}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <CertificateCard {...cert} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&rsquo;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
