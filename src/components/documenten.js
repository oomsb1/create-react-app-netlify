import { Card, CardGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Documenten = () => {
  return (
    <div>
      <CardGroup style={{ margin: 5, width: "32rem" }}>
        <Col>
          <Card>
            <Card.Title>Groepswerk C# MVVM</Card.Title>
            <Card.Body>
              Tijdens dit groepswerk heb ik samen met mijn team agile gewerkt met de scrum methode. Deze progressie hebben we opgeslagen met een zenhub bord, waardoor we op het einde van elke week een overzicht hadden van hoeveel van onze opdrachten we afwerkten.
            </Card.Body>          
            <a className="btn btn-primary" href="/downloads/PresentatieAgileEnTesting.pdf"  style={{ margin: 5 }}>
              Eindpresentatie groepswerk
            </a>
          </Card>

        </Col>
        <Col>
          <Card>
            <Card.Title>Projecten stage</Card.Title>
              <Card.Body>
                Op mijn stage heb ik verschillende taken uitgevoerd, van een project in asp.net naar een pc installeren in de meeting room en ben ik zelfs op installatie geweest in Hongarije. In mijn eindrapport vind je hier meer over.

              </Card.Body>
              <br/> <br/>
              <a className="btn btn-primary" href="/downloads/Eindwerk.pdf"  role="button" style={{ margin: 5 }}>
                Eindrapport stage
              </a>
          </Card>
        </Col>
      </CardGroup>
      <Link className="btn btn-primary" to="/cv">
        Mijn CV
      </Link>
    </div>
  );
};
export default Documenten;
