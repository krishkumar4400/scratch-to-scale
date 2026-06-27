export default async function Product({ params }: any) {
    console.log(await params);
    let { id } = await params;
    let { review } = await params;

    console.log(id);
    console.log(review);
    return (
        <>
            <h1>Hello Next.Js</h1>
        </>
    );
}