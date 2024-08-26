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
    alt: 'Projeto Aivest, uma plataforma de investimentos.',
  },
  {
    src: '/image-linx.svg',
    alt: 'Projeto Linx, um sistema de gestão para o varejo.',
  },
  {
    src: '/image-sinv-bradesco.svg',
    alt: 'Projeto SINV Bradesco, um sistema de investimentos.',
  },
  {
    src: '/image-petinder.svg',
    alt: 'Projeto Petinder, uma plataforma de adoção de pets.',
  },
  {
    src: '/image-advisor-app.svg',
    alt: 'Projeto Advisor App, um aplicativo de consultoria financeira.',
  },
  {
    src: '/image-allbooks.svg',
    alt: 'Projeto AllBooks, uma biblioteca digital.',
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
        <p>
          Iniciei no Design com 14 anos de idade na área de design gráfico,
          hoje aos 23 vejo o quanto isso foi importante para minha carreira,
          tenho um alto nível de criatividade e resolução de problemas. Tenho
          foco em UI/UX e Product Design com 3 anos de experiência, com atuação
          na execução de projetos com equipes multidisciplinares, incorporando
          princípios de usabilidade e arquitetura da informação nas propostas
          de design, garantindo uma abordagem centrada no usuário desde a
          concepção até a implementação.
        </p>
        <p>Role para baixo e veja meus projetos!</p>
      </section>

      <section aria-labelledby="projetos" className="flex flex-col">
        <h2 id="projetos" className={styles.h2Projects}>Projetos</h2>
        <div className="grid grid-cols-2">
          {projectImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={375}
              height={300}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="meus-links">
        <h2 id="meus-links" className={styles.h2Projects}>Meus Links</h2>
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
