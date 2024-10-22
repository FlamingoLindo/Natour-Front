"use client";
import Menu from '../components/menu';

import { useRouter } from 'next/navigation';

export default function UserList() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const users = [
    {
      id: 1,
      name: "Vitor",
      email: "vitinho@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Lightmatter_flamingo2.jpg",
    },
    {
      id: 2,
      name: "Emiru",
      email: "emirumybeloved@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKBd8VentSn5IxLRk_LmrIofFVHduzUOmow&s",
    },
    {
      id: 3,
      name: "Forsen",
      email: "forsen@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://cdn.mos.cms.futurecdn.net/58b85585972e0f04b20e1f31ac5e6c75.jpg",
    },
    {
      id: 4,
      name: "Emoney",
      email: "loser@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi6G2kL2MDMgdGYVQskGmbb7tCMZ-SY4aaA&s",
    },
    {
      id: 5,
      name: "Doc",
      email: "imgripping@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlWrMKdKiy1Rtx6Tq4tczwzjg4gFLsYhPEQ&s",
    },
    {
      id: 6,
      name: "Buh",
      email: "buh@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://media.tenor.com/Hx5yUAxxYvwAAAAM/buh-b-u-h.gif",
    },
    {
      id: 7,
      name: "Wixat",
      email: "wixat@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://static-cdn.jtvnw.net/jtv_user_pictures/255d9e23-8ba3-44d6-9b90-41da9efe762c-profile_image-70x70.png",
    },
    {
      id: 8,
      name: "REZsix",
      email: "rezsix@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://static-cdn.jtvnw.net/jtv_user_pictures/8a683bda-a6b4-4ddb-ba0c-d212f197bf69-profile_image-70x70.jpeg",
    },
    {
      id: 9,
      name: "maaawds",
      email: "maaawds@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://static-cdn.jtvnw.net/jtv_user_pictures/408e7076-5956-409b-9a01-747b6979aa9c-profile_image-70x70.png",
    },
    
  ];

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
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition-all duration-200 ease-in-out"
                >
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">
                    <div className="flex items-center">
                      <img
                        src={user.image}
                        alt="Foto"
                        className="h-12 w-12 rounded-full mr-4 object-fill"
                      />
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-black">{user.email}</td>
                  <td className="border-b-2 border-gray-300 px-6 py-4">
                    <div
                      className={`${user.statusColor} rounded-full text-center text-white font-semibold py-1 px-4 shadow-md`}
                    >
                      {user.status}
                    </div>
                  </td>
                  <td className="border-b-2 border-gray-300 px-6 py-4 text-right">
                    <div
                      className="flex justify-end cursor-pointer"
                      onClick={() => handleNavigation(`users/${user.id}`)}
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
  );
}