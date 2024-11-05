"use client";
import { useEffect, useState } from 'react';
import Menu from '../../components/menu';

import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image'
import { getUserPoints } from '@/api/users/users';
import { UserPoint } from '@/interfaces/userInterface';


export default function UserId() {
  const router = useRouter()

  const { userId } = useParams();

  const [points, setPoints] = useState<UserPoint[]>([]);


  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (userId) {
      const fetchPoints = async () => {
        const data = await getUserPoints(Number(userId));
        setPoints(data);
      };
      fetchPoints();
    }
  }, [userId]);

  const user = {
    name: "Hans Eli Sebastian Fors",
    email: "forsen@gmail.com",
    qntPoints: 12
  };

  
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
        <div className="w-[200px] h-[200px] border-[3.5px] border-gray-300 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
          <Image 
            src="https://cdn.mos.cms.futurecdn.net/58b85585972e0f04b20e1f31ac5e6c75.jpg"
            className="object-cover w-full h-full"
            alt="User"
            width={200}
            height={200}
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
                {points.map((points, index) => (
                  <tr 
                  key={index}
                  className="hover:bg-gray-100 transition-all duration-200 ease-in-out"
                  >
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{points.name}</td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black"><a href={points.websiteURL} target="_blank">{points.websiteURL}</a></td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{points.businessHourStart} / {points.businessHourEnd}</td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{points.rating}</td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                    <div
                      className={`rounded-full text-center text-white font-semibold py-1 px-[10px] shadow-md ${points.active ? 'bg-red-500' : 'bg-green-500'}`}
                    >
                      {points.active ? 'Bloqueado' : 'Ativo'}
                    </div>
                    </td>
                    <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                    <div
                      className="cursor-pointer"
                      onClick={() => handleNavigation(`points/${points.id}`)}
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
