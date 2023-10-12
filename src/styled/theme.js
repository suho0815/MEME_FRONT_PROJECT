// context 기반의 ThemeProvider의 theme 정보

const windowSize = {
  moblie: 'screen and (max-width: "576px")',
  tablet: 'screen and (max-width: "768px")',
  pc: 'screen and (max-width: "1200px")'
}

const fontSize = {
  xs: '0.5rem',
  sm: '0.75rem',
  base: '1rem',
  md: '1.25rem',
  lg: '1.5rem'
}

const lightversion = {
  background: '#fff',
  fontPrimary: 'black',
  fontSecondary: 'gray',
  primary: '#00a0ff',
  secondary: '#ddd',
  hover: '#00a0ff50'
}

const repo = {
  open: 'red',
  close: 'blue'
}

const theme = {
  windowSize,
  repo,
  fontSize,
  lightversion
}

export default theme
