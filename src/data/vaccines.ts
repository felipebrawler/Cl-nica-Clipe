// Calendário de vacinação resumido, baseado nas recomendações do PNI (Ministério da Saúde)
// e nas vacinas complementares indicadas por SBP/SBIm.
// TODO: conteúdo a ser revisado pela responsável técnica antes da publicação,
// e confirmar quais vacinas estão disponíveis na Clipe Vacinas Store.

export interface VaccineItem {
  name: string;
  dose?: string;
  extra?: boolean; // complementar (rede privada)
}

export interface VaccineAge {
  id: string;
  label: string;
  group: "Gestação" | "Bebê" | "Criança" | "Adolescente" | "Adulto";
  items: VaccineItem[];
}

export const vaccineCalendar: VaccineAge[] = [
  {
    id: "gestante",
    label: "Gestantes",
    group: "Gestação",
    items: [
      { name: "dTpa (tríplice bacteriana acelular)", dose: "a partir da 20ª semana" },
      { name: "Hepatite B", dose: "conforme situação vacinal" },
      { name: "Influenza (gripe)", dose: "dose anual" },
      { name: "Covid-19", dose: "conforme recomendação vigente" },
      { name: "Vírus Sincicial Respiratório (VSR)", dose: "conforme indicação" },
    ],
  },
  {
    id: "nascer",
    label: "Ao nascer",
    group: "Bebê",
    items: [
      { name: "BCG", dose: "dose única" },
      { name: "Hepatite B", dose: "1ª dose" },
    ],
  },
  {
    id: "2m",
    label: "2 meses",
    group: "Bebê",
    items: [
      { name: "Pentavalente (DTP + Hib + Hepatite B)", dose: "1ª dose" },
      { name: "Poliomielite inativada (VIP)", dose: "1ª dose" },
      { name: "Pneumocócica", dose: "1ª dose" },
      { name: "Rotavírus", dose: "1ª dose" },
      { name: "Hexavalente acelular", dose: "alternativa à penta + VIP", extra: true },
    ],
  },
  {
    id: "3m",
    label: "3 meses",
    group: "Bebê",
    items: [
      { name: "Meningocócica C", dose: "1ª dose" },
      { name: "Meningocócica B", dose: "1ª dose", extra: true },
      { name: "Meningocócica ACWY", dose: "1ª dose", extra: true },
    ],
  },
  {
    id: "4m",
    label: "4 meses",
    group: "Bebê",
    items: [
      { name: "Pentavalente", dose: "2ª dose" },
      { name: "Poliomielite inativada (VIP)", dose: "2ª dose" },
      { name: "Pneumocócica", dose: "2ª dose" },
      { name: "Rotavírus", dose: "2ª dose" },
    ],
  },
  {
    id: "5m",
    label: "5 meses",
    group: "Bebê",
    items: [
      { name: "Meningocócica C", dose: "2ª dose" },
      { name: "Meningocócica B", dose: "2ª dose", extra: true },
      { name: "Meningocócica ACWY", dose: "2ª dose", extra: true },
    ],
  },
  {
    id: "6m",
    label: "6 meses",
    group: "Bebê",
    items: [
      { name: "Pentavalente", dose: "3ª dose" },
      { name: "Poliomielite inativada (VIP)", dose: "3ª dose" },
      { name: "Influenza (gripe)", dose: "anual, a partir dos 6 meses" },
      { name: "Covid-19", dose: "conforme recomendação vigente" },
    ],
  },
  {
    id: "9m",
    label: "9 meses",
    group: "Bebê",
    items: [{ name: "Febre amarela", dose: "1ª dose" }],
  },
  {
    id: "12m",
    label: "12 meses",
    group: "Criança",
    items: [
      { name: "Tríplice viral (sarampo, caxumba, rubéola)", dose: "1ª dose" },
      { name: "Pneumocócica", dose: "reforço" },
      { name: "Meningocócica", dose: "reforço" },
      { name: "Meningocócica B", dose: "reforço", extra: true },
    ],
  },
  {
    id: "15m",
    label: "15 meses",
    group: "Criança",
    items: [
      { name: "DTP (tríplice bacteriana)", dose: "1º reforço" },
      { name: "Poliomielite", dose: "reforço" },
      { name: "Hepatite A", dose: "dose única" },
      { name: "Tetra viral (tríplice viral + varicela)", dose: "dose única" },
    ],
  },
  {
    id: "4a",
    label: "4 anos",
    group: "Criança",
    items: [
      { name: "DTP (tríplice bacteriana)", dose: "2º reforço" },
      { name: "Febre amarela", dose: "reforço" },
      { name: "Varicela", dose: "2ª dose" },
    ],
  },
  {
    id: "9a",
    label: "9 a 14 anos",
    group: "Adolescente",
    items: [
      { name: "HPV", dose: "conforme esquema vigente" },
      { name: "Meningocócica ACWY", dose: "11 a 14 anos" },
      { name: "Dengue", dose: "conforme faixa etária e indicação", extra: true },
    ],
  },
  {
    id: "adulto",
    label: "Adultos",
    group: "Adulto",
    items: [
      { name: "dT (difteria e tétano)", dose: "reforço a cada 10 anos" },
      { name: "Hepatite B", dose: "3 doses, se não vacinado" },
      { name: "Tríplice viral", dose: "conforme idade e histórico" },
      { name: "Febre amarela", dose: "conforme histórico" },
      { name: "Influenza (gripe)", dose: "dose anual" },
      { name: "HPV", dose: "conforme indicação", extra: true },
    ],
  },
  {
    id: "60",
    label: "60 anos ou mais",
    group: "Adulto",
    items: [
      { name: "Influenza (gripe)", dose: "dose anual" },
      { name: "Covid-19", dose: "conforme recomendação vigente" },
      { name: "Pneumocócica", dose: "conforme indicação" },
      { name: "Herpes zóster", dose: "a partir dos 50 anos", extra: true },
      { name: "Vírus Sincicial Respiratório (VSR)", dose: "conforme indicação", extra: true },
    ],
  },
];
