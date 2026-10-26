const page = async ({ params }) => {
  const { productId } = await params;
  console.log(productId);
  return (
    <div>
      <h1>Product = ${productId}</h1>
    </div>
  );
};

export default page;
