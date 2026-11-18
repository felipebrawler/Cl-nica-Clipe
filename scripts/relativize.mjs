// Copia dist/ para um diretório de saída com todos os caminhos relativos,
// para o site funcionar hospedado em qualquer subpasta (ex.: prévia em link).
// Uso: node scripts/relativize.mjs dist out
import { cpSync, readdirSync, readFileSync, writeFileSync, statSync, rmSync, renameSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";

const [src = "dist", out = "dist-relative"] = process.argv.slice(2);
rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });
// alguns hosts reservam nomes começando com "_": renomeia _astro -> assets
renameSync(join(out, "_astro"), join(out, "assets"));

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(out);

const toRel = (fromDir, url) => {
  const m = url.match(/^\/([^?#]*)([?#].*)?$/);
  if (!m) return url;
  let [, path, rest = ""] = m;
  if (path === "" || path.endsWith("/")) path += "index.html";
  let r = relative(fromDir, join(out, path)).split(sep).join("/");
  if (!r.startsWith(".")) r = "./" + r;
  return r + rest;
};

for (const f of files) {
  if (f.endsWith(".html")) {
    const dir = dirname(f);
    let s = readFileSync(f, "utf8").replaceAll("/_astro/", "/assets/");
    s = s.replace(/\b(href|src|action|poster)="(\/(?!\/)[^"]*)"/g, (_, a, u) => `${a}="${toRel(dir, u)}"`);
    s = s.replace(/\bsrcset="([^"]*)"/g, (_, v) =>
      `srcset="${v.split(",").map((p) => p.trim().replace(/^(\/(?!\/)\S*)/, (u) => toRel(dir, u))).join(", ")}"`
    );
    s = s.replace(/url\((['"]?)(\/(?!\/)[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${toRel(dir, u)}${q})`);
    // links dentro de dados JSON (ex.: "href":"/servicos/x/")
    s = s.replace(/"href":"(\/(?!\/)[^"]*)"/g, (_, u) => `"href":"${toRel(dir, u)}"`);
    writeFileSync(f, s);
  } else if (f.endsWith(".css") || f.endsWith(".js")) {
    const dir = dirname(f);
    let s = readFileSync(f, "utf8").replaceAll("/_astro/", "/assets/");
    s = s.replace(/url\((['"]?)(\/(?!\/)[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${toRel(dir, u)}${q})`);
    writeFileSync(f, s);
  }
}
console.log(`ok: ${files.length} files -> ${out}`);
