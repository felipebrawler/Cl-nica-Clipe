import type { IconName } from "../lib/icons";

export type PhaseId = "gestacao" | "nascimento" | "infancia" | "familia";

export interface Phase {
  id: PhaseId;
  title: string;
  kicker: string;
  text: string;
  accent: string; // CSS var
  icon: IconName;
}

export const phases: Phase[] = [
  {
    id: "gestacao",
    title: "Gestação",
    kicker: "Antes de nascer",
    text: "O cuidado começa antes do parto: conheça o pediatra do seu bebê e prepare a alimentação da gestação.",
    accent: "var(--pink)",
    icon: "heart",
  },
  {
    id: "nascimento",
    title: "Nascimento",
    kicker: "Os primeiros dias",
    text: "Pediatra na sala de parto, todos os testes do recém-nascido, fototerapia e frenotomia em um só lugar.",
    accent: "var(--blue)",
    icon: "baby",
  },
  {
    id: "infancia",
    title: "Infância e adolescência",
    kicker: "Crescer com saúde",
    text: "Pediatria, vacinas, psicologia, fisioterapia, nutrição e neuropediatria acompanhando cada fase do desenvolvimento.",
    accent: "var(--green)",
    icon: "growth",
  },
  {
    id: "familia",
    title: "Toda a família",
    kicker: "Para os adultos também",
    text: "Cirurgia geral, cardiologia, espirometria, laserterapia, injetáveis e soroterapia para quem cuida.",
    accent: "var(--lilac)",
    icon: "family",
  },
];

export interface Service {
  slug: string;
  phase: PhaseId;
  title: string;
  short: string;
  body: string[];
  bullets?: { title: string; items: string[] };
  pros: string[]; // ids da equipe
  icon: IconName;
  message: string; // mensagem pronta para o WhatsApp
  link?: string; // página dedicada (ex.: Vacinas Store)
}

const msg = (s: string) => `Olá! Gostaria de agendar ${s} na Clínica Clipe.`;

export const services: Service[] = [
  // ---------- Gestação ----------
  {
    slug: "consulta-pediatrica-pre-natal",
    phase: "gestacao",
    title: "Consulta pediátrica no pré-natal",
    short: "Conheça o pediatra do seu bebê ainda na gestação e tire todas as dúvidas.",
    body: [
      "A consulta pediátrica no pré-natal é o primeiro encontro entre a família e o pediatra, antes mesmo do nascimento.",
      "É o momento de conversar sobre o parto, a amamentação, os primeiros cuidados, os testes do recém-nascido e as vacinas — chegando à maternidade com mais segurança e tranquilidade.",
    ],
    pros: ["ana-cristina"],
    icon: "heart",
    message: msg("uma consulta pediátrica no pré-natal"),
  },
  {
    slug: "nutricao-na-gestacao",
    phase: "gestacao",
    title: "Nutrição na gestação",
    short: "Acompanhamento nutricional personalizado para a mãe e o bebê.",
    body: [
      "Cuidado nutricional personalizado para uma gestação saudável e para construir, desde cedo, uma relação positiva com a alimentação.",
    ],
    pros: ["neliane"],
    icon: "apple",
    message: msg("um acompanhamento nutricional na gestação"),
  },

  // ---------- Nascimento ----------
  {
    slug: "pediatra-na-sala-de-parto",
    phase: "nascimento",
    title: "Pediatra na sala de parto",
    short: "Acompanhamento do pediatra no nascimento, em partos de baixo e alto risco.",
    body: [
      "A presença do pediatra na sala de parto garante a avaliação e os primeiros cuidados do bebê logo ao nascer, tanto em partos de baixo quanto de alto risco.",
      "Agende ainda na gestação para alinhar todos os detalhes com antecedência.",
    ],
    pros: ["ana-cristina"],
    icon: "baby",
    message: msg("o acompanhamento do pediatra na sala de parto"),
  },
  {
    slug: "teste-do-pezinho",
    phase: "nascimento",
    title: "Teste do Pezinho",
    short: "Triagem simples, rápida e segura de doenças graves logo nos primeiros dias.",
    body: [
      "O Teste do Pezinho é um exame simples, rápido e seguro, que pode identificar precocemente doenças graves, permitindo o tratamento adequado e mais qualidade de vida para o bebê.",
      "O momento ideal é entre o 3º e o 5º dia de vida.",
    ],
    bullets: {
      title: "O que o Teste do Pezinho detecta",
      items: [
        "Fenilcetonúria",
        "Hipotireoidismo congênito",
        "Doenças falciformes",
        "Fibrose cística",
        "Outras alterações metabólicas e genéticas",
      ],
    },
    pros: ["ana-cristina"],
    icon: "foot",
    message: msg("o Teste do Pezinho"),
  },
  {
    slug: "teste-da-orelhinha",
    phase: "nascimento",
    title: "Teste da Orelhinha",
    short: "Exame rápido, seguro e indolor para avaliar a audição do bebê.",
    body: [
      "A triagem auditiva neonatal é um exame rápido, seguro e indolor, que permite o diagnóstico precoce de alterações auditivas — importante para a fala e o desenvolvimento do bebê.",
      "O ideal é realizar ainda no primeiro mês de vida.",
    ],
    pros: ["ana-cristina"],
    icon: "ear",
    message: msg("o Teste da Orelhinha"),
  },
  {
    slug: "teste-do-olhinho",
    phase: "nascimento",
    title: "Teste do Olhinho",
    short: "Teste do reflexo vermelho para identificar alterações na visão.",
    body: [
      "O Teste do Olhinho (reflexo vermelho) é rápido e indolor e ajuda a identificar precocemente alterações que podem comprometer a visão, como catarata congênita.",
      "É feito nos primeiros dias de vida e deve ser repetido nas consultas de rotina nos primeiros anos.",
    ],
    pros: ["ana-cristina"],
    icon: "eye",
    message: msg("o Teste do Olhinho"),
  },
  {
    slug: "teste-do-coracaozinho",
    phase: "nascimento",
    title: "Teste do Coraçãozinho",
    short: "Oximetria de pulso para triagem de cardiopatias congênitas.",
    body: [
      "O Teste do Coraçãozinho mede a oxigenação do sangue com um sensor colocado na mão e no pé do bebê. É indolor e ajuda a identificar sinais de cardiopatias congênitas.",
      "É realizado entre 24 e 48 horas de vida.",
    ],
    pros: ["ana-cristina"],
    icon: "heartbeat",
    message: msg("o Teste do Coraçãozinho"),
  },
  {
    slug: "teste-da-linguinha",
    phase: "nascimento",
    title: "Teste da Linguinha",
    short: "Avaliação do frênulo da língua, importante para a amamentação.",
    body: [
      "O Teste da Linguinha avalia o frênulo lingual do bebê. Alterações podem dificultar a amamentação e, mais tarde, a fala.",
      "Quando indicado, a frenotomia pode ser realizada aqui mesmo na Clipe.",
    ],
    pros: ["ana-cristina"],
    icon: "tongue",
    message: msg("o Teste da Linguinha"),
  },
  {
    slug: "teste-da-bochechinha",
    phase: "nascimento",
    title: "Teste da Bochechinha",
    short: "Triagem neonatal genética feita com um cotonete na bochecha.",
    body: [
      "O Teste da Bochechinha é uma triagem neonatal genética: com uma coleta simples na parte interna da bochecha, o exame analisa o DNA do bebê em busca de alterações genéticas.",
      "É um cuidado que complementa o Teste do Pezinho, com diagnóstico precoce, mais segurança e tecnologia a favor do futuro do seu filho.",
    ],
    pros: ["ana-cristina"],
    icon: "dna",
    message: msg("o Teste da Bochechinha"),
  },
  {
    slug: "fototerapia",
    phase: "nascimento",
    title: "Fototerapia",
    short: "Tratamento seguro e eficaz para a icterícia neonatal.",
    body: [
      "A fototerapia é um tratamento indicado para reduzir os níveis de bilirrubina no sangue do bebê, causa da icterícia neonatal (pele e olhos amarelados).",
      "É um procedimento seguro, indolor e eficaz, realizado com acompanhamento da nossa equipe.",
    ],
    pros: ["ana-cristina"],
    icon: "sun",
    message: msg("uma avaliação para fototerapia"),
  },
  {
    slug: "frenotomia",
    phase: "nascimento",
    title: "Frenotomia",
    short: "O “corte na linguinha”, quando o frênulo atrapalha a amamentação.",
    body: [
      "A frenotomia é um procedimento rápido para liberar o frênulo da língua quando ele é curto ou restritivo e dificulta a amamentação.",
      "A indicação é feita após avaliação (Teste da Linguinha).",
    ],
    pros: ["ana-cristina"],
    icon: "scissors",
    message: msg("uma avaliação para frenotomia"),
  },
  {
    slug: "primeiro-brinco",
    phase: "nascimento",
    title: "Colocação do primeiro brinco",
    short: "Com técnica segura e todo o cuidado que o momento merece.",
    body: [
      "A colocação do primeiro brinco é feita em ambiente de saúde, com técnica segura, materiais adequados e todo o carinho com o bebê e a família.",
    ],
    pros: [],
    icon: "sparkle",
    message: msg("a colocação do primeiro brinco"),
  },

  // ---------- Infância ----------
  {
    slug: "consulta-pediatrica",
    phase: "infancia",
    title: "Consulta de pediatria",
    short: "Acompanhamento do crescimento e desenvolvimento, do bebê ao adolescente.",
    body: [
      "Consultas de rotina e de acompanhamento para o crescimento e o desenvolvimento saudáveis, do recém-nascido ao adolescente.",
      "Mais saúde, prevenção e segurança para o seu pequeno.",
    ],
    pros: ["ana-cristina"],
    icon: "stethoscope",
    message: msg("uma consulta de pediatria"),
  },
  {
    slug: "vacinas",
    phase: "infancia",
    title: "Vacinas para todas as idades",
    short: "Na Clipe Vacinas Store, do bebê ao adulto.",
    body: [
      "Vacinas para todas as idades na Clipe Vacinas Store, com aplicação segura e humanizada.",
    ],
    pros: ["jucelia"],
    icon: "syringe",
    message: "Olá! Gostaria de informações sobre vacinas na Clipe Vacinas Store.",
    link: "/vacinas-store/",
  },
  {
    slug: "psicologia-infantojuvenil",
    phase: "infancia",
    title: "Psicologia infantojuvenil",
    short: "Cuidado emocional para crianças e adolescentes, com orientação aos pais.",
    body: [
      "Atendimentos individualizados, considerando as necessidades e particularidades de cada criança e adolescente.",
      "Abordagens em Análise do Comportamento Aplicada (ABA) e Terapia Cognitivo-Comportamental (TCC), com orientação parental e suporte às famílias durante todo o processo.",
      "Atendimento presencial na Clínica Clipe ou online.",
    ],
    bullets: {
      title: "Atendemos",
      items: [
        "Transtorno do Espectro Autista (TEA) — nível 1 de suporte",
        "TDAH",
        "Comportamentos disruptivos",
        "Ansiedade",
        "Outras dificuldades emocionais e comportamentais",
      ],
    },
    pros: ["laura-maria"],
    icon: "mind",
    message: msg("uma avaliação com a psicóloga infantojuvenil"),
  },
  {
    slug: "neuropediatria",
    phase: "infancia",
    title: "Neuropediatria e psiquiatria infantil",
    short: "Avaliação do neurodesenvolvimento e da saúde mental infantil.",
    body: [
      "Atendimento especializado em neuropediatria e psiquiatria infantil, em datas agendadas na Clínica Clipe.",
    ],
    pros: ["graziela"],
    icon: "brain",
    message: "Olá! Gostaria de saber a próxima data de atendimento em neuropediatria na Clínica Clipe.",
  },
  {
    slug: "fisioterapia-neurofuncional",
    phase: "infancia",
    title: "Fisioterapia neurofuncional",
    short: "Mais movimento, independência e qualidade de vida.",
    body: [
      "Fisioterapia neurofuncional com atendimento individualizado, para crianças e adultos.",
    ],
    bullets: {
      title: "Indicada para",
      items: [
        "Reabilitação neurológica",
        "Desenvolvimento motor",
        "Postura e equilíbrio",
        "Estimulação cognitiva",
      ],
    },
    pros: ["mariana-garcia"],
    icon: "move",
    message: msg("uma avaliação de fisioterapia neurofuncional"),
  },
  {
    slug: "nutricao-infantil",
    phase: "infancia",
    title: "Nutrição infantil",
    short: "Introdução alimentar, seletividade e acompanhamento em todas as fases.",
    body: [
      "Um projeto voltado à educação alimentar infantil, tornando o contato com os alimentos mais leve, prazeroso e cheio de descobertas.",
    ],
    bullets: {
      title: "Atendimento especializado em",
      items: [
        "Introdução alimentar",
        "Seletividade alimentar",
        "Obesidade infantil",
        "Acompanhamento em todas as fases do desenvolvimento",
      ],
    },
    pros: ["neliane"],
    icon: "apple",
    message: msg("uma consulta de nutrição infantil"),
  },

  // ---------- Família ----------
  {
    slug: "cirurgia-geral",
    phase: "familia",
    title: "Cirurgia geral",
    short: "Avaliação e acompanhamento cirúrgico com o Dr. Ualas Hermidorff.",
    body: [
      "Consulta de avaliação, indicação e acompanhamento de procedimentos de cirurgia geral.",
    ],
    bullets: {
      title: "Procedimentos",
      items: [
        "Hernioplastia",
        "Vasectomia",
        "Perineoplastia",
        "Histerectomia",
        "Retirada da vesícula",
        "Pequenas cirurgias em geral",
      ],
    },
    pros: ["ualas"],
    icon: "scalpel",
    message: msg("uma consulta com o cirurgião geral"),
  },
  {
    slug: "cardiologia",
    phase: "familia",
    title: "Clínica médica e cardiologia",
    short: "Cuidado com o coração e a saúde do adulto.",
    body: ["Consultas de clínica médica e cardiologia para adultos, com foco em prevenção e acompanhamento."],
    pros: ["joao-renato"],
    icon: "heartbeat",
    message: msg("uma consulta de cardiologia"),
  },
  {
    slug: "espirometria",
    phase: "familia",
    title: "Espirometria",
    short: "Exame simples, rápido e seguro que avalia a função pulmonar.",
    body: ["A espirometria é um exame simples, rápido e seguro, que avalia a função pulmonar."],
    bullets: {
      title: "Para que serve",
      items: [
        "Ajuda a diagnosticar e monitorar doenças respiratórias, como asma e DPOC",
        "Verifica a eficácia dos tratamentos",
        "Avalia a função pulmonar para cirurgias e atividades físicas",
      ],
    },
    pros: [],
    icon: "lungs",
    message: msg("o exame de espirometria"),
  },
  {
    slug: "laserterapia",
    phase: "familia",
    title: "Laserterapia",
    short: "Tratamento seguro, indolor e não invasivo, também para crianças.",
    body: [
      "A laserterapia é um tratamento seguro, indolor e não invasivo, que utiliza a luz do laser para estimular a cicatrização e aliviar a dor.",
    ],
    bullets: {
      title: "Indicada para",
      items: [
        "Cicatrização de feridas",
        "Alívio da dor",
        "Redução de inflamações",
        "Lesões musculares e articulares",
        "Pós-operatório",
      ],
    },
    pros: [],
    icon: "laser",
    message: msg("uma sessão de laserterapia"),
  },
  {
    slug: "injetaveis-e-soroterapia",
    phase: "familia",
    title: "Sala de injetáveis e soroterapia",
    short: "Aplicação segura e humanizada, mediante prescrição.",
    body: [
      "Sala de injetáveis com a Enfermeira Jucélia: aplicação segura e humanizada, com qualidade e carinho em todas as fases da vida.",
      "Medicações e soroterapia são realizadas mediante prescrição médica.",
    ],
    pros: ["jucelia"],
    icon: "drop",
    message: msg("uma aplicação na sala de injetáveis"),
  },
];

export const servicesByPhase = (id: PhaseId) => services.filter((s) => s.phase === id);
export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
export const serviceHref = (s: Service) => s.link ?? `/servicos/${s.slug}/`;
