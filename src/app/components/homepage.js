import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


export default function Homepage() {

    return (<>
        <Container className='justify-content-center text-center mt-3 w-50'>
            <Card>
                <Card.Body>
                    <Card.Title>Bienvenue sur mon projet</Card.Title>
                    <Card.Link href={"/mods"} >Mods</Card.Link>
                    <Card.Link href={"/modders"} >Modders</Card.Link>
                    <Card.Link href={"/signup"}>Sign Up</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    </>
    )
}