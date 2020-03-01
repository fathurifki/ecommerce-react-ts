import React from 'react'
import shard from '../../helpers/shard'
import '../../App.css'
const { Card, CardBody, Col, Row, FormInput, Button, InputGroup, CardTitle, CardFooter } = shard


export const LoginCard = () => {
    return (
        <Col className="Login">
            <Row>
                <Card className="Card-login" >
                    <CardBody>
                        <CardTitle className="App">Login</CardTitle>
                        <InputGroup>
                            <FormInput placeholder="Username" />
                        </InputGroup>
                        <InputGroup className="mt-4">
                            <FormInput placeholder="Password" />
                        </InputGroup>
                        <Button outline className="mt-4">Login</Button>
                    </CardBody>
                    <CardFooter>Belum punya akun ? Sign Up</CardFooter>
                </Card>
            </Row>
        </Col>
    )
}