import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ImageGrid = ({images}) => {
    return (
        <Row xs={2} md={4}>
        {images.map((image, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={image} />
            </Card>
          </Col>
        ))}
      </Row>
    )
}

export default ImageGrid