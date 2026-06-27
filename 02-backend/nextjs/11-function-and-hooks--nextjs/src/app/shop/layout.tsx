import SideBar from "../component/SideBar";


const ShopLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
        <SideBar />
        <main className="flex-1 p-6">

      {
        children
      }
        </main>
    </div>
  )
}

export default ShopLayout
