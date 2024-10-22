"use client";
import { useState } from 'react';
import Menu from '../../components/menu';

import { useRouter } from 'next/navigation';


export default function UserId() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const user = {
    name: "Hans Eli Sebastian Fors",
    email: "forsen@gmail.com",
    qntPoints: 12
  };

  const points = [
    {
      id: 1,
      name: 'Parque Iberapuera',
      url: 'parque.com',
      hourStart: '09:00',
      hourEnd: '18:00',
      rating: 5,
      status: 'Ativo',
      statusColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Praia de Copacabana',
      url: 'copacabana.com',
      hourStart: '06:00',
      hourEnd: '20:00',
      rating: 4,
      status: 'Desativado',
      statusColor: 'bg-red-500'
    },
    {
      id: 3,
      name: 'Cristo Redentor',
      url: 'cristoredentor.com',
      hourStart: '08:00',
      hourEnd: '17:00',
      rating: 5,
      status: 'Ativo',
      statusColor: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Museu do Amanhã',
      url: 'museuamanha.com',
      hourStart: '10:00',
      hourEnd: '18:00',
      rating: 4,
      status: 'Desativado',
      statusColor: 'bg-red-500'
    },
    {
      id: 5,
      name: 'Pão de Açúcar',
      url: 'paodeacucar.com',
      hourStart: '07:00',
      hourEnd: '19:00',
      rating: 5,
      status: 'Ativo',
      statusColor: 'bg-green-500'
    },
    {
      id: 6,
      name: 'Jardim Botânico',
      url: 'jardimbotanico.com',
      hourStart: '08:00',
      hourEnd: '17:00',
      rating: 4,
      status: 'Desativado',
      statusColor: 'bg-red-500'
    },
    {
      id: 7,
      name: 'Lagoa Rodrigo de Freitas',
      url: 'lagoarodrigo.com',
      hourStart: '05:00',
      hourEnd: '22:00',
      rating: 5,
      status: 'Ativo',
      statusColor: 'bg-green-500'
    },
    {
      id: 8,
      name: 'Praia do Arpoador',
      url: 'arpoador.com',
      hourStart: '06:00',
      hourEnd: '20:00',
      rating: 4,
      status: 'Desativado',
      statusColor: 'bg-red-500'
    },
    {
      id: 9,
      name: 'Escadaria Selarón',
      url: 'escadariaselaron.com',
      hourStart: '09:00',
      hourEnd: '19:00',
      rating: 4,
      status: 'Ativo',
      statusColor: 'bg-green-500'
    },
    {
      id: 10,
      name: 'Maracanã',
      url: 'maracana.com',
      hourStart: '09:00',
      hourEnd: '17:00',
      rating: 5,
      status: 'Desativado',
      statusColor: 'bg-red-500'
    }
];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      <Menu />

      <div className="absolute mt-32 right-[20px]">
        <div
          onClick={handleToggle}
          className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
            isToggled ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isToggled ? "translate-x-8" : ""
            }`}
          ></div>
        </div>
      </div>

      <div className="flex mt-20 ml-8">
        <div className="w-52 h-52 border-[3.5px] border-gray-300 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src="https://cdn.mos.cms.futurecdn.net/58b85585972e0f04b20e1f31ac5e6c75.jpg"
            className="object-cover w-full h-full"
            alt="User"
          />
        </div>

        <div className="ml-10">
          <div className="text-xl font-bold">
            {user.name}
          </div>

          <div className="mt-2 text-gray-600">
            {user.email}
          </div>  

          <div className="mt-2 text-gray-600">
            <div className='flex items-center'>
              <div className='font-bold text-black'>{user.qntPoints}</div>
              <span className='ml-1'>pontos cadastrados</span>
            </div>
          </div>

          <div className="mt-4 flex-grow">
            <table className="w-[80rem]  bg-white shadow-xl rounded-lg overflow-hidden">
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
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.url}</td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.hourStart} / {point.hourEnd}</td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{point.rating}</td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                      <div className={`${point.statusColor} rounded-full text-center text-white font-semibold py-1 px-4 shadow-md`}>
                        {point.status}
                      </div>
                    </td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                    <div
                      className="cursor-pointer"
                      onClick={() => handleNavigation(`points/${point.id}`)}
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
      </div>     
    </div>
  );
}
