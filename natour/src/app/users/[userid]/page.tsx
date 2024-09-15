export default function UserDetails( {params}: {
    params: { userid: string }
} ){
    return <h1>Detalhes do usuário {params.userid}</h1>
}
