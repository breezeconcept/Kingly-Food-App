import Image from 'next/image';
import arrowDownIcon from '@/public/images/arrow-down.svg';
import filterIcon from '@/public/images/filter.svg';

interface ProductHeadingProps {
  isShop?: boolean;
  name: string;
  text: string;
  selectedPriceRange: string;
  setSelectedPriceRange: (priceRange: string) => void;
}

export const ProductHeading = ({
  isShop,
  name,
  text,
  selectedPriceRange,
  setSelectedPriceRange,
}: ProductHeadingProps) => {
  const handlePriceRangeChange = (value: string) =>
    setSelectedPriceRange(value);

  const priceRanges = [
    { label: 'All', value: '' },
    { label: 'Below ₦10,000', value: '0-10000' },
    { label: '₦10,000 - ₦30,000', value: '10000-30000' },
    { label: '₦30,000 - ₦50,000', value: '30000-50000' },
    { label: '₦50,000 and above', value: '50000' },
  ];

  return (
    <>
      {!isShop ? (
        <div className="flex flex-col gap-[8.5px]">
          <h2 className="text-zinc-800 text-xl md:text-2xl font-normal font-['Poppins'] leading-normal">
            {name}
          </h2>
          <p className="max-w-[335px] text-wrap  text-zinc-600 text-sm md:text-base font-light font-['Poppins'] leading-[16.80px]">
            {text}
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-800 text-xl md:text-2xl font-normal font-['Poppins'] leading-normal">
            {name}
          </h2>
          <div className="flex flex-col md:flex-row items-center w-[max-content] mb-[5.619px] md:mb-0 h-[max-content]">
            {/* Price Range Dropdown */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="text-black text-xs md:text-base md:mr-1 font-light font-['Poppins'] leading-[14.40px]">
                Filter by Price:
              </div>
              <select
                className="px-[10.17px] py-[5.08px] bg-white rounded-[31.95px] appearance-none"
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                value={selectedPriceRange}
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className="flex items-center px-2 py-[5.08px] bg-white rounded-[31.95px]">
              <div className="mr-[11.619px]">
                <Image src={filterIcon} alt="" />
              </div>
              <div>
                <Image src={arrowDownIcon} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};
