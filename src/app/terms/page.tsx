"use client";
import { useEffect, useState } from 'react';
import Menu from '../components/menu';

import { getTerms, updateTerms } from '@/api/terms/terms';
import { ToastContainer } from 'react-toastify';

export default function Terms() {

    const [terms, setTerms] = useState({platafromTerm: '', appTerm: ''})

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getTerms();
                if (data?.data) {
                    const activeTerms = data.data.attributes;
                    setTerms({
                        platafromTerm: activeTerms.platafromTerm,  
                        appTerm: activeTerms.appTerm,
                    });
                }
            } catch (error){
                console.log('error: ',  error)
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setTerms((prevTerms) => ({
            ...prevTerms,
            [id]: value, 
        }));
    };

    const handleEditClick = async () => {
        const { platafromTerm, appTerm } = terms;
        await updateTerms(platafromTerm, appTerm); 
    };

    return (
        <div className='bg-zinc-50'>
            <Menu />

            <div className='flex justify-center items-center mt-7 gap-x-16'>
                <div className='flex flex-col items-start font-sans' >
                    <label className='font-bold text-decoration-line: underline decoration-2 py-2'>Termos da Plataforma</label>
                    <textarea
                        id='platafromTerm' 
                        className='border-2 border-gray-500 min-w-[30rem] min-h-[30rem] shadow-2xl focus:outline-none'
                        value={terms.platafromTerm}
                        onChange={handleInputChange} 
                    />
                </div>

                <div className='flex flex-col items-start font-sans'>
                    <label className='font-bold text-decoration-line: underline decoration-2 py-2'>Termos do Aplicativo</label>
                    <textarea
                        id='appTerm'
                        className='border-2 border-gray-500 min-w-[30rem] min-h-[30rem] shadow-2xl focus:outline-none'
                        value={terms.appTerm}
                        onChange={handleInputChange} 
                    />
                </div>
            </div>

            <div className='flex justify-center items-center mt-9'>
                <button
                    onClick={handleEditClick} 
                    className="inline-flex items-center rounded-md bg-gray-200 px-14 py-6 text-xs font-bold ring-1 ring-inset ring-gray-500/10"
                >
                    EDITAR
                </button>
            </div>
        <ToastContainer />
        </div>
    );
}
