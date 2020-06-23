import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      links: string
    }

    backgrounds: {
      primary: string
      secondary: string
    }
  }
}
