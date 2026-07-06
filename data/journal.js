export const journalIssues = [
  {
    id: "july-2026",
    month: { ru: "Июль 2026", uk: "Липень 2026", en: "July 2026" },
    title: { ru: "Из невидимого в видимое", uk: "З невидимого у видиме", en: "From invisible to visible" },
    issue: { ru: "Выпуск 01", uk: "Випуск 01", en: "Issue 01" },
    description: {
      ru: "Цифровое издание о вере, призвании, стиле и жизни с миссией.",
      uk: "Цифрове видання про віру, покликання, стиль і життя з місією.",
      en: "A digital issue about faith, calling, style, and life with mission."
    },
    pdfUrl: "/magazines/july-2026.pdf",
    coverUrl: "/magazines/july-2026-cover.jpg",
    pages: Array.from({ length: 10 }, (_, i) => `/magazines/july-2026/page-${i + 1}.jpg`),
  },
];
export function getCurrentJournal() { return journalIssues[0]; }
