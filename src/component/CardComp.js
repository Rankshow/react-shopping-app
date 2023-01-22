import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import garlic from "../image/GaliRice.jpg";
import chicken from "../image/chickenRice.jpg";
import shrimp from "../image/ShrimpRice.jpg";
import WhiteRice from "../image/white_rice.jpg";
import "./CardComp.css";

function BasicExample() {
  return (
    <>
      <div className="row py-5">
        <h1 className="head-1 text-center pb-2 text-primary">Our Service</h1>
        <Card className="mx-auto" style={{ width: "18rem", margin: "0.5rem" }}>
          <Card.Img className="section-main" variant="top" src={garlic} />
          <Card.Body>
            <Card.Title className="text-center">Galic Rice</Card.Title>
            <Card.Text>
              Garlic has been known to have medicinal properties and found to
              have antibacterial, antiviral, and anti fungal activity in test
              tube studies. It is claimed to prevent heart diseases such as high
              blood pressure, high cholesterol and other.
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
        <Card className="mx-auto" style={{ width: "18rem", margin: "0.5rem" }}>
          <Card.Img className="section-main" variant="top" src={chicken} />
          <Card.Body>
            <Card.Title className="text-center">Chicken Rice</Card.Title>
            <Card.Text>
              chicken rice is a dish that consists of succulent poached white
              chicken cut into bite-size pieces and served on fragrant rice with
              some light soy sauce. The dish is topped with sprigs of coriander
              leaf and sesame oil, and accompanied by a garlic-chilli dip.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Card className="mx-auto" style={{ width: "18rem", margin: "0.5rem" }}>
          <Card.Img className="section-main" variant="top" src={shrimp} />
          <Card.Body>
            <Card.Title>Shrimp Rice</Card.Title>
            <Card.Text>
              This shrimp fried rice highlights the best of Chinese takeout in a
              quick and easy recipe. Made with rice, shrimp, peas, carrots,
              onion, and egg, plus savory Asian flavors, it's the best stir fry
              recipe eve
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Card className="mx-auto" style={{ width: "18rem", margin: "0.5rem" }}>
          <Card.Img className="section-main" variant="top" src={WhiteRice} />
          <Card.Body>
            <Card.Title className="text-center">White rice</Card.Title>
            <Card.Text>
              A classic Chinese fried rice sauce draws mostly on the saltiness
              of soy sauce or tamari, some aromatics like garlic and scallions,
              and bit of acid from rice
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;
