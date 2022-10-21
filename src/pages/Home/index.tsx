import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FomrContainer,
  HomeContainer,
  Separator,
  StartCountDownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FomrContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput placeholder="De um nome para o seu projeto" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />

          <span>minutos</span>
        </FomrContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
