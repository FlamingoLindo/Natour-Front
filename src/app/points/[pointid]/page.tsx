'use client';

import { useEffect, useState } from 'react';
import Menu from '../../components/menu';
import { useRouter, usePathname } from 'next/navigation';
import { getPointById } from '@/api/points/points';
import { ToastContainer } from 'react-toastify';
import { PointIdResponseInterface } from '@/interfaces/pointsInterface';
import Image from 'next/image';
import MapIcon from '../../assets/map_icon.svg';

export default function PointId() {
    const router = useRouter();
    const pathname = usePathname();
    const pointId = pathname.split('/').pop(); // Extract the pointId from the URL
    const [point, setPoint] = useState<PointIdResponseInterface | null>(null);

    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleNavigation = (userId?: number) => {
        router.push(`/users/${userId}`);
    };

    useEffect(() => {
        if (pointId) {
            const fetchPoint = async () => {
                const data = await getPointById(parseInt(pointId, 10));
                if (data) {
                    setPoint(data);
                }
            };
            fetchPoint();
        }
    }, [pointId]);

    if (!point) {
        return <div>Carregando ponto...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 relative">
            <Menu />
            <div className="absolute mt-32 right-[20px]">
                <div
                    onClick={handleToggle}
                    className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                        isToggled ? 'bg-green-500' : 'bg-red-500'
                    }`}
                >
                    <div
                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                            isToggled ? 'translate-x-8' : ''
                        }`}
                    ></div>
                </div>
            </div>

            <div className="ml-10">
                <div className="text-xl font-bold underline cursor-pointer" 
                  onClick={() => handleNavigation(point.user?.Userid)}
                  title='Ir para página do usuário'
                  >
                    {point.user?.username || 'Usuário Desconhecido'}
                </div>
                <div className="mt-2 text-gray-600">{point.user?.email || 'Email não disponível'}</div>
                <div className="mt-2 text-gray-600">
                    <div className="flex items-center">
                        <div className="font-bold text-black">1</div>
                        <span className="ml-1">pontos cadastrados</span>
                    </div>
                </div>
            </div>

            <a
                href={`https://www.google.com/maps?q=${point.latitude},${point.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute mt-16 right-[20px] w-12 h-12 cursor-pointer"
                title="Achar ponto no Google Maps"
            >
                <img src={MapIcon.src} alt="Map Icon" />
            </a>

            <div className="mt-4 flex justify-center">
                <table className="w-[80rem] bg-white shadow-xl rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">
                                Nome
                            </th>
                            <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">
                                URL
                            </th>
                            <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">
                                Horário de funcionamento
                            </th>
                            <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">
                                Endereço
                            </th>
                            <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">
                                Avaliação
                            </th>
                            <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">
                                Status
                            </th>
                            <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.name}</td>
                            <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                                <a href={point.websiteURL} target="_blank" rel="noopener noreferrer">
                                    {point.websiteURL}
                                </a>
                            </td>
                            <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                                {point.businessHourStart} / {point.businessHourEnd}
                            </td>
                            <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.address}</td>
                            <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.rating}</td>
                            <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                                <div
                                    className={`rounded-full text-center text-white font-semibold py-1 px-[10px] shadow-md ${
                                        point.active ? 'bg-green-500' : 'bg-red-500'
                                    }`}
                                >
                                    {point.active ? 'Ativo' : 'Desativado'}
                                </div>
                            </td>
                            <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                                <div
                                    className="cursor-pointer"
                                    onClick={() => handleNavigation(point.id)}
                                >
                                    <img
                                        src="https://www.svgrepo.com/show/514119/eye.svg"
                                        alt="Ver detalhes"
                                        className="h-7 w-7"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
