import React from 'react'
import { Container , Badge } from 'react-bootstrap'

function Header() {
    return (
        <div>

            <Container className="pt-4">
            <h1> <Badge variant="secondary">Pending Exports</Badge>{' '} </h1>
                <hr></hr>
            </Container>
        </div>
    )
}

export default Header