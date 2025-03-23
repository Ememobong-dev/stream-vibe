import React from 'react';
import { CarouselButtons } from '../button/CarouselButtons';
import { CategoryCard } from '../category/CategoryCard';
import cat_img1 from "@/public/images/cat_img.jpg";
import cat_img2 from "@/public/images/cat_img2.png";
import cat_img3 from "@/public/images/cat_img3.png";



export const MoviesCategoryList = ({categoryTopic }: {categoryTopic: string; }) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h3 className='font-manrope font-bold text-3xl min-[1400px]:text-4xl text-white'> {categoryTopic} </h3>
            <CarouselButtons />
        </div>
        <div className="grid grid-cols-5 gap-5 my-10">
          <CategoryCard categoryName="Action" imgSrc={cat_img1} />
          <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
          <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
          <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
          <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
        </div>
    </div>
  )
}
