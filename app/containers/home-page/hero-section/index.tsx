'use client';
import Image from 'next/image';

import heroImg from '@/public/images/hero-img.png';
import leafIcon from '@/public/images/leaf-icon.svg';

export const HeroSection = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const handleNavigateToShopSection = () => {
    document
      .getElementById('shopSection')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // <section
    //   className={`h-full relative  w-full ${
    //     isMenuOpen ? 'mt-7 md:mt-28' : 'mt-28'
    //   } grid md:grid-cols-[70%_30%] z-[10]  grid-template-rows`}
    // >
    //   <div
    //     className="px-[16px] md:px-[60px] z-10 h-[min-content] md:h-[max-content]    hero_text-wrapper
    //   "
    //   >
    //     <h1 className="max-w-[358px] md:max-w-[1000px]  relative z-[10]">
    //       <span className="text-orange-500 text-2xl  md:pb-3 font-semibold font-['Poppins'] leading-[28.80px]  hero_heading">
    //         Delight in Every Bite: <br />
    //       </span>

    //       <span className="text-green-700 w-full   relative text-2xl z-[10]  font-semibold font-['Poppins'] leading-[28.80px]  hero_heading">
    //         <p className=" w-full lg:text-nowrap ">
    //           Explore Our Sweet Symphony.
    //         </p>
    //         <div className="hidden lg:block w-[20px] absolute left-[765px] bottom-[45px] z-[10]">
    //           <Image src={leafIcon} alt="" className="w-full h-full" />
    //         </div>
    //       </span>
    //     </h1>
    //     <p className="mt-[16px] w-80   text-neutral-600 text-xs  font-light md:font-normal font-['Poppins'] leading-[18px]  hero_text">
    //       Sharing joy through the sweetness of our creations. We invite you to
    //       savor our confections, create sweet memories, and experience the
    //       unparalleled joy that comes with every bite.
    //     </p>

    //     <button
    //       onClick={handleNavigateToShopSection}
    //       className="mt-[24px] w-[140px] h-9 px-3.5 py-2 bg-orange-500 rounded-lg shadow border justify-center items-center gap-2 inline-flex"
    //     >
    //       <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
    //         Go Shopping
    //       </div>
    //     </button>
    //   </div>
    //   <div
    //     className="md:hidden z-[20] relative w-full h-full mt-[60px] 
    //    md:mt-0  justify-self-center md:h-[100%]  max-w-[965px] "
    //   >
    //     <Image
    //       src={heroImg}
    //       alt=""
    //       style={{
    //         height: '100%',
    //         width: '100%',
    //         objectFit: 'cover',
    //       }}
    //       className="w-full  z-10 h-full transition-opacity opacity-0 duration-[0.1s]"
    //       onLoadingComplete={(image) => image.classList.remove('opacity-0')}
    //     />
    //   </div>

    //   <div className="hidden relative  z-10  md:block w-full h-full ">
    //     <Image
    //       src={heroImg}
    //       alt=""
    //       layout="fill"
    //       style={{
    //         height: '100%',
    //         width: '100%',
    //         objectFit: 'cover',
    //         position: 'absolute',
    //       }}
    //       sizes="100%"
    //       className="w-full z-10 absolute left-4 transition-opacity opacity-0 duration-[2s]"
    //       onLoadingComplete={(image) => image.classList.remove('opacity-0')}
    //       // style={{
    //       //   maxWidth: '100%',
    //       //   height: 'auto',
    //       //   objectFit: 'cover',
    //       // }}
    //     />
    //   </div>
    //   <div className="home-hero-section-top-svg h-full w-full md:max-w-[1629px]"></div>
    //   <div className="home-hero-section-bottom-svg w-fit md:max-w-[1629px]"></div>
    // </section>
    <section
      className={`h-full relative w-full ${
        isMenuOpen ? 'mt-7 md:mt-28' : 'mt-28'
      } grid md:grid-cols-[70%_30%] z-[10] grid-template-rows`}
    >
      <div
        className="px-[16px] md:px-[60px] z-10 h-[min-content] md:h-[max-content] hero_text-wrapper"
      >
        <h1 className="max-w-[358px] md:max-w-[1000px] relative z-[10]">
          <span className="text-orange-500 text-2xl md:pb-3 font-semibold font-['Poppins'] leading-[28.80px] hero_heading">
            Delight in Every Bite: <br />
          </span>

          <span className="text-green-700 w-full relative text-2xl z-[10] font-semibold font-['Poppins'] leading-[28.80px] hero_heading">
            <p className="w-full lg:text-nowrap">Explore Our Sweet Symphony.</p>
            <div className="hidden lg:block w-[20px] absolute left-[765px] bottom-[45px] z-[10]">
              <Image src={leafIcon} alt="" className="w-full h-full" />
            </div>
          </span>
        </h1>
        <p className="mt-[16px] w-80 text-neutral-600 text-xs font-light md:font-normal font-['Poppins'] leading-[18px] hero_text">
          Sharing joy through the sweetness of our creations. We invite you to
          savor our confections, create sweet memories, and experience the
          unparalleled joy that comes with every bite.
        </p>

        <button
          onClick={handleNavigateToShopSection}
          className="mt-[24px] w-[140px] h-9 px-3.5 py-2 bg-orange-500 rounded-lg shadow border justify-center items-center gap-2 inline-flex"
        >
          <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
            Go Shopping
          </div>
        </button>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden z-[20] relative w-full h-full mt-[60px] md:mt-0 justify-self-center max-w-[965px]">
        <Image
          src={heroImg}
          alt="Hero Image"
          style={{ objectFit: 'cover' }}
          className="w-full h-full z-10 transition-opacity opacity-0 duration-[0.1s] rounded-md"
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden relative z-10 md:block w-full h-full">
        <Image
          src={heroImg}
          alt="Hero Image"
          layout="fill"
          style={{ objectFit: 'cover', position: 'absolute' }}
          className="w-full h-full z-10 transition-opacity opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        />
      </div>

      <div className="home-hero-section-top-svg h-full w-full md:max-w-[1629px]"></div>
      <div className="home-hero-section-bottom-svg w-fit md:max-w-[1629px]"></div>
    </section>

  );
};
