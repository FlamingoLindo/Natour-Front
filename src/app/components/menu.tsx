import React from "react";

const Menu = () => {
    return (
        <div className="flex bg-green-500 font-bold font-sans text-black space-x-4 p-4">
            <div>Dashboard</div>
            <div>Usuários</div>
            <div>Termos</div>
            <div>Configurações</div>
            <div>Doações</div>
            <div className="absolute right-4">Sair</div>
        </div>
    );
};

export default Menu;
