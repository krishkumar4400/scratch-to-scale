const Product = async ({ params }: any) => {
    const { pId } = await params;

    return (
        <div>
            <h1>This is product page {pId} </h1>
        </div>
    )
}

export default Product;
