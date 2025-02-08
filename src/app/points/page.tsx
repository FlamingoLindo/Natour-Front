"use client";

import { useEffect, useState } from 'react';
import Menu from '../components/menu';
import { useRouter } from 'next/navigation';
import { getPoints } from '@/api/points/points'; 
import { ToastContainer } from 'react-toastify';
import { Point } from '@/interfaces/pointsInterface';

export default function PointList() {
  const router = useRouter();
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const fetchPoints = async () => {
      const data = await getPoints();
      if (data) {
        setPoints(data);
      }
    };

    fetchPoints();
  }, []);

  const handleNavigation = (pointId: number) => {
    router.push(`/points/${pointId}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-200 via-teal-100 to-blue-200 bg-cover bg-center relative">
      <Menu />
      <div className="flex justify-end pt-6 pr-6">
        <input
          type="text"
          placeholder="Nome do ponto..."
          className="p-3 border border-gray-400 rounded-md shadow focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div className="flex-grow flex justify-center py-6">
        <div className="w-full max-w-7xl mx-auto">
          <table className="min-w-full bg-white shadow-xl rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">Nome</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">URL</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">Horário de funcionamento</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">Avaliação</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">Status</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black"></th>
              </tr>
            </thead>
            <tbody>
              {points.map((point, index) => (
                <tr 
                key={index}
                className="hover:bg-gray-100 transition-all duration-200 ease-in-out"
                >
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.name}</td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black"><a href={point.websiteURL} target="_blank">{point.websiteURL}</a></td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.businessHourStart} / {point.businessHourEnd}</td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.rating}</td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                  <div
                    className={`rounded-full text-center text-white font-semibold py-1 px-[10px] shadow-md ${point.active ? 'bg-green-500' : 'bg-red-500'}`}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
