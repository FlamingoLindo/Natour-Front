"use client";
import { useEffect, useState } from 'react';
import Menu from '../components/menu';

import { getTerms, updateTerms } from '@/api/terms/terms';
import { ToastContainer } from 'react-toastify';

export default function Terms() {

    const [terms, setTerms] = useState({platafromTerm: '', privacyPolitics: ''})

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getTerms();
                if (data?.data) {
                    const activeTerms = data.data.attributes;
                    setTerms({
                        platafromTerm: activeTerms.platafromTerm,  
                        privacyPolitics: activeTerms.privacyPolitics,
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
        const { platafromTerm, privacyPolitics } = terms;
        await updateTerms(platafromTerm, privacyPolitics); 
    };

    return (
        <div>
            <Menu />

            <div className='flex justify-center items-center mt-7 gap-x-16'>
                <div className='flex flex-col items-start font-sans' >
                    <label className='font-bold text-decoration-line: underline decoration-2 py-2'>Termos da Plataforma</label>
                    <textarea
                        id='platafromTerm' 
                        className='border-2 border-black border-opacity-15 min-w-[45rem] min-h-[35rem] shadow-2xl focus:outline-none p-4 rounded-xl'
                        value={terms.platafromTerm}
                        onChange={handleInputChange} 
                    />
                </div>

                <div className='flex flex-col items-start font-sans'>
                    <label className='font-bold text-decoration-line: underline decoration-2 py-2'>Política de privacidade</label>
                    <textarea
                        id='privacyPolitics'
                        className='border-2 border-black border-opacity-15 min-w-[45rem] min-h-[35rem] shadow-2xl focus:outline-none p-4 rounded-xl'
                        value={terms.privacyPolitics}
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
