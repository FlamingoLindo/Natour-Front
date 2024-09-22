export default function Login() {
    return (
      <div className="bg-amber-100 min-h-screen flex justify-center text-center bg-cover bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDQ3LWtxOTJ3eDl5LmpwZw.jpg')]">
        
        <div className="content-center">

            <form className="border-4 border-white border-opacity-30 bg-green-900 shadow-md rounded-3xl px-36 pt-20 pb-20">

            <h1 className="mb-10 font-bold text-6xl text-white font-mono">Natour Master</h1>

            <label className="flex text-lg text-white font-bold font-mono">E-mail</label>
            <input placeholder="email@master.com" type="email" className="font-mono mb-10 shadow appearance-none border-2 border-white border-opacity-30 rounded w-full py-2 px-3
                                                                       text-black leading-tight focus:outline-none focus:shadow-outline"></input>
            
    
            <label className="flex text-lg text-white font-bold font-mono">Senha</label>
            <input placeholder="*********************" type="password" className="font-mono mb-10 shadow appearance-none border-2 border-white border-opacity-30 rounded w-full py-2 px-3
                                                                       text-black leading-tight focus:outline-none focus:shadow-outline"></input>
    
            <label className="font-mono flex mb-10 underline text-white font-bold">
                <input type="checkbox" className="mr-2"></input>
                Lembrar-me
            </label>
    
            <input type="submit" value="Entrar" className="font-mono font-bold text-white border-4 border-opacity-30 py-2 px-16 bg-gradient-to-r from-green-600  hover:bg-green-800 rounded-lg"></input>

            </form>
        </div>
      </div>
    );
  }
  