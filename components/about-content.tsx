import styles from '@/styles/about-content.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const avatarProps = {
    src: '/image-avatar-dudu.png',
    alt: 'Foto de Eduardo Hessel, um jovem Designer e Desenvolvedor.',
    width: 150,
    height: 300,
    className: 'rounded-full shadow-md',
};

export default function AboutContent(){
    const t = useTranslations('About');

    return(
        <main className={styles.container}>
            <Image {...avatarProps} />
            <section>
                <h1>{t("title")}</h1>
                <div className='flex flex-col gap-4'>
                    <p>{t("paragraph1")}</p>
                    <p>{t("paragraph2")}</p>
                    <p>{t("paragraph3")}</p>
                </div>
            </section>
            <section className='flex flex-col gap-4'>
                <h2>{t("professionalExperience")}</h2>
                <div>
                    <h3>{t("polvo.name")}</h3>
                    <ul>
                        <p>{t("polvo.position")}</p>
                        <p>{t("polvo.duration")}</p>
                        <p>{t("polvo.type")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("smartbrain.name")}</h3>
                    <ul>
                        <p>{t("smartbrain.position")}</p>
                        <p>{t("smartbrain.duration")}</p>
                        <p>{t("smartbrain.type")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("primeo.name")}</h3>
                    <ul>
                        <p>{t("primeo.position")}</p>
                        <p>{t("primeo.duration")}</p>
                        <p>{t("primeo.type")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("tvm.name")}</h3>
                    <ul>
                        <p>{t("tvm.position")}</p>
                        <p>{t("tvm.duration")}</p>
                        <p>{t("tvm.type")}</p>
                    </ul>
                </div>
            </section>
            <section className='flex flex-col gap-4'>
                <h2>{t("education")}</h2>
                <div>
                    <h3>{t("usp.course")}</h3>
                    <ul>
                        <p>{t("usp.university")}</p>
                        <p>{t("usp.time")}</p>
                        <p>{t("usp.status")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("senac.course")}</h3>
                    <ul>
                        <p>{t("senac.university")}</p>
                        <p>{t("senac.time")}</p>
                        <p>{t("senac.status")}</p>
                    </ul>
                </div>
            </section>
            <section className='flex flex-col gap-4'>
                <h2>{t("likeThings")}</h2>
                <div>
                    <h3>{t("animes.title")}</h3>
                    <ul>
                        <p>{t("animes.1")}</p>
                        <p>{t("animes.2")}</p>
                        <p>{t("animes.3")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("hobbies.title")}</h3>
                    <ul>
                        <p>{t("hobbies.1")}</p>
                        <p>{t("hobbies.2")}</p>
                        <p>{t("hobbies.3")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("games.title")}</h3>
                    <ul>
                        <p>{t("games.1")}</p>
                        <p>{t("games.2")}</p>
                        <p>{t("games.3")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("movies.title")}</h3>
                    <ul>
                        <p>{t("movies.1")}</p>
                        <p>{t("movies.2")}</p>
                        <p>{t("movies.3")}</p>
                    </ul>
                </div>
                <div>
                    <h3>{t("musics.title")}</h3>
                    <ul>
                        <p>{t("musics.1")}</p>
                        <p>{t("musics.2")}</p>
                        <p>{t("musics.3")}</p>
                    </ul>
                </div>
            </section>
        </main>
    )
}