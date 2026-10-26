const page = async ({ params }) => {
  const { userId } = await params;
  console.log(userId);
  return (
    <div>
      <h1>user = {userId}</h1>
    </div>
  );
};

export default page;
