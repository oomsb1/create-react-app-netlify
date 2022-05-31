import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const WieBenIk = () => {
  return (
    //TODO make responsive
    <div style={{ marginLeft: 40 }}>
      <h1>Wie ben ik?</h1>
      <CardGroup>
        <Col>
          <Card style={{ margin: 5 }}>
            <Card.Title>Bram Ooms</Card.Title>
            <Card.Img variant="top" src="/images/Bram.jpg"></Card.Img>
            <Card.Body>
              <Card.Text>
                Ik heb gestudeerd aan de Thomas More hogeschool in Geel in de
                richting graduaat programmeren
              </Card.Text>
              <a
                className="btn btn-primary"
                href="/downloads/CVBramOoms.pdf"
                role="button"
              >
                Klik hier om mijn CV te bekijken
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: 5 }}>
            <Card.Body>
              <Card.Title>Persoonlijke info</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Geboortedatum: <br /> 13 juli 2002
                </ListGroupItem>
                <ListGroupItem>Woonplaats: Mol</ListGroupItem>
                <ListGroupItem>
                  Telefoonnummer: <br /> +32 499 84 12 53
                </ListGroupItem>
                <ListGroupItem>
                  Mailadres:{" "}
                  <a href="mailto:bram.ooms7@gmail.com">bram.ooms7@gmail.com</a>{" "}
                </ListGroupItem>
                <ListGroupItem>
                  Linkedin: Klik{" "}
                  <a href="https://www.linkedin.com/in/bram-ooms-ba435a201/">
                    hier
                  </a>{" "}
                  om naar mijn linkedin pagina te gaan
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: 5 }}>
            <Card.Body>
              <Card.Title>Hobby's en interesses</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Schaken</ListGroupItem>
                <ListGroupItem>Fietsen</ListGroupItem>
                <ListGroupItem>Muziek</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: 5 }}>
            <Card.Body>
              <Card.Title>Hard skills</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>C#</ListGroupItem>
                <ListGroupItem>ASP.net</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: 5 }}>
            <Card.Body>
              <Card.Title>Soft skills</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Doorzettingsvermogen</ListGroupItem>
                <ListGroupItem>Professionaliteit</ListGroupItem>
                <ListGroupItem>Professionele communicatie</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </CardGroup>
      <br></br>
      <Link className="btn btn-primary" to="/documenten">
        Documenten eerdere projecten
      </Link>
    </div>
  );
};

export default WieBenIk;
