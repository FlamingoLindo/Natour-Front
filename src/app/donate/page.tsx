"use client";
import { useEffect, useState } from 'react';
import Menu from '../components/menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DonateModal from '../components/donateModal';

export default function Donates() {
    const [donationData, setDonationData] = useState({ name: '', link: '', id: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const prodLink = 'http://localhost:1337/api/donates';
    const apiLink = 'http://localhost:1337/api/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(prodLink, { method: 'GET' });
                if (response.ok) {
                    const data = await response.json();
                    const activeDonation = data.data[0]; 
                    if (activeDonation) {
                        setDonationData({
                            name: activeDonation.attributes.name || '',
                            link: activeDonation.attributes.link || '',
                            id: activeDonation.id || '',
                        });
                    }
                } else {
                    toast.error('Falha ao buscar dados de doação');
                }
            } catch (error) {
                console.error('Erro ao buscar dados de doação:', error);
                toast.error('Ocorreu um erro ao buscar dados');
            }
        };

        fetchData();
    }, []);

    const checkDonation = async () => {
        try {
            const response = await fetch(apiLink + 'donates');
            if (response.ok) {
                const data = await response.json();
                const activeDonation = data.data[0];
                return !!activeDonation; // Return true if a donation exists
            }
        } catch (error) {
            console.error('Erro ao buscar dados de doação:', error);
            toast.error('Ocorreu um erro ao buscar dados');
        }
        return false; // Return false if there's an error
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(apiLink + `donates/${donationData.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                toast.success('Campanha removida com sucesso!');
                setDonationData({ name: '', link: '', id: '' });
            } else {
                toast.error('Falha ao remover campanha.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleModalSubmit = async (name: string, link: string) => {
        const response = await fetch(apiLink + 'donates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, link }),
        });
    
        if (response.ok) {
            const newDonation = await response.json(); // Get the response
            console.log('New donation response:', newDonation); // Log for debugging
    
            // Check if the new donation has data
            if (newDonation && newDonation.data) {
                const donation = newDonation.data; // Access the data object
                setDonationData({
                    name: donation.name || '', // Access name directly
                    link: donation.link || '', // Access link directly
                    id: donation.id || '', // Access id directly
                });
                toast.success('Campanha cadastrada com sucesso!');
                setIsModalOpen(false); // Close the modal after successful submission
            } else {
                toast.error('Falha ao cadastrar campanha: resposta inesperada.');
            }
        } else {
            toast.error('Falha ao cadastrar campanha.');
        }
    };

    const openModal = async () => {
        const donationExists = await checkDonation();
        if (donationExists) {
            toast.error('Já existe uma campanha cadastrada!');
        } else {
            setIsModalOpen(true);
        }
    };

    const handleReset = () => {
        setDonationData({ name: '', link: '', id: '' }); 
    };

    return (
        <div>
            <Menu />
            <h1 className='flex justify-center font-bold font-sans text-2xl'>
                Campanha atual
            </h1>

            <div className='flex justify-end mt-5'>
                <button onClick={openModal} className="inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-xs font-bold ring-1 ring-inset ring-gray-500/10">
                    CADASTRAR
                </button>
            </div>

            <div className='flex flex-col items-center mt-5'>
                <label className="text-lg text-black font-bold font-mono">Nome</label>
                <input
                    value={donationData.name}
                    placeholder='Não há nenhuma campanha ativa'
                    disabled
                    className="border-2 border-black w-[16rem] mt-2"
                />

                <label className="text-lg text-black font-bold font-mono mt-4">Link</label>
                <input
                    value={donationData.link}
                    placeholder='Não há nenhuma campanha ativa'
                    disabled
                    className="border-2 border-black w-[16rem] mt-2"
                />
            </div>

            <div className='flex flex-col items-center mt-10 font-bold'>
                <button onClick={handleDelete} className="flex items-center space-x-2">
                    <span>Remover campanha</span>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <DonateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
                onReset={handleReset} // Pass the reset function to the modal
            />
            <ToastContainer />
        </div>
    );
}
