import { useEffect, useState } from "react";
import { tempoSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import { Relogio } from "./Relogio";
import style from './cronometro.module.scss'

interface Props{
    selecionado: ITarefa | undefined,
    tarefaFinalizada: () => void
}

export function Cronometro({selecionado, tarefaFinalizada}: Props) {
    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoSegundos(selecionado.tempo))
        }
    },[selecionado])

    function regressiva(contador : number= 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1 )
            }
            tarefaFinalizada()
        }, 1000 )

    }
       
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick= {() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}