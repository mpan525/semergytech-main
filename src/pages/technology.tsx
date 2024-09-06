import Image from 'next/image';

import TechnologySection from '@/components/TechnologySection';
import { Meta } from '@/layout/Meta';
import grapheneSiPc from '@/public/assets/images/technology/Graphene Si PC.jpg';
import mrvcsel from '@/public/assets/images/technology/MR-VCSEL-ZM.jpg';
import pcsslm from '@/public/assets/images/technology/PC SLM Graphic1.png';
import pcsel from '@/public/assets/images/technology/PCSEL.jpg';
import bookCover from '@/public/assets/images/technology/Zhoubook cover.jpg';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Technology = () => (
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
    <p>Major technologies can be found in the following publications:</p>
    <ol className="list-decimal list-inside">
      <TechnologySection
        title="DBR-free photonic crystal membrane reflector vertical-cavity
        surface-emitting lasers"
        image={<Image src={mrvcsel} alt="MR-VCSEL" />}
        citation="H. Yang, D. Zhao, S. Chuwongin, J.-H. Seo, W. Yang, Y. Shuai, J.
        Berggren, M. Hammar, Z. Ma and W. Zhou, “Transfer printing stacked
        nanomembrane lasers on silicon”, Nature Photonics 6, 615-620 (2012)."
      />
      <TechnologySection
        title="Hybrid photonic crystal surface emitting lasers (hPCSEL)"
        image={<Image src={pcsel} alt="hPCSEL" />}
        citation="D. Zhao, S. Liu, H. Yang, Z. Ma, C. Reuterskiöld-Hedlund, M. Hammar, and W. Zhou, “Printed Large-Area Single-Mode Photonic Crystal Bandedge Surface-Emitting Lasers on Silicon, Scientific Reports 6, 18860 (2016)."
      />
      <TechnologySection
        title="High speed photonic crystal slab spatial light modulators (PCS SLM)"
        image={<Image src={pcsslm} alt="PCS SLM" />}
        citation="Y. Shuai, D. Zhao, C. Stambaugh, N. Zimmerman, J. Lawall, and W. Zhou, “Coupled Bi-layer Photonic Crystal Slab Electro-optic Spatial Light Modulators”,  IEEE Photon. J. 9, 7101411 (2017)."
      />
      <TechnologySection
        title="Material absorption control with photonic crystal cavities "
        image={<Image src={grapheneSiPc} alt="Graphene Si PC" />}
        citation="Y. Liu, A. Chadha, D. Zhao, J. R.Piper, Y. Jia, Y. Shuai, L. Menon, H. Yang, Z. Ma, S. Fan, F. Xia, and W. Zhou, “Approaching total absorption at near infrared in a large area monolayer graphene by critical coupling”, Appl. Phys. Lett. 105, 181105 (2014)."
      />
      <TechnologySection
        title="Photonic crystal metasurface optoelectronics"
        image={<Image src={bookCover} alt="Book cover" />}
        citation=""
      />
    </ol>
  </Main>
);

export default Technology;
