interface Thing {
  name: string
  repo: string
  site: string
  desc: string
  image: string
  tools: Icon[]
  appearance: Appearance
}

interface Appearance {
  fontFamily: string
  textColour: string
  borderColour: string
}
