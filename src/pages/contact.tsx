import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Contact = () => (
  <Main
    meta={
      <Meta title="Semergytech: Jobs" description={AppConfig.description} />
    }
  >
    <p>
      Semergytech, Inc. <br />
      1120 South Fwy, Suite 123E <br />
      Fort Worth, TX 76104 <br />
      Email: <a href="mailto:info@semergytech.com">info@semergytech.com</a>
      <br />
    </p>
  </Main>
);

export default Contact;
