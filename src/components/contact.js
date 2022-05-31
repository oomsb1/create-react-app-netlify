import { Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
      <FormConst/>
      <a style={{margin:5}} href="tel:+32499841253">Als u mij telefonisch wil contacteren, kan u mij op het nummer +32499841253 bereiken.</a>
    </div>
  );
};
const FormConst = () => {
  return (
    <Form style={{margin: 5}}
    action="mailto:bram.ooms7@gmail.com?subject=<Onderwerp>&body=<Bericht>">
    <Form.Group className="mb-3 w-50" >
      <Form.Label>Email adres</Form.Label>
      <Form.Control type="email" placeholder="Vul hier uw email in" required />
      <Form.Label>Onderwerp</Form.Label>
      <Form.Control as="textarea" placeholder="Vul hier het onderwerp in" required/>
      <Form.Label>Bericht</Form.Label>
      <Form.Control as="textarea" placeholder="Vul hier het bericht in" style={{height: '250px'}} required />
    </Form.Group>
    <Button variant="primary" type="submit" mail>
Verzenden
</Button>
  </Form>
  )
}

export default Contact;
