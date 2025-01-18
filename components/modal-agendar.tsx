import { motion } from "framer-motion";
import { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  iframeUrl: string;
}

export const ModalAgendar = ({ isOpen, onClose, iframeUrl }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={modalRef}
        className="bg-black p-6 rounded-lg shadow-lg w-full max-w-2xl relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Fechar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Conteúdo do iframe */}
        <iframe
          src={iframeUrl}
          width="100%"
          height="600px"
          frameBorder="0"
          allowFullScreen
          style={{ border: "none" }}
          className="pt-6"
        />
      </motion.div>
    </div>
  );
};
