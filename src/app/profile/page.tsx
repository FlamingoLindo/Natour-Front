'use client'
import Menu from '../components/menu';
import profileIcon from '../assets/profile.svg'
import letter from '../assets/letter.svg'

export default function Profile(){
    return (
        <div>
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
                    <button className='border-2 border-black rounded-md w-56 p-2'>Redefinir senha</button>
                </div>
            </div>

        </div>
    )
}