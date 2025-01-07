import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useToast } from "@/components/use-toast";
import { Eye, EyeOff } from "react-feather";
import { useRouter } from "next/navigation";
import crypto from "crypto";
import { correctPasswordHash } from "@/utils/password-hash";
import { useLocale } from "next-intl";
import { useAuth } from "@/context/authContext"; // Importando o hook useAuth

interface ModalPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  targetLink: string | null;
}

export function ModalPassword({
  isOpen,
  onClose,
  targetLink,
}: ModalPasswordProps) {
  const t = useTranslations("HomePage.modalPassword");
  const { setAuthenticated } = useAuth(); // Usando setAuthenticated para alterar o estado de autenticação
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  const hashPassword = (input: string) =>
    crypto.createHash("sha256").update(input).digest("hex");

  const handleSubmit = () => {
    if (hashPassword(password) === correctPasswordHash) {
      setAuthenticated(true); // Define a autenticação como verdadeira
      router.push(targetLink || `/${locale}/sinv` || `/${locale}/advisorapp`);
      onClose();
    } else {
      setError(t("errorMessage"));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="self-center text-right">
              {t("label")}
            </Label>
            <div className="relative col-span-3">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("placeholder")}
                className={error ? "border-red-500" : ""}
                onKeyDown={handleKeyDown}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1 absolute top-full left-0">
                  {error}
                </p>
              )}
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>{t("button")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
