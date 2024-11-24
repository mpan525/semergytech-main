import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import { useState } from 'react'
import TechnologySection from '@/components/TechnologySection';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { images } from '@/utils/images.js';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface ImageData {
  title: string;
  src: string;
  alt: string;
  citations: string[];
}

export default function Page() {
  //     const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <Main
      meta={
        <Meta
          title="Semergytech: Technology"
          description={AppConfig.description}
        />
      }
    >
      <p>
        The technology is mostly based on the research from Professor Weidong
        Zhou&apos;s group at the University of Texas at Arlington, in
        collaborations with his collaborators, and team members.{' '}
        <a href="https://zhoulab.uta.edu">https://zhoulab.uta.edu</a>
      </p>
      <p>Major technologies can be found in the following slides:</p>

      <section className="py-12 min-h-screen bg-white">
        <div>
          <div className="container">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              //                           thumbs={{
              //                             swiper:
              //                               thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
              //                           }}
              modules={[FreeMode, Navigation, Thumbs]}
              className=" w-full rounded-lg"
            >
              {images.map((image: ImageData, index: number) => (
                <SwiperSlide key={index}>
                  <TechnologySection
                    title={image.title}
                    image={<Image src={image.src} alt={image.alt} />}
                    citations={image.citations}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </Main>
  );
}
