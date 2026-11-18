# Clínica Clipe — site

Site da Clínica Clipe (Pediatria e Especialidades), Pontes e Lacerda/MT.
Feito com [Astro](https://astro.build): site estático, rápido e sem dependências pesadas.

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/ para publicar
```

## Onde editar o conteúdo
| O quê | Arquivo |
|---|---|
| Telefone, endereço, responsável técnica, horários | `src/data/site.ts` |
| Equipe (nomes, registros, bios, fotos) | `src/data/team.ts` |
| Serviços e fases | `src/data/services.ts` |
| Guia do recém-nascido (janelas dos testes) | `src/data/newborn.ts` |
| Calendário de vacinas | `src/data/vaccines.ts` |
| "Encontre o cuidado certo" | `src/data/finder.ts` |
| Fotos | `src/assets/` |

O conceito, a identidade e o logo estão em `concept/`.

## Pendências antes de publicar
Procure por `TODO` no código:
- Horário de atendimento (`site.ts`)
- CREFITO (Dra. Mariana) e COREN (Enf. Jucélia) (`team.ts`)
- Situação da Dra. Graziela (equipe fixa ou datas específicas)
- Fotos reais da equipe e da fachada/Vacinas Store prontas
- **Revisão médica** do guia do recém-nascido e do calendário de vacinas pela responsável técnica
- Domínio final (`astro.config.mjs`)
