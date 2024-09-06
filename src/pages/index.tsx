import Image from 'next/image';

import { Meta } from '@/layout/Meta';
import photonics from '@/public/assets/images/photonics.png';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Semergytech: Home"
          description="Semergytech provides innovative and disruptive photonic and electronic component solutions based on nanophotonic technologies"
        />
      }
    >
      <p>
        Semergytech&apos;s mission is to provide innovative and disruptive
        photonic and electronic component solutions based on nanophotonic
        technologies. Built upon strong expertise and IP portfolio related to
        semiconductor lasers, modulators, and photonic crystal cavities,
        Semergytech is well positioned to commercialize innovative photonic and
        electronic component solutions on silicon and any other substrates
        either rigid or flexible.
      </p>
      <Image
        src={photonics}
        alt="Photonics (Lasers) for a smart and connected society"
      />
    </Main>
  );
};

export default Index;
