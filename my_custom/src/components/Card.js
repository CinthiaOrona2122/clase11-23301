import { Suspense } from 'react';
import Card from 'react-bootstrap/Card';

const CardUnit = (props) => {
  return (
    <Suspense>
      <Card className='card'>
        <Card.Img 
        variant="top" 
        src={props.image} 
        alt='Imagen extraida de la web'
        width={props.width}
        height={props.height}
         />
        <Card.Body>
          <Card.Title className="fw-bold">{props.title}</Card.Title>
          <Card.Text className="text-left">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>    
    </Suspense>
  )
}

export default CardUnit