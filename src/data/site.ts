export const site = {
  name: "Clínica Clipe",
  tagline: "Pediatria e Especialidades",
  slogan: "Cuidando do hoje, para um futuro melhor.",
  description:
    "Clínica Clipe em Pontes e Lacerda/MT: pediatria, vacinas, testes do recém-nascido e especialidades para toda a família, da gestação à vida adulta.",
  phoneDisplay: "(65) 99936-4497",
  phoneE164: "5565999364497",
  instagram: "clinicaclipepediatria",
  address: {
    street: "Rua Goiás, 922",
    district: "Centro",
    city: "Pontes e Lacerda",
    state: "MT",
    reference: "Ao lado do Hospital São Lucas",
  },
  // Responsável técnica (obrigatório na publicidade médica — Res. CFM 2.336/2023)
  rt: {
    name: "Dra. Ana Cristina A. Torres Hermidorff",
    crm: "CRM-MT 6756",
    rqe: "RQE 1580",
  },
  // TODO: confirmar horário de atendimento com a clínica
  hours: null as null | { days: string; time: string }[],
};

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Clínica Clipe, " + fullAddress
)}`;

export const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}&navigate=yes`;

/** Link de WhatsApp com mensagem pronta. */
export function wa(message = "Olá! Gostaria de agendar um atendimento na Clínica Clipe.") {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/servicos/", label: "Serviços" },
  { href: "/vacinas-store/", label: "Vacinas Store" },
  { href: "/guia-recem-nascido/", label: "Guia do recém-nascido" },
  { href: "/equipe/", label: "Equipe" },
  { href: "/a-clinica/", label: "A Clínica" },
  { href: "/contato/", label: "Contato" },
];
