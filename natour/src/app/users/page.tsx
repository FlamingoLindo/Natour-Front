"use client";
import { useRouter } from 'next/navigation';

export default function UserList() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/dashboard');
  };

  return (
    <div className="bg-amber-100 min-h-screen flex flex-col">
      <div className="p-4">
        <button
          onClick={handleBackClick}
          className="flex items-center text-left text-sm underline font-bold"
        >
          <img
            src="https://www.svgrepo.com/show/535151/arrow-left-to-line.svg"
            alt="Voltar"
            className="h-5 w-5 mr-2"
          />
          Voltar
        </button>
      </div>
        
        <div className="flex-grow flex justify-center  py-8">
        <div className="w-full max-w-4xl">
          <table className="min-w-full border-collapse bg-white shadow-md overflow-hidden">
            <thead>
              <tr className="bg-amber-300">
                <th className="border border-slate-600 px-4 py-2 text-left text-sm font-medium text-slate-900">
                  Foto
                </th>
                <th className="border border-slate-600 px-4 py-2 text-left text-sm font-medium text-slate-900">
                  Nome
                </th>
                <th className="border border-slate-600 px-4 py-2 text-left text-sm font-medium text-slate-900">
                  E-mail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-100">
                <td className="border border-slate-700 px-4 py-2 text-slate-700">
                  <img
                    src="https://media.discordapp.net/attachments/827008047054192720/1163192125060546590/ezgif.com-gif-maker.gif?ex=66e73115&is=66e5df95&hm=9b974eb0fcdb21e9592146d942357b20b1c82e47d0449e0fa629dd17e4b02d96&=&width=264&height=176"
                    alt="Foto"
                    className="h-12 w-12 object-cover mx-auto"
                  />
                </td>
                <td className="border border-slate-700 px-4 py-2 text-slate-700">Vitor</td>
                <td className="border border-slate-700 px-4 py-2 text-slate-700">
                  vitorantunes2003@gmail.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }
  