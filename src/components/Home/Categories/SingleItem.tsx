import { Category } from "@/types/category";
import React from "react";

const icons: Record<string, React.ReactNode> = {
  cloud: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 34H14C9.58 34 6 30.42 6 26C6 22.02 8.92 18.72 12.76 18.12C13.64 13.52 17.68 10 22.5 10C26.04 10 29.16 11.92 30.88 14.78C31.24 14.72 31.62 14.68 32 14.68C36.42 14.68 40 18.26 40 22.68C40 23.14 39.96 23.58 39.88 24.02" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 28V38" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 32H40H44" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="14" y="28" width="16" height="12" rx="2" stroke="#0DA6EC" strokeWidth="2.5"/>
      <path d="M18 28V40" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3"/>
      <path d="M22 34H26" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  monitor: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="24" rx="3" stroke="#0DA6EC" strokeWidth="2.5"/>
      <path d="M6 26H42" stroke="#0DA6EC" strokeWidth="2.5"/>
      <path d="M18 38H30" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 32V38" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="29" r="1.5" fill="#0DA6EC"/>
      <path d="M14 16H22" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 20H18" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  cart: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H12L16 32H36L40 14H14" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="38" r="3" stroke="#0DA6EC" strokeWidth="2.5"/>
      <circle cx="34" cy="38" r="3" stroke="#0DA6EC" strokeWidth="2.5"/>
      <path d="M22 20H30" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 16V24" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  page: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6H30L38 14V42H12C10.9 42 10 41.1 10 40V8C10 6.9 10.9 6 12 6Z" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 6V14H38" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 22H32" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 28H28" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 34H24" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="33" cy="33" r="7" fill="white" stroke="#0DA6EC" strokeWidth="2"/>
      <path d="M31 33L33 35L36 31" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  brush: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 6L42 18L22 38H10V26L30 6Z" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 10L38 22" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 38L6 42" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 30L22 26" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  gear: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke="#0DA6EC" strokeWidth="2.5"/>
      <path d="M38.28 28.56C38.08 29.02 38.06 29.54 38.22 30.02L39.4 33.54C39.66 34.3 39.44 35.14 38.84 35.68L35.68 38.84C35.14 39.44 34.3 39.66 33.54 39.4L30.02 38.22C29.54 38.06 29.02 38.08 28.56 38.28L25.18 39.76C24.72 39.96 24.34 40.32 24.12 40.78L22.6 44.14C22.28 44.86 21.56 45.34 20.76 45.34H16.24C15.44 45.34 14.72 44.86 14.4 44.14L12.88 40.78C12.66 40.32 12.28 39.96 11.82 39.76L8.44 38.28C7.98 38.08 7.46 38.06 6.98 38.22L3.46 39.4C2.7 39.66 1.86 39.44 1.32 38.84" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20.5 8.5L21.4 5.22C21.62 4.5 22.28 4 23.02 4H24.98C25.72 4 26.38 4.5 26.6 5.22L27.5 8.5" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M35 12L37.54 9.66C38.08 9.16 38.88 9.04 39.54 9.36L41.32 10.24C41.98 10.56 42.36 11.28 42.24 12.02L41.5 15.5" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M13 12L10.46 9.66C9.92 9.16 9.12 9.04 8.46 9.36L6.68 10.24C6.02 10.56 5.64 11.28 5.76 12.02L6.5 15.5" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  pack: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 16L24 6L6 16V32L24 42L42 32V16Z" stroke="#0DA6EC" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M6 16L24 26" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 26V42" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M42 16L24 26" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M15 11L33 21" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round"/>
      <path d="M33 25V29L24 34" stroke="#0DA6EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  custom: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12C8 9.8 9.8 8 12 8H36C38.2 8 40 9.8 40 12V36C40 38.2 38.2 40 36 40H12C9.8 40 8 38.2 8 36V12Z" stroke="#0DA6EC" strokeWidth="2.5"/>
      <path d="M16 18L22 24L16 30" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 30H34" stroke="#0DA6EC" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
};

const SingleItem = ({ item }: { item: { title: string; id: number; img: string; icon?: string } }) => {
  return (
    <a href="#" className="group flex flex-col items-center">
      <div className="max-w-[130px] w-full bg-[#F2F3F8] h-32.5 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue/10">
        {item.icon && icons[item.icon] ? (
          icons[item.icon]
        ) : (
          <img src={item.img} alt={item.title} width={82} height={62} />
        )}
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
          {item.title}
        </h3>
      </div>
    </a>
  );
};

export default SingleItem;
