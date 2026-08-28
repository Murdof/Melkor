import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "./types"
import { resolveRelative, type FullSlug } from "../util/path"

const pastasIgnoradas = new Set([
  "assets",
  ".obsidian",
  ".trash",
  "tags",
])

export default (() => {
  const MelkorNav: QuartzComponent = ({
    fileData,
    allFiles,
  }: QuartzComponentProps) => {
    const paginaAtual = (fileData.slug ?? "index") as FullSlug

    const pastas = Array.from(
      new Set(
        allFiles
          .map((arquivo) => arquivo.slug)
          .filter((slug): slug is FullSlug => slug !== undefined)
          // Só considera conteúdo que realmente está dentro de uma pasta
          .filter((slug) => slug.includes("/"))
          .map((slug) => slug.split("/")[0])
          .filter(
            (pasta) =>
              pasta.length > 0 &&
              !pastasIgnoradas.has(pasta),
          ),
      ),
    ).sort((a, b) => a.localeCompare(b, "pt-BR"))

    return (
      <nav class="melkor-nav" aria-label="Navegação principal">
        <div class="melkor-nav-links">
          {pastas.map((pasta) => {
            const destino = pasta as FullSlug
            const ativa =
              paginaAtual === destino ||
              paginaAtual.startsWith(`${pasta}/`)

            return (
              <a
                href={resolveRelative(paginaAtual, destino)}
                class={ativa ? "melkor-nav-link active" : "melkor-nav-link"}
              >
                {pasta}
              </a>
            )
          })}
        </div>
      </nav>
    )
  }

  return MelkorNav
}) satisfies QuartzComponentConstructor