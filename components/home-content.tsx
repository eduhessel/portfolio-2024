import Image from "next/image";
import styles from "@/styles/home-content.module.css";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import HomeImageButton from "./home-image-button";

const avatarProps = {
  src: "/image-avatar-dudu.png",
  alt: "Foto de Eduardo Hessel, um jovem Designer e Desenvolvedor.",
};

export default function HomeContent() {
  const t = useTranslations("HomePage");

  return (
    <main className="w-full flex flex-col gap-8">
      <section aria-labelledby="descrição" className={styles.menuSection}>
        <div className="relative w-[150px] h-[150px]">
          <Image className="rounded-full shadow-md" fill {...avatarProps} />
        </div>
        <header>
          <h1>{t("title")}</h1>
          <h2>{t("subtitle")}</h2>
        </header>
        <p>{t("description")}</p>
        <p>{t("rollDown")}</p>
      </section>

      <section aria-labelledby="projetos" className="flex flex-col">
        <h2 id="projetos" className={styles.h2Projects}>
          {t("projects")}
        </h2>
        <div className={styles.projectsContainer}>
          <HomeImageButton />
        </div>
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
            href="https://github.com/eduhessel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className={styles.iconWithLink} />
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
    </main>
  );
}
