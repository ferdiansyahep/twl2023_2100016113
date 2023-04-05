import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function WithHeaderExample() {
  const navigate = useNavigate()

  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button  className="btn-block z-depth-2" onClick={()=>navigate('/about')}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;