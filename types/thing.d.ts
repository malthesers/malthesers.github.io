interface Thing {
  name: string,
  repo: string,
  site: string,
  desc: string,
  image: string
  tools: Icon[],
  textColour: string,
  borderColour: string,
}

type Icon = 'vue' | 'react' | 'js' | 'html' | 'css' | 'scss' | 'tw'