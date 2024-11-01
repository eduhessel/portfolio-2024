import Image from "next/image";
import styles from "@/styles/home-content.module.css";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

const avatarProps = {
  src: "/image-avatar-dudu.png",
  alt: "Foto de Eduardo Hessel, um jovem Designer e Desenvolvedor.",
};

const projectImages = [
  {
    src: "/cephalopod-ui-design-system.png",
    link: "https://zeroheight.com/73787951a/p/22b1a2-cephalopod-design-system",
    key: "cephalopodUi",
  },
  {
    src: "/logo-ascent-design-system-logo.png",
    link: "https://www.figma.com/design/zwWc9haKkAiv4xj7izygMS/Ascent-Design-System?node-id=2-697&t=A6sp5Ut7zydXwxby-1",
    key: "ascent",
    // className: styles.blackAndWhite,
  },
  {
    src: "/logo-sinv-app.png",
    link: "https://www.behance.net/gallery/201725767/SINV-Bradesco",
    key: "sinvBradesco",
  },
  {
    src: "/logo-petinder-app.png",
    link: "https://www.behance.net/gallery/199591237/Petinder-UIUX-Design-Case-Study",
    key: "petinder",
  },
  {
    src: "/logo-advisor-app.png",
    link: "https://www.behance.net/gallery/176413143/Advisor-App-v20",
    key: "advisorApp",
  },
  {
    src: "/image-allbooks.svg",
    link: "https://www.behance.net/gallery/118707067/ALLBOOKS-APP-UI-DESIGN",
    key: "allBooks",
  },
];

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
          {projectImages.map((image, index) => (
            <Link
              href={image.link}
              key={index}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imageContainer}>
                <div className="relative w-[375px] h-[375px]">
                  <Image
                    src={image.src}
                    alt={t(`altTexts.${image.key}`)}
                    fill
                    // className={image.className}
                  />
                </div>
                <div className={styles.imageOverlay}>
                  <span>{t(`hoverTexts.${image.key}`)}</span>
                </div>
              </div>
            </Link>
          ))}
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
