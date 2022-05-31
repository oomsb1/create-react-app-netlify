import { Card, CardGroup} from "react-bootstrap"
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
const HomePagina = () => {
  return (
    //TODO make responsive
    <CardGroup>
      <Col>
        <Card style={{ margin: 5 }}>
          <Card.Title>Mijn CV</Card.Title>
          <Card.Body>
            <Card.Text>
              Als u mijn CV wil lezen of downloaden, klik dan op onderstaande knop
            </Card.Text>
            <Link className="btn btn-primary" to='/cv'>Klik hier om meer over mijn CV te bekijken</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ margin: 5 }}>
          <Card.Title>Contactinformatie</Card.Title>
          <Card.Body>
            <Card.Text>
              Als u mij wil contacteren kan u mijn contactgegevens vinden door op onderstaande knop te klikken.
            </Card.Text>
            <Link className="btn btn-primary" to='/contact'>Klik hier om mij te contacteren</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ margin: 5 }}>
          <Card.Title>Info over mezelf</Card.Title>
          <Card.Body>
            <Card.Text>
              Als u meer over mij te weten wil komen kan u op onderstaande knop klikken.
            </Card.Text>
            <Link className="btn btn-primary" to='/wiebenik'>Klik hier om meer over mij te weten te komen</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ margin: 5 }}>
          <Card.Title>Verslagen en opdrachten</Card.Title>
          <Card.Body>
            <Card.Text>
              Als u documenten wil zien in verband met vorige projecten waar ik in deelnam kan u op onderstaande knop klikken.
            </Card.Text>
            <Link className="btn btn-primary" to='/documenten'>Klik hier om eerdere projecten te zien</Link>
          </Card.Body>
        </Card>
      </Col>
    </CardGroup>
  )
}

export default HomePagina