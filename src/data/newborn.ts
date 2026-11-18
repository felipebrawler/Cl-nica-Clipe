import type { IconName } from "../lib/icons";

// Janelas ideais (em dias de vida) para os testes do recém-nascido.
// TODO: conteúdo a ser revisado pela responsável técnica antes da publicação.
export interface NewbornTest {
  slug: string;
  name: string;
  icon: IconName;
  from: number; // dia de vida (0 = nascimento)
  to: number;
  when: string;
  what: string;
}

export const newbornTests: NewbornTest[] = [
  {
    slug: "teste-do-coracaozinho",
    name: "Teste do Coraçãozinho",
    icon: "heartbeat",
    from: 1,
    to: 2,
    when: "Entre 24 e 48 horas de vida",
    what: "Oximetria de pulso para triagem de cardiopatias congênitas.",
  },
  {
    slug: "teste-do-olhinho",
    name: "Teste do Olhinho",
    icon: "eye",
    from: 0,
    to: 3,
    when: "Primeiros dias — e repetir nas consultas de rotina",
    what: "Reflexo vermelho, para identificar alterações na visão.",
  },
  {
    slug: "teste-da-linguinha",
    name: "Teste da Linguinha",
    icon: "tongue",
    from: 0,
    to: 3,
    when: "Primeiros dias de vida",
    what: "Avaliação do frênulo da língua, importante para a amamentação.",
  },
  {
    slug: "teste-do-pezinho",
    name: "Teste do Pezinho",
    icon: "foot",
    from: 3,
    to: 5,
    when: "Entre o 3º e o 5º dia de vida",
    what: "Triagem de doenças metabólicas, genéticas e hormonais.",
  },
  {
    slug: "teste-da-bochechinha",
    name: "Teste da Bochechinha",
    icon: "dna",
    from: 0,
    to: 30,
    when: "Desde os primeiros dias de vida",
    what: "Triagem neonatal genética com coleta na bochecha.",
  },
  {
    slug: "teste-da-orelhinha",
    name: "Teste da Orelhinha",
    icon: "ear",
    from: 0,
    to: 30,
    when: "Até o fim do 1º mês de vida",
    what: "Triagem auditiva rápida, segura e indolor.",
  },
];

export const guideMarks = [
  { day: 0, label: "Nascimento" },
  { day: 2, label: "2 dias" },
  { day: 5, label: "5 dias" },
  { day: 15, label: "15 dias" },
  { day: 30, label: "1 mês" },
  { day: 60, label: "2 meses" },
];
