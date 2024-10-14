'use client';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Homepage() {
    return (
        <Container className='justify-content-center text-center mt-3 w-25'>
            <Card border='primary' bg="primary">
                <Card.Body>
                    <Card.Title>Bienvenue sur mon projet</Card.Title>
                    <Card.Link href={"/mods"} style={{ textDecoration: 'none', color: 'pink' }}>Accèder aux mods</Card.Link>
                    <Card.Link href={"/modders"} style={{ textDecoration: 'none', color: 'pink' }}>Accèder aux modders</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}