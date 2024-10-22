'use client'
import Menu from '../components/menu';
import profileIcon from '../assets/profile.svg'
import letter from '../assets/letter.svg';
// Remover a importação de ChangePasswordModal se não for utilizado
// import ChangePasswordModal from '../components/changePasswordModal';
//import { useState } from 'react';

// Remover useState se não for utilizado
// const [changePasswordData, setChangePasswordData] = useState({password: '', newPassword: '', confPassword: ''});
// const [isModalOpen, setIsModalOpen] = useState(false);

export default function Profile(){

    return (
        <div className= 'bg-neutral-100 min-h-screen'>
            <Menu />
            
            <div className='flex flex-col items-center mt-20 font-semibold'>
                <div className='bg-sky-100 mb-[30px] rounded-md w-56 p-2 flex items-center'>
                    <img src={profileIcon.src} className='w-10 h-10 mr-3'></img>
                    <div>
                        <label className='text-stone-700'>Nome</label>
                        <br />
                        <text>Natour</text>
                    </div>
                </div>

                <div className='bg-sky-100 mb-[30px] rounded-md w-56 p-2 flex items-center'>
                    <img src={letter.src} className='w-10 h-10 mr-3'></img>
                    <div>
                        <label className='text-stone-700'>E-mail</label>
                        <br />
                        <text>natour@master.com</text>
                    </div>
                </div>

                <div>
                    <button className='border-2 border-black bg-white rounded-md w-56 p-2'>Redefinir senha</button>
                </div>
            </div>

        </div>
    )
}
