"use client"

import Menu from "./components/menu"

export default function NotFound() {
    return(
        <div>
            <Menu />
            <div className="">
                <div className="font-mono font-black text-2xl leading-relaxed uppercase flex flex-col justify-center items-center text-center mt-64">
                    <h1>Página não encontrada</h1>
                    <p>Parece que você está tentando acessar uma página que não existe...</p>
                    <p>Tente acessar uma página existente pelo menu de navegação acima</p>
                </div>
            </div>
        </div>
    )
}