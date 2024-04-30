interface Thing {
  name: string
  desc: string
  descDev?: string[]
  year: number
  repo: string
  site: string
  image: string
  tools: Icon[]
  appearance: Appearance
}

interface Appearance {
  fontFamily: string
  textColour: string
  borderColour: string
}
