import React from 'react'
import { NavigationBar } from '../../components/Navbar/Navbar'
import shard from '../../helpers/shard'
import '../../App.css'

const { Col, Row, Card, CardBody, CardHeader, CardTitle, FormRadio } = shard

function Dashboard() {
    return (
        <div>
            <NavigationBar />
            <Row>
                <Col style={{ maxWidth: '300px', marginLeft: '2%', marginTop: '5%' }}>
                    <Card>
                        <CardHeader>Filter</CardHeader>
                        <CardBody style={{ padding: 30, }}>
                            <CardTitle>Sort</CardTitle>
                            <FormRadio>Ascending</FormRadio>
                            <FormRadio>Descending</FormRadio>
                            <CardTitle>Gender</CardTitle>
                            <FormRadio>Woman</FormRadio>
                            <FormRadio>Man</FormRadio>
                            <CardTitle>Price</CardTitle>
                            <FormRadio>Less Than $29</FormRadio>
                            <FormRadio>$29 - $39</FormRadio>
                            <FormRadio>$39 - $49</FormRadio>
                            <FormRadio>$49 - $89</FormRadio>
                            <FormRadio>Greater Than $89</FormRadio>
                        </CardBody>
                    </Card>
                </Col>
                <Col style={{ marginLeft: '2%', marginTop: '5%', maxWidth: '70%' }}>
                    <Card>
                        <CardHeader>Content</CardHeader>
                        <CardBody>
                            <p>1. Leave Out</p>
                            <p>2. Leave Out</p>
                            <p>3. Leave Out</p>
                            <p>4. Leave Out</p>
                            <p>5. Leave Out</p>
                            <p>6. Leave Out</p>
                            <p>7. Leave Out</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard