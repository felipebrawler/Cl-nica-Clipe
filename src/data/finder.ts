import type { IconName } from "../lib/icons";

export interface FinderNeed {
  label: string;
  services: string[]; // slugs
}

export interface FinderWho {
  id: string;
  label: string;
  hint: string;
  icon: IconName;
  needs: FinderNeed[];
}

export const finder: FinderWho[] = [
  {
    id: "gestante",
    label: "Para mim, gestante",
    hint: "Preparando a chegada do bebê",
    icon: "heart",
    needs: [
      { label: "Conhecer o pediatra antes do parto", services: ["consulta-pediatrica-pre-natal"] },
      { label: "Pediatra na sala de parto", services: ["pediatra-na-sala-de-parto"] },
      { label: "Alimentação na gestação", services: ["nutricao-na-gestacao"] },
      { label: "Vacinas da gestação", services: ["vacinas"] },
    ],
  },
  {
    id: "bebe",
    label: "Para o meu bebê",
    hint: "Recém-nascido até 1 ano",
    icon: "baby",
    needs: [
      {
        label: "Testes do recém-nascido",
        services: ["teste-do-pezinho", "teste-da-orelhinha", "teste-da-bochechinha"],
      },
      { label: "Pele amarelada (icterícia)", services: ["fototerapia"] },
      { label: "Dificuldade para mamar / linguinha", services: ["teste-da-linguinha", "frenotomia"] },
      { label: "Consulta de rotina", services: ["consulta-pediatrica"] },
      { label: "Vacinas", services: ["vacinas"] },
      { label: "Primeiro brinco", services: ["primeiro-brinco"] },
      { label: "Introdução alimentar", services: ["nutricao-infantil"] },
    ],
  },
  {
    id: "crianca",
    label: "Para o meu filho",
    hint: "Crianças e adolescentes",
    icon: "growth",
    needs: [
      { label: "Consulta de pediatria", services: ["consulta-pediatrica"] },
      {
        label: "Comportamento, emoções, TEA ou TDAH",
        services: ["psicologia-infantojuvenil", "neuropediatria"],
      },
      { label: "Desenvolvimento motor", services: ["fisioterapia-neurofuncional"] },
      { label: "Alimentação e seletividade", services: ["nutricao-infantil"] },
      { label: "Feridas ou dor", services: ["laserterapia"] },
      { label: "Vacinas", services: ["vacinas"] },
    ],
  },
  {
    id: "adulto",
    label: "Para um adulto",
    hint: "Você ou alguém da família",
    icon: "family",
    needs: [
      { label: "Avaliação para cirurgia", services: ["cirurgia-geral"] },
      { label: "Coração e clínica médica", services: ["cardiologia"] },
      { label: "Exame de respiração", services: ["espirometria"] },
      { label: "Injetáveis ou soroterapia", services: ["injetaveis-e-soroterapia"] },
      { label: "Dor, inflamação ou cicatrização", services: ["laserterapia"] },
      { label: "Reabilitação e equilíbrio", services: ["fisioterapia-neurofuncional"] },
      { label: "Vacinas", services: ["vacinas"] },
    ],
  },
];
