export type Area =
  | "Pediatria"
  | "Cirurgia"
  | "Cardiologia"
  | "Saúde mental"
  | "Reabilitação"
  | "Nutrição"
  | "Enfermagem";

export interface Professional {
  id: string;
  name: string;
  short: string; // nome curto para cards
  role: string;
  areas: Area[];
  registration?: string; // vazio = ainda não confirmado (não exibir)
  bio: string;
  focus: string[];
  note?: string;
  photo?: string; // nome do arquivo em src/assets/equipe/ (ex.: "laura-maria.png")
  instagram?: string;
}

export const team: Professional[] = [
  {
    id: "ana-cristina",
    name: "Dra. Ana Cristina Amaral Torres Hermidorff",
    short: "Dra. Ana Cristina",
    role: "Médica Pediatra · Responsável Técnica",
    areas: ["Pediatria"],
    registration: "CRM-MT 6756 · RQE 1580",
    bio: "Pediatra e responsável técnica da Clínica Clipe. Acompanha a família desde a consulta pediátrica no pré-natal, passando pela sala de parto e pelos primeiros dias do bebê, até a infância e a adolescência.",
    focus: [
      "Consulta pediátrica",
      "Consulta pediátrica no pré-natal",
      "Sala de parto de baixo e alto risco",
      "Testes do recém-nascido",
    ],
  },
  {
    id: "ualas",
    name: "Dr. Ualas Hermidorff",
    short: "Dr. Ualas Hermidorff",
    role: "Médico Cirurgião Geral",
    areas: ["Cirurgia"],
    registration: "CRM-MT 7901 · RQE 4073",
    bio: "Cirurgião geral, com atendimento em consultório na Clínica Clipe para avaliação, indicação e acompanhamento de procedimentos cirúrgicos.",
    focus: [
      "Hernioplastia",
      "Vasectomia",
      "Perineoplastia",
      "Histerectomia",
      "Retirada da vesícula",
      "Pequenas cirurgias em geral",
    ],
  },
  {
    id: "joao-renato",
    name: "Dr. João Renato Vital",
    short: "Dr. João Renato Vital",
    role: "Clínica Médica · Cardiologia",
    areas: ["Cardiologia"],
    registration: "CRM-MT 8664",
    bio: "Atendimento em clínica médica e cardiologia para adultos, com foco na prevenção e no acompanhamento da saúde do coração.",
    focus: ["Consulta cardiológica", "Clínica médica", "Prevenção cardiovascular"],
  },
  {
    id: "graziela",
    name: "Dra. Graziela Lunz",
    short: "Dra. Graziela Lunz",
    role: "Neuropediatra e Psiquiatra Infantil",
    areas: ["Pediatria", "Saúde mental"],
    registration: "CRM-MT 6406 · RQE 3629",
    bio: "Neuropediatra e psiquiatra infantil, com atendimento em Pontes e Lacerda em datas agendadas.",
    focus: ["Neurodesenvolvimento", "Neuropediatria", "Psiquiatria infantil"],
    // TODO: confirmar se faz parte da equipe fixa ou atende em datas específicas
    note: "Atendimento em datas específicas — consulte a próxima agenda.",
  },
  {
    id: "laura-maria",
    name: "Laura Maria",
    short: "Laura Maria",
    role: "Psicóloga Infantojuvenil",
    areas: ["Saúde mental"],
    registration: "CRP 18/8281",
    bio: "Ajuda crianças e adolescentes a compreender emoções e desenvolver habilidades. Atendimentos individualizados, presenciais na Clínica Clipe ou online, com orientação parental durante todo o processo terapêutico.",
    focus: [
      "Análise do Comportamento Aplicada (ABA)",
      "Terapia Cognitivo-Comportamental (TCC)",
      "TEA (nível 1 de suporte), TDAH, ansiedade",
      "Orientação parental",
      "Atendimento presencial e online",
    ],
    photo: "laura-maria.png",
    instagram: "lauramaria.psi",
  },
  {
    id: "mariana-garcia",
    name: "Dra. Mariana Garcia",
    short: "Dra. Mariana Garcia",
    role: "Fisioterapeuta Neurofuncional",
    areas: ["Reabilitação"],
    registration: undefined, // TODO: CREFITO
    bio: "Fisioterapia neurofuncional para mais movimento, independência e qualidade de vida, com atendimento individualizado.",
    focus: [
      "Reabilitação neurológica",
      "Desenvolvimento motor",
      "Postura e equilíbrio",
      "Estimulação cognitiva",
    ],
  },
  {
    id: "neliane",
    name: "Neliane Macedo",
    short: "Neliane Macedo",
    role: "Nutricionista Materno-Infantil",
    areas: ["Nutrição"],
    registration: "CRN-MT 19022",
    bio: "Cuidado nutricional personalizado para promover uma relação saudável com a alimentação, desde a gestação e ao longo de toda a infância.",
    focus: [
      "Gestantes",
      "Introdução alimentar",
      "Seletividade alimentar",
      "Obesidade infantil",
    ],
  },
  {
    id: "jucelia",
    name: "Enfermeira Jucélia",
    short: "Enf. Jucélia",
    role: "Enfermeira · Sala de Injetáveis",
    areas: ["Enfermagem"],
    registration: undefined, // TODO: COREN
    bio: "Responsável pela sala de injetáveis, com aplicação segura e humanizada e atendimento com qualidade e carinho em todas as fases da vida.",
    focus: ["Aplicação de injetáveis", "Soroterapia (mediante prescrição)", "Vacinas"],
  },
];

export const byId = (id: string) => team.find((p) => p.id === id)!;

export const initials = (p: Professional) =>
  p.short
    .replace(/^(Dra?\.|Enf\.)\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
