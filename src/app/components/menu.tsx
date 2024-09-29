import React from "react";
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path); 
    };

    return (
        <header className="flex justify-between items-center bg-green-400 p-4 shadow-lg">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <div className="flex space-x-6">
                <div onClick={() => handleNavigation('/dashboard')} className="cursor-pointer font-bold uppercase text-black hover:text-white transition duration-100">Dashboard</div>
                <div onClick={() => handleNavigation('/users')} className="cursor-pointer font-bold uppercase text-black hover:text-white transition duration-100">Usuários</div>
                <div onClick={() => handleNavigation('/points')} className="cursor-pointer font-bold uppercase text-black hover:text-white transition duration-100">Pontos</div>
                <div onClick={() => handleNavigation('/terms')} className="cursor-pointer font-bold uppercase text-black hover:text-white transition duration-100">Termos</div>
                <div onClick={() => handleNavigation('/donate')} className="cursor-pointer font-bold uppercase text-black hover:text-white transition duration-100">Doações</div>
                <div onClick={() => handleNavigation('/profile')} className="cursor-pointer font-bold uppercase text-black hover:text-white transition duration-100">Perfil</div>
            </div>
            <div onClick={() => handleNavigation('/logout')} className="cursor-pointer font-bold uppercase text-black hover:text-white transition duration-100">Sair</div>
        </header>
    );
};

export default Header;
