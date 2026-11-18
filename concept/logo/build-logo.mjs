// Gera os arquivos SVG do logo Clipe (redesenho vetorial no estilo original).
// Uso: node concept/logo/build-logo.mjs
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

export const C = {
  lilac: "#9A8FC8",
  brown: "#5E4636",
  green: "#8DC63F",
  blue: "#5FBFE3",
  pink: "#F09BBE",
  white: "#FFFFFF",
};

// ---------- Símbolo: as três carinhas ----------
// Desenhado num quadro de 180 x 100 (centro das carinhas em y=62).
export function faces({ green = C.green, blue = C.blue, pink = C.pink } = {}) {
  const sw = 5;
  return `
  <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="${sw}">
    <!-- verde: cachinho + boca "o" -->
    <g stroke="${green}">
      <circle cx="30" cy="62" r="27"/>
      <path d="M30 35 C29 23 41 20 42 28 C43 34 35 35 35 29"/>
      <circle cx="20" cy="57" r="1.6" stroke-width="4.4"/>
      <circle cx="40" cy="57" r="1.6" stroke-width="4.4"/>
      <circle cx="30" cy="75" r="5.5" stroke-width="4"/>
    </g>
    <!-- azul: topetinho + piscadinha -->
    <g stroke="${blue}">
      <circle cx="90" cy="62" r="27"/>
      <path d="M80 36 L82 25 L87 33 L91 21 L95 33 L101 26 L100 37"/>
      <path d="M76 53 L83 57 L76 61" stroke-width="4"/>
      <circle cx="100" cy="57" r="1.6" stroke-width="4.4"/>
      <path d="M77 69 Q90 83 103 69"/>
    </g>
    <!-- rosa: lacinho + sorrisão -->
    <g stroke="${pink}">
      <circle cx="150" cy="62" r="27"/>
      <path d="M152 33 L139 23 L140 40 Z M152 33 L166 22 L165 40 Z" fill="${pink}" stroke-width="3"/>
      <circle cx="140" cy="57" r="1.6" stroke-width="4.4"/>
      <circle cx="160" cy="57" r="1.6" stroke-width="4.4"/>
      <path d="M136 67 L164 67 Q162 84 150 84 Q138 84 136 67 Z" stroke-width="4"/>
    </g>
  </g>`;
}

// ---------- Letreiro "CLIPE" ----------
// Letras grossas, levemente tortas, com o filete branco por dentro (como no original).
const letters = [
  { d: "M100 34 Q78 10 52 18 Q22 28 22 62 Q22 100 54 108 Q82 114 102 94", rot: -4, cx: 62, cy: 62 },
  { d: "M145 16 L145 106 L188 106", rot: 3, cx: 166, cy: 62 },
  { d: "M242 18 L242 104 M224 16 L260 16 M224 106 L260 106", rot: -3, cx: 242, cy: 62 },
  { d: "M305 108 L305 18 L332 18 Q364 18 364 44 Q364 70 332 70 L310 70", rot: 3, cx: 334, cy: 62 },
  { d: "M455 18 L408 18 L408 104 L455 104 M408 61 L445 61", rot: -3, cx: 432, cy: 62 },
];

export function wordmark({ fill = C.lilac, inline = C.white, id = "w" } = {}) {
  const thick = letters
    .map((l) => `<path d="${l.d}" transform="rotate(${l.rot} ${l.cx} ${l.cy})"/>`)
    .join("");
  const thin = letters
    .map(
      (l) =>
        `<path d="${l.d}" transform="rotate(${l.rot} ${l.cx} ${l.cy}) translate(-3.5 -3.5)"/>`
    )
    .join("");
  return `
  <defs>
    <filter id="${id}-rough" filterUnits="userSpaceOnUse" x="-40" y="-40" width="560" height="200">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7"/>
      <feDisplacementMap in="SourceGraphic" scale="3.2"/>
    </filter>
  </defs>
  <g filter="url(#${id}-rough)">
    <g fill="none" stroke="${fill}" stroke-width="30" stroke-linejoin="miter" stroke-linecap="square">${thick}</g>
    <g fill="none" stroke="${inline}" stroke-width="3.6" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="70 9 30 7">${thin}</g>
  </g>`;
}

// Largura útil do letreiro: x 7..470  -> centro ~238
function primary({ tagline, word = C.lilac, tag = C.brown, inline = C.white, faceColors, id }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" role="img" aria-label="Clipe — ${tagline}">
  <title>Clipe — ${tagline}</title>
  <g transform="translate(141 -2) scale(1.1)">${faces(faceColors)}</g>
  <g transform="translate(20 104) scale(.9)">${wordmark({ fill: word, inline, id })}</g>
  <line x1="110" y1="248" x2="370" y2="248" stroke="${tag}" stroke-opacity=".45" stroke-width="2"/>
  <text x="240" y="282" text-anchor="middle" fill="${tag}"
        font-family="'Nunito Sans Variable','Nunito Sans','Montserrat',Arial,sans-serif"
        font-weight="700" font-size="21" letter-spacing="4.2">${tagline}</text>
</svg>`;
}

function storeBadge({ id = "vs" } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="Clipe Vacinas Store">
  <title>Clipe Vacinas Store</title>
  <circle cx="200" cy="200" r="192" fill="#F8F3EC" stroke="#C2A06A" stroke-width="8"/>
  <g transform="translate(128 52) scale(.8)">${faces()}</g>
  <g transform="translate(64 145) scale(.57)">${wordmark({ id })}</g>
  <line x1="110" y1="245" x2="290" y2="245" stroke="${C.brown}" stroke-opacity=".45" stroke-width="2"/>
  <text x="200" y="285" text-anchor="middle" fill="${C.brown}" font-family="'Nunito Sans Variable','Nunito Sans',Arial,sans-serif" font-weight="700" font-size="30" letter-spacing="7">VACINAS</text>
  <text x="200" y="318" text-anchor="middle" fill="#C2A06A" font-family="'Nunito Sans Variable','Nunito Sans',Arial,sans-serif" font-weight="700" font-size="19" letter-spacing="6">STORE</text>
</svg>`;
}

function symbol() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 100" role="img" aria-label="Clipe">
  <title>Clipe</title>${faces()}
</svg>`;
}

export const files = {
  "clipe-logo-principal.svg": primary({ tagline: "PEDIATRIA E ESPECIALIDADES", id: "p" }),
  "clipe-logo-especialidades-vacinas.svg": primary({ tagline: "ESPECIALIDADES E VACINAS", id: "e" }),
  "clipe-logo-branco.svg": primary({
    tagline: "PEDIATRIA E ESPECIALIDADES",
    word: "#FFFFFF",
    tag: "#FFFFFF",
    inline: C.lilac,
    faceColors: { green: "#FFFFFF", blue: "#FFFFFF", pink: "#FFFFFF" },
    id: "b",
  }),
  "clipe-vacinas-store.svg": storeBadge(),
  "clipe-simbolo.svg": symbol(),
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  for (const [name, svg] of Object.entries(files)) writeFileSync(join(here, name), svg + "\n");
  console.log("ok:", Object.keys(files).join(", "));
}
