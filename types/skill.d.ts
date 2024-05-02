interface Skill {
  name: SkillName
  devIcon: string
  colorlessIcon: string
  bgColor: string
  textColor: string
}

type SkillName = 'Vue' | 'React' | 'Tailwind CSS' | 'SASS' | 'HTML' | 'CSS' | 'JavaScript' | 'TypeScript'
