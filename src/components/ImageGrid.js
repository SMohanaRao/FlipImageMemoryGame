import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Flower from '../Images/Flower1.jpg'

const ImageGrid = () => {
    return (
        <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={Flower} />
            </Card>
          </Col>
        ))}
      </Row>
    )
}

export default ImageGrid