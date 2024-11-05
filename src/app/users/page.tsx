"use client";

import { useEffect, useState } from 'react';
import Menu from '../components/menu';
import { useRouter } from 'next/navigation';
import { getUsers } from '@/api/users/users'; 
import { ToastContainer } from 'react-toastify';
import { User } from '@/interfaces/userInterface';

import Image from 'next/image';
import defaultAvatar from '@/Images/TreebeardatIsengard.webp';

export default function UserList() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      if (data) {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  const handleNavigation = (userId: number) => {
    router.push(`/users/${userId}`);
  };
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Menu />
      <div className="flex justify-end pt-6 pr-6">
        <input
          type="text"
          placeholder="Nome do usuário..."
          className="p-3 border border-gray-400 rounded-md shadow focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div className="flex-grow flex justify-center py-6">
        <div className="w-full max-w-7xl mx-auto">
          <table className="min-w-full bg-white shadow-xl rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">Nome</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">E-mail</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black">Status</th>
                <th className="border-b-2 border-gray-400 px-6 py-4 text-left text-base font-bold text-black"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-all duration-200 ease-in-out">
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                    <div className="flex items-center">
                      <Image
                        src={user.photo?.url ? (user.photo.url.startsWith('http') ? user.photo.url : `http://localhost:1337${user.photo.url}`) : defaultAvatar}
                        alt={`Foto de ${user.username}`}
                        className="h-[50px] w--[50px] rounded-full mr-4 object-cover"
                        width={50} 
                        height={50} 
                      />
                      <span className="font-medium">{user.username}</span>
                    </div>
                  </td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{user.email}</td>
                  <td className="border-b-2 border-gray-300 px-0 py-4">
                    <div
                      className={`rounded-full text-center text-white font-semibold py-1 px-[10px] shadow-md ${user.blocked ? 'bg-red-500' : 'bg-green-500'}`}
                    >
                      {user.blocked ? 'Bloqueado' : 'Ativo'}
                    </div>
                  </td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-right">
                    <div
                      className="flex justify-end cursor-pointer"
                      onClick={() => handleNavigation(user.id)}
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
