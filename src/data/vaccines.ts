// Calendário de vacinação resumido conforme os Calendários SBIm 2026/2027
// (Sociedade Brasileira de Imunizações — https://sbim.org.br/calendario-de-vacinacao).
// "extra: true" = vacina não oferecida gratuitamente no SUS/PNI para aquela faixa (rede privada).
// O esquema pode variar conforme idade, histórico vacinal e indicação médica.

export interface VaccineItem {
  name: string;
  dose?: string;
  extra?: boolean; // somente na rede privada
}

export interface VaccineAge {
  id: string;
  label: string;
  group: "Gestação" | "Bebê" | "Criança" | "Adolescente" | "Adulto";
  items: VaccineItem[];
}

export const calendarSource = {
  name: "Calendários de vacinação SBIm 2026/2027",
  url: "https://sbim.org.br/calendario-de-vacinacao",
};

export const vaccineCalendar: VaccineAge[] = [
  {
    id: "gestante",
    label: "Gestantes",
    group: "Gestação",
    items: [
      { name: "dTpa (difteria, tétano e coqueluche)", dose: "uma dose a cada gestação, a partir da 20ª semana" },
      { name: "Vírus sincicial respiratório – VSR (Abrysvo®)", dose: "uma dose a partir da 28ª semana" },
      { name: "Influenza (gripe)", dose: "dose anual, em qualquer fase da gestação" },
      { name: "Hepatite B", dose: "três doses (0-1-6 meses), se não vacinada" },
      { name: "Covid-19", dose: "uma dose a cada gestação" },
    ],
  },
  {
    id: "nascer",
    label: "Ao nascer",
    group: "Bebê",
    items: [
      { name: "BCG", dose: "dose única, o mais cedo possível" },
      { name: "Hepatite B", dose: "1ª dose (esquema de 3 ou 4 doses, conforme a vacina)" },
      { name: "Anticorpo contra o VSR – nirsevimabe (Beyfortus®)", dose: "bebês menores de 12 meses; no SUS, para grupos de maior risco" },
    ],
  },
  {
    id: "2m",
    label: "2 meses",
    group: "Bebê",
    items: [
      { name: "Hexavalente ou pentavalente (DTP + Hib + poliomielite + hepatite B)", dose: "1ª dose · a hexavalente acelular é da rede privada" },
      { name: "Pneumocócica conjugada (VPC15 ou VPC20)", dose: "1ª dose" },
      { name: "Rotavírus", dose: "1ª dose (2 ou 3 doses, conforme a vacina)" },
    ],
  },
  {
    id: "3m",
    label: "3 meses",
    group: "Bebê",
    items: [
      { name: "Meningocócica ACWY ou C", dose: "1ª dose" },
      { name: "Meningocócica B", dose: "1ª dose", extra: true },
    ],
  },
  {
    id: "4m",
    label: "4 meses",
    group: "Bebê",
    items: [
      { name: "Hexavalente ou pentavalente (DTP + Hib + poliomielite + hepatite B)", dose: "2ª dose" },
      { name: "Pneumocócica conjugada (VPC15 ou VPC20)", dose: "2ª dose" },
      { name: "Rotavírus", dose: "2ª dose" },
    ],
  },
  {
    id: "5m",
    label: "5 meses",
    group: "Bebê",
    items: [
      { name: "Meningocócica ACWY ou C", dose: "2ª dose" },
      { name: "Meningocócica B", dose: "2ª dose", extra: true },
    ],
  },
  {
    id: "6m",
    label: "6 meses",
    group: "Bebê",
    items: [
      { name: "Hexavalente ou pentavalente (DTP + Hib + poliomielite + hepatite B)", dose: "3ª dose" },
      { name: "Pneumocócica conjugada (VPC15 ou VPC20)", dose: "3ª dose, conforme a vacina utilizada" },
      { name: "Rotavírus", dose: "3ª dose, se a vacina pentavalente" },
      { name: "Influenza (gripe)", dose: "a partir de 6 meses · na 1ª vez, duas doses com 1 mês de intervalo" },
      { name: "Covid-19", dose: "de 6 meses a menores de 5 anos, conforme a vacina" },
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
      { name: "Pneumocócica conjugada (VPC15 ou VPC20)", dose: "reforço" },
      { name: "Meningocócica ACWY ou C", dose: "reforço" },
      { name: "Meningocócica B", dose: "reforço", extra: true },
      { name: "Tríplice viral (sarampo, caxumba e rubéola)", dose: "1ª dose" },
      { name: "Varicela (catapora)", dose: "1ª dose" },
      { name: "Hepatite A", dose: "1ª dose" },
    ],
  },
  {
    id: "15m",
    label: "15 meses",
    group: "Criança",
    items: [
      { name: "Tríplice bacteriana (DTP) + Hib + poliomielite inativada", dose: "1º reforço (15 a 18 meses)" },
      { name: "Tríplice viral (sarampo, caxumba e rubéola)", dose: "2ª dose (15 a 24 meses)" },
      { name: "Varicela (catapora)", dose: "2ª dose (15 a 24 meses)" },
    ],
  },
  {
    id: "18m",
    label: "18 meses",
    group: "Criança",
    items: [{ name: "Hepatite A", dose: "2ª dose" }],
  },
  {
    id: "4a",
    label: "4 a 6 anos",
    group: "Criança",
    items: [
      { name: "Tríplice bacteriana (DTPa) + poliomielite inativada", dose: "2º reforço" },
      { name: "Febre amarela", dose: "2ª dose aos 4 anos" },
      { name: "Meningocócica ACWY ou C", dose: "reforço entre 5 e 6 anos" },
      { name: "Dengue (Qdenga®)", dose: "a partir de 4 anos · duas doses, independente de contato prévio com o vírus" },
    ],
  },
  {
    id: "9a",
    label: "9 anos",
    group: "Criança",
    items: [
      { name: "HPV", dose: "duas doses (9 a 14 anos)" },
      { name: "dTpa (difteria, tétano e coqueluche)", dose: "reforço", extra: true },
      { name: "Dengue (Qdenga®)", dose: "duas doses, se ainda não vacinado · no SUS, de 10 a 14 anos" },
    ],
  },
  {
    id: "adolescente",
    label: "10 a 19 anos",
    group: "Adolescente",
    items: [
      { name: "HPV", dose: "duas doses até 14 anos; não vacinados até 19 anos também podem receber" },
      { name: "Meningocócica ACWY", dose: "reforço aos 11 anos ou 5 anos após a última dose" },
      { name: "Meningocócica B", dose: "duas doses, se não vacinado", extra: true },
      { name: "dTpa (difteria, tétano e coqueluche)", dose: "reforço 10 anos após a última dose" },
      { name: "Influenza (gripe)", dose: "dose anual" },
      { name: "Dengue (Qdenga®)", dose: "duas doses, se não vacinado" },
      { name: "Tríplice viral, varicela, hepatites A e B e febre amarela", dose: "para quem não completou o esquema na infância" },
    ],
  },
  {
    id: "adulto",
    label: "20 a 59 anos",
    group: "Adulto",
    items: [
      { name: "dTpa (difteria, tétano e coqueluche)", dose: "reforço a cada 10 anos · no SUS, dT" },
      { name: "Influenza (gripe)", dose: "dose anual" },
      { name: "Hepatite B", dose: "três doses, se não vacinado" },
      { name: "Tríplice viral (sarampo, caxumba e rubéola)", dose: "duas doses após 1 ano de idade, se não vacinado" },
      { name: "Febre amarela", dose: "conforme histórico vacinal" },
      { name: "Pneumocócica conjugada VPC20", dose: "rotina a partir dos 50 anos · dose única", extra: true },
      { name: "Herpes-zóster (VZR)", dose: "a partir dos 50 anos · duas doses com intervalo de 2 meses", extra: true },
      { name: "HPV", dose: "conforme indicação médica", extra: true },
      { name: "Hepatite A, varicela e dengue (Qdenga®)", dose: "para suscetíveis, conforme indicação", extra: true },
    ],
  },
  {
    id: "60",
    label: "60 anos ou mais",
    group: "Adulto",
    items: [
      { name: "Influenza (gripe)", dose: "dose anual, de preferência a vacina de alta concentração" },
      { name: "Pneumocócica conjugada VPC20", dose: "dose única · no SUS, para grupos específicos" },
      { name: "Herpes-zóster (VZR)", dose: "duas doses com intervalo de 2 meses", extra: true },
      { name: "Vírus sincicial respiratório – VSR (Arexvy® ou Abrysvo®)", dose: "dose única · rotina a partir de 70 anos, ou 60+ com fatores de risco", extra: true },
      { name: "dTpa (difteria, tétano e coqueluche)", dose: "reforço a cada 10 anos · no SUS, dT" },
      { name: "Hepatite B", dose: "três doses, se não vacinado" },
      { name: "Covid-19", dose: "conforme recomendação vigente" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Vacinas e imunobiológicos disponíveis na Clipe Vacinas Store
// (lista enviada pela clínica — "o esquema pode variar").
// ---------------------------------------------------------------------------
export interface StoreItem {
  name: string;
  note?: string;
}
export interface StoreGroup {
  title: string;
  icon: "baby" | "growth" | "heart" | "family" | "syringe";
  accent: string;
  items: StoreItem[];
}

export const storeGroups: StoreGroup[] = [
  {
    title: "Bebês e crianças",
    icon: "baby",
    accent: "var(--blue)",
    items: [
      { name: "Hexavalente", note: "2, 4 e 6 meses" },
      { name: "Pentavalente" },
      { name: "Rotavírus", note: "2, 4 e 6 meses" },
      { name: "Pneumocócica 15-valente", note: "2, 4 e 6 meses" },
      { name: "Pneumocócica 20-valente" },
      { name: "Meningocócica B", note: "3, 5 e 12 meses · menores de 2 anos: 3 doses · a partir de 2 anos: 2 doses" },
      { name: "Meningocócica ACWY", note: "3, 5 e 12 meses" },
      { name: "Beyfortus (nirsevimabe)", note: "prevenção da bronquiolite (VSR)" },
    ],
  },
  {
    title: "Para todas as idades",
    icon: "growth",
    accent: "var(--green)",
    items: [
      { name: "Hepatite A", note: "2 doses" },
      { name: "Hepatite B" },
      { name: "Febre amarela" },
      { name: "Varicela (catapora)" },
      { name: "Tríplice viral (sarampo, caxumba e rubéola)" },
      { name: "dTpa (difteria, tétano e coqueluche)" },
      { name: "HPV" },
      { name: "Influenza (gripe)" },
      { name: "Qdenga (dengue)", note: "a partir de 4 anos · 2 doses" },
    ],
  },
  {
    title: "Gestantes",
    icon: "heart",
    accent: "var(--pink)",
    items: [
      { name: "Abrysvo", note: "vírus sincicial respiratório (VSR) na gestação" },
      { name: "Imunoglobulina anti-Rh (Rhophylac)", note: "mediante prescrição" },
    ],
  },
  {
    title: "Adultos e 60+",
    icon: "family",
    accent: "var(--lilac)",
    items: [
      { name: "Herpes-zóster" },
      { name: "Arexvy", note: "vírus sincicial respiratório (VSR) para idosos" },
    ],
  },
  {
    title: "Outras aplicações",
    icon: "syringe",
    accent: "var(--gold)",
    items: [{ name: "Lectrum", note: "tratamento indicado pelo médico (crescimento) · mediante prescrição" }],
  },
];

/** Indica se um item do calendário está na lista da Clipe Vacinas Store. */
const storeKeywords = [
  "hexavalente", "pentavalente", "rotavírus", "pneumocócica", "meningocócica b", "meningocócica acwy",
  "hepatite a", "hepatite b", "febre amarela", "varicela", "tríplice viral", "dtpa", "hpv",
  "herpes", "influenza", "dengue", "sincicial", "nirsevimabe", "vsr",
];
export const inStore = (name: string) => {
  const n = name.toLowerCase();
  return storeKeywords.some((k) => n.includes(k));
};
