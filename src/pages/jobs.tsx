import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Jobs = () => (
  <Main
    meta={
      <Meta title="Semergytech: Jobs" description={AppConfig.description} />
    }
  >
    <p>
      <span className="font-bold">Research Engineer</span>
      <br />
      Fort Worth, TX <br />
      United States <br />
    </p>

    <p>
      The Research Engineer will take leadership of one or more develop process
      steps in a Photonic/Optoelectronic Devices manufacturing line including
      micro-/nano-fabrication process/structure development and engineering.
      Experience with the use of optical, electrical and structural
      characterization tools to evaluate device requirements is essential. A
      strong fundamental understanding of semiconductor physics and its
      relationship to process and material/device quality is also required.
      Photonic Device related experience is desirable.
    </p>

    <p>Position requirements:</p>
    <ul className="list-disc list-inside">
      <li>
        Minimum of an MS in Electrical Engineering, Material Engineering,
        Photonics, or Physics.
      </li>
      <li>
        A strong background with semiconductor optical devices such as lasers,
        detectors, modulators and other integrated waveguide devices required.
      </li>
    </ul>

    <p>
      Contact: <a href="mailto:info@semergytech.com">info@semergytech.com</a>
    </p>
  </Main>
);

export default Jobs;
