import { ThemeProvider } from 'styled-components'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { Globalstyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <Globalstyle />
    </ThemeProvider>
  )
}
