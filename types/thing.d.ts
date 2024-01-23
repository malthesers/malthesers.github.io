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

type Icon = 'vue' | 'react' | 'tw' | 'scss' | 'html' | 'css' | 'js' | 'ts'
