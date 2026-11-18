// Monta concept/moodboard.html a partir do template, embutindo os SVGs do logo.
// Uso: node concept/build-moodboard.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
let n = 0;
const svg = (name) => {
  // Cada cópia recebe ids únicos para os filtros não colidirem.
  const id = `m${n++}`;
  return readFileSync(join(here, "logo", name), "utf8")
    .replace(/<title>.*?<\/title>/, "")
    .replace(/id="(\w+)-rough"/g, `id="${id}-$1-rough"`)
    .replace(/url\(#(\w+)-rough\)/g, `url(#${id}-$1-rough)`);
};

const map = {
  "logo-principal": "clipe-logo-principal.svg",
  "logo-branco": "clipe-logo-branco.svg",
  "vacinas-store": "clipe-vacinas-store.svg",
  simbolo: "clipe-simbolo.svg",
};

const html = readFileSync(join(here, "moodboard.template.html"), "utf8").replace(
  /\{\{([\w-]+)\}\}/g,
  (_, key) => svg(map[key])
);
writeFileSync(join(here, "moodboard.html"), html);
console.log("ok: concept/moodboard.html");
