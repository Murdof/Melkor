import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"
import MelkorNavConstructor from "../MelkorNav"

const Header = HeaderConstructor()
const MelkorNav = MelkorNavConstructor()

/**
 * Layout principal do Melkor.
 * Home: Hero -> Menu -> Conteúdo
 * Internas: Menu -> Título -> Conteúdo
 */
export const FullWidthFrame: PageFrame = {
  name: "full-width",

  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    footer,
  }: PageFrameProps) {
    const isHome = componentData.fileData.slug === "index"

    return (
      <>
        <div class="center full-width">

          {isHome && (
            <section class="melkor-home-hero">
              <div class="melkor-home-hero-content">
                <h1>MELKOR</h1>
                <p>Entre Mundos e Eras</p>
              </div>
            </section>
          )}

<div class="page-header">

  <div class="melkor-topbar">
    <MelkorNav {...componentData} />

    <Header {...componentData}>
      {header.map((HeaderComponent) => (
        <HeaderComponent {...componentData} />
      ))}
    </Header>
  </div>

  <div class="popover-hint">
    {beforeBody.map((BodyComponent) => (
      <BodyComponent {...componentData} />
    ))}
  </div>

</div>

          <Content {...componentData} />

          <hr />

          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>

        {footer.map((FooterComponent) => (
          <FooterComponent {...componentData} />
        ))}
      </>
    )
  },
}