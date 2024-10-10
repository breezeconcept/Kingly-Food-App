'use client';
import { SingleProductDetails } from '@/app/types';
import { useState } from 'react';

const sections = [
  { title: 'Ingredients', id: 1 },
  { title: 'Description', id: 2 },
  { title: 'Review', id: 3 },
  { title: 'Return Policy', id: 4 },
];

export const DescriptionSection = ({
  product,
}: {
  product: SingleProductDetails | {};
}) => {
  const [activeButton, setActiveButton] = useState(sections[0].id);

  const handleClick = (id: number) => {
    setActiveButton(id);
  };

  return (
    <section className="mt-[50px] sm:mt-[60px] lg:mt-[100px]">
      <div className="grid gap-x-[10px] sm:gap-x-[50px] lg:gap-x-[96px] grid-cols-[repeat(4,max-content)]">
        {sections.map((section) => (
          <div key={section.id}>
            <button
              className={`text-neutral-400 text-base sm:text-xl lg:text-2xl font-normal font-['Poppins'] leading-[29.42px] ${
                activeButton === section.id ? 'active' : ''
              }`}
              onClick={() => handleClick(section.id)}
            >
              {section.title}
            </button>
            <div
              className={` h-1 rounded-lg ${
                activeButton === section.id ? 'bg-orange-500' : 'bg-transparent'
              }`}
            />
          </div>
        ))}
      </div>

      <article className="mt-[30px] pl-4">
        <ul className="text-black list-disc text-base font-light font-['Poppins'] leading-tight">
          <li className="mb-3"> 1 and 3/4 cups (220g) all-purpose flour</li>

          <li className="mb-3"> 3/4 cup (65g) unsweetened cocoa powder</li>
          <li className="mb-3">2 cups (400g) granulated sugar</li>
          <li className="mb-3">2 teaspoons baking soda</li>
          <li className="mb-3">1 teaspoon baking powder</li>
          <li className="mb-3">1 teaspoon salt</li>
          <li className="mb-3">2 large eggs, at room temperature</li>
          <li className="mb-3">
            1 cup (240ml) buttermilk, at room temperature
          </li>
          <li className="mb-3">
            {' '}
            1/2 cup (120ml) vegetable oil or melted butter
          </li>
          <li className="mb-3">2 teaspoons pure vanilla extract</li>
          <li>1 cup (240ml) hot water or hot coffee</li>
        </ul>
      </article>
    </section>
  );
};
