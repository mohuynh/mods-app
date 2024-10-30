'use client';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import UserInfo from './userInfoSection';
//import { useRouter } from 'next/router';

export default function Homepage() {
    //const router = useRouter()

    const handleSubmit = (event) => {
        //event.preventDefault()
        localStorage.removeItem("jwt-token")
        alert("Déconnexion réussie")
        //router.push("/")
    }

    return (
        <Container className='justify-content-center text-center mt-3 w-50'>
            <Card border='primary' bg="primary">
                <Card.Body>
                    <Card.Title>Bienvenue sur mon projet</Card.Title>
                    <Card.Link href={"/mods"} style={{ textDecoration: 'none', color: 'pink' }}>Accèder aux mods</Card.Link>
                    <Card.Link href={"/modders"} style={{ textDecoration: 'none', color: 'pink' }}>Accèder aux modders</Card.Link>
                    <Card.Link href={"/signup"} style={{ textDecoration: 'none', color: 'pink' }}>Inscription</Card.Link>
                    <Card.Link href={"/signin"} style={{ textDecoration: 'none', color: 'pink' }}>Connexion</Card.Link>
                    <button onClick={handleSubmit}>Déconnexion</button>
                    <UserInfo></UserInfo>
                </Card.Body>
            </Card>
        </Container>
    )
}