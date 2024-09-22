"use client";
import Menu from '../components/menu';

export default function UserList() {
  const users = [
    {
      name: "Vitor",
      email: "vitinho@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163192125060546590/ezgif.com-gif-maker.gif?ex=66e73115&is=66e5df95&hm=9b974eb0fcdb21e9592146d942357b20b1c82e47d0449e0fa629dd17e4b02d96&=&width=264&height=176",
    },
    {
      name: "Emiru",
      email: "emirumybeloved@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163196836400615484/ezgif.com-gif-maker_13.gif?ex=66e7de38&is=66e68cb8&hm=7f6f0e5e62c16fa72de830776adaab44c6da23f06788c9ad5bd0ecb7428c8b7f&=&width=176&height=176",
    },
    {
      name: "Forsen",
      email: "forsen@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163196985742999634/sdasdacsdfcda.webp?ex=66e7de5c&is=66e68cdc&hm=4fb16f8e1a8f71c96fd66fc3624e9c118161e068ffe15dd5c07aa7a861dd4ad9&=&format=webp&width=176&height=176",
    },
    {
      name: "Emoney",
      email: "loser@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163196986862878750/4x_12.webp?ex=66e7de5c&is=66e68cdc&hm=e2c83d55dd0661fe063b74ce2684fa9a3dcfcfb79e100633a3bc9209d45a7097&=&format=webp&width=291&height=176",
    },
    {
      name: "Forsen",
      email: "forsen@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163196985742999634/sdasdacsdfcda.webp?ex=66e7de5c&is=66e68cdc&hm=4fb16f8e1a8f71c96fd66fc3624e9c118161e068ffe15dd5c07aa7a861dd4ad9&=&format=webp&width=176&height=176",
    },
    {
      name: "Emoney",
      email: "loser@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163196986862878750/4x_12.webp?ex=66e7de5c&is=66e68cdc&hm=e2c83d55dd0661fe063b74ce2684fa9a3dcfcfb79e100633a3bc9209d45a7097&=&format=webp&width=291&height=176",
    },
    {
      name: "Doc",
      email: "imgripping@gmail.com",
      status: "Ativo",
      statusColor: "bg-green-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163196995612192930/4x3.webp?ex=66e7de5e&is=66e68cde&hm=7522dbf76ba877ff7c55fe8830f4000e23604a7976413ce2114e014e57bcf59b&=&format=webp&width=176&height=176",
    },
    {
      name: "Buh",
      email: "buh@gmail.com",
      status: "Desativado",
      statusColor: "bg-red-500",
      image: "https://media.discordapp.net/attachments/827008047054192720/1163196793123766292/ezgif.com-gif-maker_4.gif?ex=66e7de2e&is=66e68cae&hm=f573244cfef806a8496c901f325c74c867f0b4a2472675e5c121aa527cd8af97&=&width=247&height=176",
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <div className="p-4 flex justify-between items-center">
        <input type='text' placeholder='Nome do usuário...' className="p-2 border border-slate-400 rounded-md"></input> 
      </div>

      <div className="flex-grow flex justify-center py-8">
        <div className="w-full">
          <table className="min-w-full bg-white shadow-2xl ml-32">
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
