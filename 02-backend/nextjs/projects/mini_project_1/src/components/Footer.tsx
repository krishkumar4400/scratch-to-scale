
const Footer = () => {
  return (
    <div className="px-2 py-4 bg-gray-200 text-gray-600 flex items-center justify-center flex-col">
      <h1 className="py-4 text-2xl font-bold ">This is Footer</h1>
      <div>
        <h2 className="pb-2 font-medium text-black text-lg">Built with Next.Js</h2>
        <div className="">
          <p className="font-medium  text-sm pb-6">
            2026 MyWebSite@2026. All Rights Reserved
          </p>
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white cursor-pointer rounded-md mb-6">Explore More</button>
      </div>
    </div>
  );
}

export default Footer
