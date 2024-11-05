import { useEffect, useState } from "react";
import { Col, Row, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Support = () => {
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_JSON_SOCIALS_URL)
      .then((response) => response.json())
      .then((data) => {
        setSocialData(data);
      });
  }, []);

  return (
    <>
      <Row className="cards pt-5">
        {socialData?.map((app, index) => (
          <Col xs="6" md="3" key={index}>
            <Card>
              <Card.Body
                as={Link}
                to={app.contact_link}
                style={{ cursor: "pointer" }}
              >
                <Card.Title>{app.name}</Card.Title>
                <Card.Text>
                  <Image
                    width={200}
                    height={200}
                    className="p-md-4 p-2"
                    src={app.logo}
                    fluid
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Support;
