export default function PointDetails( {params}: {
    params: { pointid: string }
} ){
    return <h1>Detalhes do ponto {params.pointid}</h1>
}
