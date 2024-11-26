"use client";

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
import { useState } from "react";
import { useToast } from "@/components/use-toast";
import { Eye, EyeOff } from "react-feather";
import { useRouter } from "next/navigation";

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
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const correctPassword = "eduardohessel@2024";
  const router = useRouter();

  const { toast } = useToast();

  const handleSubmit = () => {
    if (password === correctPassword && targetLink) {
      router.push(targetLink);
      onClose();
      toast({
        title: t("toast.success.title"),
        description: t("toast.success.description"),
        variant: "success",
        duration: 1500,
      });
    } else {
      setError("senha incorreta");
      toast({
        title: t("toast.error.title"),
        description: t("toast.error.description"),
        variant: "destructive",
        duration: 1500,
      });
    }
  };

  const handleButtonClick = () => {
    setPassword("");
    setError("");
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
            <Label htmlFor="name" className="text-right">
              {t("label")}
            </Label>
            <div className="relative col-span-3">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("placeholder")}
                className="pr-12"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)} // Alterna o estado
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}{" "}
              </button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              handleSubmit();
              handleButtonClick();
            }}
          >
            {t("button")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
