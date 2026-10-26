const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug); // [ '2e3f', '12qwer3', '2we3dfrv', '1234' ]
  return <div>slug</div>;
};

export default page;
