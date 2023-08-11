import React from "react";
import style from './Botao.module.scss'
import { JsxChild } from "typescript";

interface IProps {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void
}

function Botao({ onClick, type, children }: IProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}>
            {children}
        </button>
    )

}


export default Botao;