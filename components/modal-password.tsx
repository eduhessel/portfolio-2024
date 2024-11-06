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
  const correctPassword = "eduardohessel@2024";

  const handleSubmit = () => {
    if (password === correctPassword && targetLink) {
      window.open(targetLink, "_blank");
      onClose();
    } else {
      setError("senha incorreta");
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
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Inserir senha"
              className="col-span-3"
            />
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
