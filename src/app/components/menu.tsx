import React from "react";

const Menu = () => {
    return (
        <table className=' min-h-96 absolute inset-y-1/4 left-0'>
            <tbody className="bg-green-500 border-4 border-black w-28 rounded-r-lg font-bold rounded-full">
                <tr><td>Dashboard</td></tr>
                <tr><td>Usuários</td></tr>
                <tr><td>Termos</td></tr>
                <tr><td>Configurações</td></tr>
                <tr><td>Doações</td></tr>
                <tr><td>Sair</td></tr>
            </tbody>
        </table>
    );
};

export default Menu;
