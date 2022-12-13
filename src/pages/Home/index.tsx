import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import {
  CountDownContainer,
  FomrContainer,
  HomeContainer,
  Separator,
  StartCountDownButton,
  TaskInput,
  MinutesAmountInput,
} from "./styles";

export function Home() {
  const { register, handleSubmit } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FomrContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="De um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount")}
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
  );
}
