import Image from 'next/image';
import styles from '@/styles/home-content.module.css';
import Link from 'next/link';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from 'next-intl';

const avatarProps = {
  src: '/image-avatar-dudu.png',
  alt: 'Foto de Eduardo Hessel, um jovem Designer e Desenvolvedor.',
  width: 150,
  height: 300,
  className: 'rounded-full shadow-md',
};

const projectImages = [
  {
    src: '/image-aivest.svg',
    link: '',
    key: 'aivest',
    className: styles.blackAndWhite,
  },
  {
    src: '/image-linx.svg',
    link: '',
    key: 'linx',
    className: styles.blackAndWhite,
  },
  {
    src: '/image-sinv-bradesco.svg',
    link: 'https://www.behance.net/gallery/201725767/SINV-Bradesco',
    key: 'sinvBradesco',
  },
  {
    src: '/image-petinder.svg',
    link: 'https://www.behance.net/gallery/199591237/Petinder-UIUX-Design-Case-Study',
    key: 'petinder',
  },
  {
    src: '/image-advisor-app.svg',
    link: 'https://www.behance.net/gallery/176413143/Advisor-App-v20',
    key: 'advisorApp',
  },
  {
    src: '/image-allbooks.svg',
    link: 'https://www.behance.net/gallery/118707067/ALLBOOKS-APP-UI-DESIGN',
    key: 'allBooks',
  },
];

export default function HomeContent() {
  const t = useTranslations('HomePage');

  return (
    <main className="w-full flex flex-col gap-8">
      <section aria-labelledby="descrição" className={styles.menuSection}>
        <Image {...avatarProps} />
        <header>
          <h1>{t('title')}</h1>
          <h2>{t('subtitle')}</h2>
        </header>
        <p>{t('description')}</p>
        <p>{t('rollDown')}</p>
      </section>

      <section aria-labelledby="projetos" className="flex flex-col">
        <h2 id="projetos" className={styles.h2Projects}>{t('projects')}</h2>
        <div className="grid grid-cols-2">
          {projectImages.map((image, index) => (
            <Link href={image.link} key={index} passHref target="_blank" rel="noopener noreferrer">
              <div className={styles.imageContainer}>
                <Image
                  src={image.src}
                  alt={t(`altTexts.${image.key}`)}
                  width={375}
                  height={300}
                  className={image.className}
                />
                <div className={styles.imageOverlay}>
                  <span>{t(`hoverTexts.${image.key}`)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="meus-links">
        <h2 id="meus-links" className={styles.h2Projects}>{t('myLinks')}</h2>
        <div className={styles.iconsContainer}>
          <Link href="https://www.linkedin.com/in/eduardo-hessel" target="_blank" rel="noopener noreferrer">
            <LinkedInLogoIcon className={styles.iconWithLink}/>
          </Link>
          <Link href="https://github.com/eduhessel" target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className={styles.iconWithLink}/>
          </Link>
          <Link href="mailto:deveduardohessel@gmail.com" target="_blank" rel="noopener noreferrer">
            <EnvelopeClosedIcon className={styles.iconWithLink}/>
          </Link>
        </div>
      </section>
    </main>
  );
}
