import Image from "next/image"

const page = () => {
  return (
    <div><hr />
      <hr />
      <h1>The page is not found</h1>
      <hr />
      <hr />
      <hr />
      <hr />
      <Image src={"/undraw_not-found_6bgl.svg"} alt="Not Found Image" height={400} width={400} />
    </div>
  )
}

export default page
