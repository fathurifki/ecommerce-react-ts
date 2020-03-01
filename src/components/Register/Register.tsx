import React from 'react'
import shard from '../../helpers/shard'
import '../../App.css'
const { Card, CardBody, Col, Row, FormInput, Button, InputGroup, CardTitle, CardFooter } = shard


export const RegisterCard = () => {
    return (
        <Col className="Login">
            <Row>
                <Card className="Card-login" >
                    <CardBody>
                        <CardTitle className="App">Register</CardTitle>
                        <InputGroup>
                            <FormInput placeholder="Email" />
                        </InputGroup>
                        <InputGroup className="mt-4">
                            <FormInput placeholder="Username" />
                        </InputGroup>
                        <InputGroup className="mt-4">
                            <FormInput placeholder="Password" />
                        </InputGroup>
                        <Button outline className="mt-4" >Sign Up</Button>
                    </CardBody>
                </Card>
            </Row>
        </Col>
    )
}