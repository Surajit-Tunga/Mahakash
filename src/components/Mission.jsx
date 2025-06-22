import React from 'react';
import Mission1 from "../assets/Mission1.jpg";
import mission2 from "../assets/mission2.jpeg";

const MissionCard = ({ image, reverse, title, description }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ${reverse ? 'sm:flex-row-reverse' : ''}`}>
      {!reverse && <img data-aos="zoom-in" src={image} alt={title} className="w-full h-auto rounded-lg transform scale-95 mx-auto" />}
      <div className={`space-y-4 xl:pr-36 p-4 border-b-2 border-sky-800 ${reverse ? 'border-l-2' : 'border-r-2'}`}>
        <p data-aos="fade-up" className='text-sky-800 uppercase font-semibold'>Our Mission</p>
        <h1 data-aos="fade-up" data-aos-delay="300"  className='uppercase text-4xl md:text-5xl font-bold'>{title}</h1>
        <p data-aos="fade-up" data-aos-delay="500"  className="text-gray-200">{description}</p>
        <button data-aos="fade-up" data-aos-delay="700"  className='bg-white text-black px-4 py-2 rounded-md mt-5 hover:bg-slate-300 transition duration-300'>Learn More</button>
      </div>
      {reverse && <img data-aos="zoom-in" src={image} alt={title} className="w-full h-auto rounded-lg transform scale-95 mx-auto" />}
    </div>
  );
};

const Mission = () => {
  return (
    <div className='pb-12 mt-20 relative z-10'>
      <div className="container space-y-16">
        <MissionCard
          image={Mission1}
          title="Inspire the Future"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est modi doloremque..."
          reverse={false}
        />
        <MissionCard
          image={mission2}
          title="Empower with Knowledge"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit earum sed aliquam..."
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Mission;
