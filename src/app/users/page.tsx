"use client";
import Menu from '../components/menu';

export default function UserList() {
  const users = [
    {
      name: "Vitor",
      email: "vitinho@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Lightmatter_flamingo2.jpg",
    },
    {
      name: "Emiru",
      email: "emirumybeloved@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKBd8VentSn5IxLRk_LmrIofFVHduzUOmow&s",
    },
    {
      name: "Forsen",
      email: "forsen@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://cdn.mos.cms.futurecdn.net/58b85585972e0f04b20e1f31ac5e6c75.jpg",
    },
    {
      name: "Emoney",
      email: "loser@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi6G2kL2MDMgdGYVQskGmbb7tCMZ-SY4aaA&s",
    },
    {
      name: "Doc",
      email: "imgripping@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlWrMKdKiy1Rtx6Tq4tczwzjg4gFLsYhPEQ&s",
    },
    {
      name: "Buh",
      email: "buh@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://media.tenor.com/Hx5yUAxxYvwAAAAM/buh-b-u-h.gif",
    },
    {
      name: "Wixat",
      email: "wixat@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://static-cdn.jtvnw.net/jtv_user_pictures/255d9e23-8ba3-44d6-9b90-41da9efe762c-profile_image-70x70.png",
    },
    {
      name: "REZsix",
      email: "rezsix@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://static-cdn.jtvnw.net/jtv_user_pictures/8a683bda-a6b4-4ddb-ba0c-d212f197bf69-profile_image-70x70.jpeg",
    },
    {
      name: "maaawds",
      email: "maaawds@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://static-cdn.jtvnw.net/jtv_user_pictures/408e7076-5956-409b-9a01-747b6979aa9c-profile_image-70x70.png",
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <div className="flex justify-end pt-4 pr-2">
        <input type='text' placeholder='Nome do usuário...' className="p-2 border border-slate-400 rounded-md"></input> 
      </div>

      <div className="flex-grow flex justify-center py-8">
        <div className="w-full max-w-7xl mx-auto">
          <table className="min-w-full bg-white shadow-2xl">
            <thead>
              <tr>
                <th className="border-b-2 border-slate-600 px-4 py-2 text-left text-sm font-bold text-slate-900 pb-6">Nome</th>
                <th className="border-b-2 border-slate-600 px-4 py-2 text-left text-sm font-bold text-slate-900 pb-6">E-mail</th>
                <th className="border-b-2 border-slate-600 px-4 py-2 text-left text-sm font-bold text-slate-900 pb-6">Status</th>
                <th className="border-b-2 border-slate-600 px-4 py-2 text-left text-sm font-bold text-slate-900 pb-6"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border-b-2 border-slate-700 px-4 py-2 text-black">
                    <div className="flex items-center">
                      <img
                        src={user.image}
                        alt="Foto"
                        className="h-12 w-12 rounded-full mr-2"
                      />
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td className="border-b-2 border-slate-700 px-4 py-2 text-black">{user.email}</td>
                  <td className="border-b-2 border-slate-700 px-4 py-2 text-black">
                    <div className={`${user.statusColor} rounded-full text-center shadow-md w-28 h-6`}>{user.status}</div>
                  </td>
                  <td className="border-b-2 border-slate-700 px-4 py-2 text-black">
                    <div className="flex justify-end">
                      <img
                        src="https://www.svgrepo.com/show/514119/eye.svg"
                        alt="Olho"
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
