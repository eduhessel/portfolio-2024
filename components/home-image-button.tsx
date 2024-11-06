"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "@/styles/home-content.module.css";
import { ModalPassword } from "./modal-password";

export default function HomeImageButton() {
  const t = useTranslations("HomePage");
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectImages = [
    {
      src: "/logo-sinv-app.png",
      link: "https://www.behance.net/gallery/201725767/SINV-Bradesco",
      key: "sinvBradesco",
    },
    {
      src: "/logo-advisor-app.png",
      link: "https://www.behance.net/gallery/176413143/Advisor-App-v20",
      key: "advisorApp",
    },
    {
      src: "/logo-ascent-design-system-logo.png",
      link: "https://www.figma.com/design/zwWc9haKkAiv4xj7izygMS/Ascent-Design-System?node-id=2-697&t=A6sp5Ut7zydXwxby-1",
      key: "ascent",
    },
    {
      src: "/cephalopod-ui-design-system.png",
      link: "https://zeroheight.com/73787951a/p/22b1a2-cephalopod-design-system",
      key: "cephalopodUi",
    },
    {
      src: "/logo-petinder-app.png",
      link: "https://www.behance.net/gallery/199591237/Petinder-UIUX-Design-Case-Study",
      key: "petinder",
    },
    {
      src: "/image-allbooks.svg",
      link: "https://www.behance.net/gallery/118707067/ALLBOOKS-APP-UI-DESIGN",
      key: "allBooks",
    },
  ];

  const handleImageClick = (link: string) => {
    setSelectedLink(link);
    setIsModalOpen(true);
  };
  return (
    <>
      {projectImages.map((image, index) => (
        <button key={index} onClick={() => handleImageClick(image.link)}>
          <div className={styles.imageContainer}>
            <div className="relative w-[375px] h-[375px]">
              <Image src={image.src} alt={t(`altTexts.${image.key}`)} fill />
            </div>
            <div className={styles.imageOverlay}>
              <span>{t(`hoverTexts.${image.key}`)}</span>
            </div>
          </div>
        </button>
      ))}
      <ModalPassword
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        targetLink={selectedLink}
      />
    </>
  );
}
