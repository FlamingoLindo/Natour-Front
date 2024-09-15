export default function ReviewPoint({
    params,
}: {
    params: {
        pointid: string
        reviewid: string
    };
}) {
    console.log(params)
    return (
        <h1>Review {params.reviewid} do ponto {params.pointid}</h1>
    );
}
