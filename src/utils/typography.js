import Typography from 'typography'
import theme from 'typography-theme-bootstrap'

theme.baseFontSize = '18px'
theme.baseLineHeight = 1.75
theme.headerWeight = '700'
theme.headerFontFamily = ['Montserrat', 'sans-serif']
theme.bodyFontFamily = ['IBM Plex Sans', 'sans-serif']
theme.overrideThemeStyles = ({ scale }) => ({
  a: {
    color: `rgba(0,0,0,0.77)`,
  },
  h1: {
    ...scale(0.75),
  }
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
