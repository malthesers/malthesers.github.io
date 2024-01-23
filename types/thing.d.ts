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

interface Tool {
  name: ToolName
  icon: string
}

type ToolName = 'vue' | 'react' | 'tw' | 'scss' | 'html' | 'css' | 'js' | 'ts'
