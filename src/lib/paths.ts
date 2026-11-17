// Путь сайта (на GitHub Pages игра открывается по адресу /имя-репозитория/)
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Статическая версия (GitHub Pages): без сервера — без аккаунтов, рейтинга и классов */
export const IS_STATIC = process.env.NEXT_PUBLIC_STATIC === "1";

/** Путь к файлу из папки public с учётом адреса сайта */
export const asset = (p: string) => (p.startsWith("/") ? BASE + p : p);
