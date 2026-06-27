import { assets } from '../../assets/assets.js'

const Companies = () => {
  return (
    <div className="pt-15 pb-15 bg-gradient-to-t  from-blue-200 w-full">
      <div className="mb-4 md:mb-8">
        <p className=" text-gray-600 text-base font-medium">
          Trusted by learners from{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center  gap-6 md:gap-14  mx-auto sm:mx-3">
        <img
          src={assets.microsoft_logo}
          className="w-20 sm:w-28"
          alt="Microsoft"
        />
        <img src={assets.walmart_logo} className="w-20 sm:w-25" alt="Walmart" />
        <img
          src={assets.accenture_logo}
          className="w-20 sm:w-25"
          alt="Accenture"
        />
        <img src={assets.adobe_logo} className="w-20 sm:w-25" alt="Adobe" />
        <img src={assets.paypal_logo} className="w-20 sm:w-25" alt="Paypal" />
      </div>
    </div>
  );
}

export default Companies
