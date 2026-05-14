"use client";

import { useLanguage } from "./language-provider";
import { locales, localeFlags, type Locale } from "@/i18n/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <span className="text-base">{localeFlags[locale]}</span>
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className={`cursor-pointer gap-2 ${locale === loc ? "bg-secondary" : ""}`}
          >
            <span className="text-base">{localeFlags[loc]}</span>
            <span>{loc === "en" ? "English" : "Türkçe"}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Inline version for mobile menu
export function LanguageSwitcherInline() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
            locale === loc
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="text-base">{localeFlags[loc]}</span>
          <span>{loc === "en" ? "EN" : "TR"}</span>
        </button>
      ))}
    </div>
  );
}
