import { defineConfig } from "astro/config";

// TODO: definir `site` com o domínio final (ex.: https://www.clinicaclipe.com.br)
export default defineConfig({
  trailingSlash: "always",
  build: { format: "directory" },
});
