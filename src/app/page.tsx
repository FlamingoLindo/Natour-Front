'use client'
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const prodLink = 'http://localhost:1337/api/auth/local'; // Defina o link da API
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Para mostrar o status de carregamento

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(prodLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      if (response.ok) {
        handleNavigation('/dashboard');
      } else {
        toast.error('Email ou senha inválidos!');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      toast.error('Erro ao se comunicar com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-amber-100 min-h-screen flex justify-center text-center bg-cover bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDQ3LWtxOTJ3eDl5LmpwZw.jpg')]">
      <div className="content-center">
        <form onSubmit={handleSubmit} className="border-4 border-white border-opacity-30 bg-green-900 shadow-md rounded-3xl px-36 pt-20 pb-20">
          <h1 className="mb-10 font-bold text-6xl text-white font-mono">Natour Master</h1>

          <label className="flex text-lg text-white font-bold font-mono">E-mail</label>
          <input
            placeholder="email@master.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-mono mb-10 shadow appearance-none border-2 border-white border-opacity-30 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:ring-4 ring-teal-700"
          ></input>

          <label className="flex text-lg text-white font-bold font-mono">Senha</label>
          <input
            placeholder="*********************"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-mono mb-10 shadow appearance-none border-2 border-white border-opacity-30 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:ring-4 ring-teal-700"
          ></input>

          <label className="font-mono flex mb-10 underline text-white font-bold">
            <input type="checkbox" className="mr-2"></input>
            Lembrar-me
          </label>

          <input
            type="submit"
            value={loading ? 'Carregando...' : 'Entrar'}
            className="font-mono font-bold text-white border-4 border-opacity-30 py-2 px-16 bg-gradient-to-r from-green-600 hover:bg-green-800 rounded-lg"
            disabled={loading}
          ></input>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
