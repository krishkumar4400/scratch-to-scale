const page = async ({ params, searchParams }) => {
  const { slug } = await params;
  console.log(slug); // [ '2e3f', '12qwer3', '2we3dfrv', '1234' ]

  const { page, limit } = await searchParams;
  console.log("page = ", page, "limit = ", limit); // page =  12 limit =  100

  return <div>slug</div>;
};

export default page;
