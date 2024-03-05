import aboutImg from "./about.jpeg"
import {  Row, Col } from "react-bootstrap";


const AboutScreen = () => {
  return (
        <Row className="mt-4">
          <Col md={6}>
            <img
              src={aboutImg}
              alt="About Us"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">Welcome to Our Company</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dapibus, libero id pulvinar fermentum, nulla arcu consequat
              ligula, a congue odio metus sed nunc. Integer at purus fermentum,
              interdum urna sed, consequat purus. Fusce nec vulputate eros.
              Nullam condimentum tristique mi, et ultrices tellus hendrerit in.
              Aliquam consequat est ac faucibus tristique. Morbi bibendum nibh
              in nunc fermentum sollicitudin. Nulla semper semper venenatis.
            </p>
            <p className="text-justify">
              In dictum massa nec tellus pretium, id lobortis velit accumsan.
              Curabitur bibendum velit nec nibh sollicitudin scelerisque.
              Curabitur interdum libero non varius laoreet. Integer sit amet
              tortor facilisis, dignissim purus id, consectetur ex. Cras eu
              congue mi. Aliquam fermentum, mauris nec congue finibus, nulla dui
              interdum mi, ut rutrum libero orci vel ante. Etiam aliquet velit
              id felis posuere, nec faucibus felis gravida. Donec malesuada
              mauris eu ligula lacinia, nec pharetra ligula ultricies.
            </p>
          </Col>
        </Row>
  );
};

export default AboutScreen;
