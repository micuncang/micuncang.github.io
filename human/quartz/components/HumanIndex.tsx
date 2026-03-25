import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import { pathToRoot, resolveRelative } from "../util/path"

function isNote(page: QuartzPluginData) {
  return page.slug !== "index" && page.slug?.startsWith("notes/")
}

export default (() => {
  const HumanIndex: QuartzComponent = ({
    allFiles,
    fileData,
    cfg,
    displayClass,
  }: QuartzComponentProps) => {
    const entries = allFiles.filter(isNote).sort(byDateAndAlphabetical(cfg)).slice(0, 6)
    const root = pathToRoot(fileData.slug!)

    return (
      <section class={classNames(displayClass, "human-index")}>
        <div class="human-index__hero">
          <p class="human-index__eyebrow">HUMAN</p>
          <h1 class="human-index__title">Thoughts, notes, and unfinished edges.</h1>
          <p class="human-index__lead">
            A personal blog shaped in Obsidian, published with restraint.
          </p>
        </div>

        <div class="human-index__rail">
          <a href={resolveRelative(fileData.slug!, "notes")} class="human-index__link internal">
            Notes
          </a>
          <a href={`${root}/index.xml`} class="human-index__link">
            RSS
          </a>
        </div>

        <div class="human-index__list">
          {entries.map((page) => (
            <article class="human-index__entry">
              <a href={resolveRelative(fileData.slug!, page.slug!)} class="human-index__entry-link">
                <div class="human-index__entry-meta">
                  {page.dates && <Date date={getDate(cfg, page)!} locale={cfg.locale} />}
                </div>
                <h2>{page.frontmatter?.title}</h2>
                {page.frontmatter?.description && <p>{page.frontmatter.description}</p>}
              </a>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return HumanIndex
}) satisfies QuartzComponentConstructor
