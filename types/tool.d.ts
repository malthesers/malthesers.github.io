interface Tool {
  name: ToolName
  icon: string
}

type ToolName = 'vue' | 'react' | 'tw' | 'scss' | 'html' | 'css' | 'js' | 'ts'
