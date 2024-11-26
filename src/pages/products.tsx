import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Products = () => (
  <Main
    meta={
      <Meta title="Semergytech: Products" description={AppConfig.description} />
    }
  >
    <p>
      <a href="/assets/PCSELSim.pdf" target="_blank">
        PCSELSim: PCSEL Modeling and Simulation Tool{' '}
        <FontAwesomeIcon
          icon={faUpRightFromSquare}
          height="0.75em"
          style={{ display: 'inline' }}
        />
      </a>
    </p>
    <p>
      High-Power Photonic Crystal Surface-Emitting Lasers
      <FontAwesomeIcon
        icon={faUpRightFromSquare}
        height="0.75em"
        style={{ display: 'inline' }}
      />
    </p>
  </Main>
);

export default Products;
