import Image from 'next/image';
import React from 'react';

const index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="md:flex shadow-lg sm:mx-20 ">
        <div className="bg-neutral-900 text-neutral-50 px-4 py-12">
          <h1 className="font-semibold text-2xl mb-4">
            Hello I&#39;m Soyab Mostofa
          </h1>
          <p className="">
            I possess excellent computer expertise as well as communication
            skills. Highly focused, able to lead and work for a team as
            demonstrated throughout my academic and entrepreneurial career. Have
            both academic and practical expertise in Marketing, Campaign
            planning, Data analysis and Freelancing. My Research Interest lies
            on Consumer behavioral psychology and Its Effects, Management
            Information System, Statistical data Analysis and Machine learning.
          </p>
          <button className="text-neutral-50 bg-emerald-600 px-12 py-2 mt-4">
            <a href="/soyab-mostofa-cv.pdf" download>
              Download Resume
            </a>
          </button>
        </div>
        <div className="p-12 pb-0 relative after:bg-emerald-600 after:absolute after:h-full after:z-0 after:w-2/3 after:top-0 after:right-0">
          <div className="md:h-full w-60 relative h-80 pt-4 z-10 ">
            <Image
              src="/myself.png"
              alt="my image"
              layout="fill"
              objectFit="scale-down"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
