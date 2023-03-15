import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex items-center justify-center w-full space-x-8">
        <div className="text-3xl ">Soyab Mostofa</div>
        <div>
          <Image src="/me.jpg" alt="soyab" height={300} width={300} />
        </div>
      </div>
      <button className="px-4 py-2 mx-auto mt-10 bg-blue-700 text-neutral-50">
        <Link href="/Curriculum Vitae - Soyab Mostofa.pdf">Download CV</Link>
      </button>
    </div>
  );
};

export default Hero;
