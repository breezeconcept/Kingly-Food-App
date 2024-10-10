import Image from 'next/image';
import companyLogo from '@/public/images/company-logo.svg';
import companyLogoWhite from '@/public/images/company-logo-white.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-[105px] w-full px-[16px] h-[min-content] bg-orange-500">
      <div className="absolute w-fit md:hidden h-fit bottom-0   left-5 md:left-[700px] md:bottom-14  z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="242"
          height="514"
          viewBox="0 0 242 514"
          fill="none"
        >
          <path
            d="M190.95 471.569C190.95 471.569 374.129 261.223 46.1923 0.296875C46.1923 0.296875 -106.974 344.922 144.509 514C144.509 514 206.474 393.821 96.7735 204.562C96.7735 204.433 233.252 318.014 190.95 471.569Z"
            fill="#F4F3F3"
            fillOpacity="0.13"
          />
        </svg>
      </div>

      <div className="absolute w-fit hidden md:block h-fit bottom-0  md:right-[260px] md:bottom-[2px]  z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="592"
          viewBox="0 0 320 592"
          fill="none"
        >
          <path
            d="M252.551 624.117C252.551 624.117 494.823 345.914 61.0939 0.8125C61.0939 0.8125 -141.484 456.613 191.127 680.236C191.127 680.236 273.082 521.288 127.993 270.974C127.993 270.803 308.499 421.025 252.551 624.117Z"
            fill="#F4F3F3"
            fillOpacity="0.21"
          />
        </svg>
      </div>
      <div className="absolute w-fit h-fit  top-72 right-0 md:hidden z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="102"
          height="233"
          viewBox="0 0 102 233"
          fill="none"
        >
          <path
            d="M0.286853 192.364C0.286853 192.364 -16.5308 12.5483 254.615 0C254.615 0 204.552 238.676 8.82451 232.855C8.82451 232.855 21.7609 146.31 151.125 88.4847C150.736 87.9673 36.25 95.8585 0.286853 192.364Z"
            fill="#F4F3F3"
            fillOpacity="0.13"
          />
        </svg>
      </div>

      <div className="absolute w-fit h-fit hidden md:block top-20 right-10 md:right-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="337"
          height="309"
          viewBox="0 0 236 309"
          fill="none"
        >
          <path
            d="M0.544335 254.42C0.544335 254.42 -21.6986 16.5963 336.919 0C336.919 0 270.705 315.673 11.8362 307.973C11.8362 307.973 28.9459 193.51 200.042 117.03C199.529 116.346 48.1091 126.782 0.544335 254.42Z"
            fill="#F4F3F3"
            fillOpacity="0.21"
          />
        </svg>
      </div>

      <div id="contactUs" className="px-[16px] md:px-[60px] max-w-[708px] ">
        <h2 className="text-white  mb-[23px]  text-2xl  pt-[82px] font-medium font-['Poppins'] leading-[28.80px]">
          Contact Us
        </h2>
        <div className="h-[222px]">
          <ul className="md:list-disc   pr-20 grid justify-evenly  text-white text-[15px] text-wrap md:text-base font-light font-['Poppins'] leading-tight">
            <li className="mb-6 md:mb-8">
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
            <li className="mb-6  md:mb-8">
              Complaints: We strive to provide the best experience, but if
              something didn&apos;t meet your expectations, please let us know.
              Your feedback helps us improve. Email us at
              [complaints@example.com] or fill out the form below.
            </li>
            <li className="">
              Tutorial Requests: Interested in mastering the art of baking?
              We&apos;d love to help! Share your requests or suggestions for
              tutorials by emailing us at [tutorials@example.com]
            </li>
          </ul>
        </div>
      </div>

      <div className="grid  md:text-wrap px-[16px] md:px-[60px]  md:w-[487px] mt-[90px]  grid-rows-[repeat(auto-fit,minmax(min-content,min-content))] md:grid-rows-[100%] md:grid-cols-[1fr_1fr_1fr] gap-5 md:gap-x-[91px]">
        <div>
          <h2 className="text-white  mb-[10px]  text-xl  font-medium font-['Poppins'] leading-normal">
            Company
          </h2>
          <p className="text-white mb-[10px] text-base font-light font-['Poppins'] leading-normal">
            About Us
          </p>
          <p className="text-white mb-[10px] text-base font-light font-['Poppins'] leading-normal">
            Careers
          </p>
          <p className="text-white text-base font-light font-['Poppins'] leading-normal">
            Contact Us
          </p>
        </div>
        <div>
          <h2 className="text-white mb-[10px]  text-xl  font-medium font-['Poppins'] leading-normal">
            Customers
          </h2>
          <p className="text-white mb-[10px] text-base font-light font-['Poppins'] leading-normal">
            Buyers
          </p>
          <p className="text-white text-base font-light font-['Poppins'] leading-normal">
            Supplier
          </p>
        </div>
        <div>
          <h2 className="text-white mb-[10px]  text-xl  font-medium font-['Poppins'] leading-normal">
            Follow us
          </h2>
          <p className="text-white mb-[10px] text-base font-light font-['Poppins'] leading-normal">
            Instagram
          </p>
          <p className="text-white text-base font-light font-['Poppins'] leading-normal">
            Facebook
          </p>
        </div>
      </div>

      <div className="flex md:text-wrap px-[16px] md:px-[60px] pb-[48px]  items-center justify-between mt-[112.74px] ">
        <div className="md:hidden">
          <Image src={companyLogo} alt="" />
        </div>
        <div className="hidden md:block">
          <Image src={companyLogoWhite} alt="" />
        </div>
        <p className="text-white text-wrap text-opacity-75  text-xs font-normal font-['Poppins'] leading-normal">
          © {currentYear} kingly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
