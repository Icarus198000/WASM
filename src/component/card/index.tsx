'use client';

export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
   return (
      <div className={`${className} rounded-[7px] font-medium bg-gray-100 shadow-md`}>
         {children}
      </div>
   );
}