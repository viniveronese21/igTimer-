import { Header } from '../../components/header'
import { Outlet } from 'react-router-dom'
import { LyoutContainer } from './style'

export function DefaultLayout() {
  return (
    <LyoutContainer>
      <Header />
      <Outlet />
    </LyoutContainer>
  )
}
