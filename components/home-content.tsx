"use client";

import styles from "@/styles/home-content.module.css";
import Link from "next/link";
import { ModalPassword } from "./modal-password";
import { useLocale } from "next-intl";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  LockClosedIcon,
  OpenInNewWindowIcon,
} from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CardRecomendacoes } from "./card-recomendacoes";

export default function HomeContent() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("HomePage");
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectImages = [
    {
      link: `/${locale}/advisorapp`,
      key: "project2",
      icon: LockClosedIcon,
      requiresModal: true,
    },
    {
      link: `/${locale}/sinv`,
      key: "project1",
      icon: LockClosedIcon,
      requiresModal: true,
    },
    {
      link: "https://www.figma.com/design/zwWc9haKkAiv4xj7izygMS/Ascent-Design-System?node-id=2-697",
      key: "project3",
      icon: LockClosedIcon,
      requiresModal: true,
    },
    {
      link: "https://zeroheight.com/73787951a/p/22b1a2-cephalopod-design-system",
      key: "project4",
      icon: OpenInNewWindowIcon,
      requiresModal: false,
    },
    {
      link: `/${locale}/petinder`,
      key: "project5",
      icon: OpenInNewWindowIcon,
      requiresModal: false,
    },
  ];

  const recomendacoes = [
    {
      title: t("recomendations.emilio.title"),
      description: t("recomendations.emilio.description"),
      link: "https://www.linkedin.com/in/emilio-nagano/",
    },
    {
      title: t("recomendations.flavio.title"),
      description: t("recomendations.flavio.description"),
      link: "https://www.linkedin.com/in/flaviopaulino/",
    },
    {
      title: t("recomendations.karol.title"),
      description: t("recomendations.karol.description"),
      link: "https://www.linkedin.com/in/karol-oliveira-408363bb/",
    },
    {
      title: t("recomendations.wellington.title"),
      description: t("recomendations.wellington.description"),
      link: "https://www.linkedin.com/in/wellingtondev/",
    },
  ];

  const handleButtonClick = (link: string, requiresModal: boolean) => {
    if (requiresModal) {
      setSelectedLink(link);
      setIsModalOpen(true);
    } else {
      router.push(link);
    }
  };

  return (
    <main className="w-full flex flex-col gap-8">
      <section aria-labelledby="descrição" className={styles.menuSection}>
        <header className="flex flex-col gap-4">
          <h1>{t("title")}</h1>
          <h2 className="font-normal text-sm">{t("subtitle")}</h2>
        </header>
      </section>

      <section aria-labelledby="projetos" className="flex flex-col">
        <h2 id="projetos" className={styles.h2Projects}>
          {t("projects")}
        </h2>
        <div className={styles.buttonsContainer}>
          {projectImages.map((image, index) => {
            const Icon = image.icon;
            return (
              <button
                key={index}
                className={styles.buttonPortfolio}
                onClick={() =>
                  handleButtonClick(image.link, image.requiresModal)
                }
              >
                <h4>{t(`${image.key}`)}</h4>
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>
        <ModalPassword
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          targetLink={selectedLink}
        />
      </section>

      <section aria-labelledby="meus-links">
        <h2 id="meus-links" className={styles.h2Projects}>
          {t("myLinks")}
        </h2>
        <div className={styles.iconsContainer}>
          <Link
            href="https://www.linkedin.com/in/eduardo-hessel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon className={styles.iconWithLink} />
          </Link>
          <Link
            href="mailto:deveduardohessel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeClosedIcon className={styles.iconWithLink} />
          </Link>
        </div>
      </section>

      <section aria-labelledby="recomendacoes" className="pb-4">
        <h2 className={styles.h2Projects}>Recomendações</h2>
        <div className="flex flex-col gap-4">
          {recomendacoes.map((recomendacao, index) => (
            <CardRecomendacoes
              key={index}
              title={recomendacao.title}
              description={recomendacao.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
