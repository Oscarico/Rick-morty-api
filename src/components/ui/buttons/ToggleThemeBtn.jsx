import React from "react";
import { useThemeStore } from "../../../store/ThemeStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";

export const ToggleThemeBtn = () => {

  const { theme, setTheme } = useThemeStore();

  const {t} = useTranslation();

  return (
    <button
      onClick={setTheme}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20 transition-all justify-center cursor-pointer"
    >
      <span>
        {theme === "light" ? (
          <Icon icon={"fluent-emoji-flat:sun"} width={"32"} height={"32"} />
        ) : (
          <Icon
            icon={"fluent-emoji-flat:new-moon"}
            width={"32"}
            height={"32"}
          />
        )}
      </span>
      <span className="hiden sm:block dark:text-white">
        {theme === "light" ? t("btn_theme_light") : t("btn_theme_dark")}
      </span>
    </button>
  );
};
