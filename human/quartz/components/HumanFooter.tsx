import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const HumanFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return <footer class={displayClass ?? ""}></footer>
}

export default (() => HumanFooter) satisfies QuartzComponentConstructor
