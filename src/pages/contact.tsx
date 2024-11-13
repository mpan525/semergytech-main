import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
// import Map from "../components/Map";

const Contact = () => (
  <Main
    meta={
      <Meta title="Semergytech: Jobs" description={AppConfig.description} />
    }
  >
    <p>
      Semergytech, Inc. <br />
      301 S Center St, Suite 310 <br />
      Arlington, TX 76010 <br />
      Email: <a href="mailto:info@semergytech.com">info@semergytech.com</a>
      <br />
    </p>
  </Main>
);

export default Contact;
