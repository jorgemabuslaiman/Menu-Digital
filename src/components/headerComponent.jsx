import Card from 'react-bootstrap/Card';
import '../App.css'

export const HeaderComponent = () => {
  return (
    <div>
      <Card className="bg-transparent border-0">
        <Card.Img variant="top" className="imagen_principal"/>
        <Card.Body>
          <Card.Text>
            <p className='texto_titulo'>Bar Pepitos</p>
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
  )
}
