import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {HiTemplate} from "react-icons/hi"
import Aux from "../hoc/_Aux";

class Template extends React.Component {
    render() {
        return (
            <Aux>
            <Row>
                <Col md={6} xl={12}>
                    <Card>
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-10">
                                    <h3 className="f-w-400 d-flex align-items-center text-center m-b-0">Template</h3>
                                                
                                </div>
                                <div className='col-2'>
                                    <HiTemplate style={{fontSize: "2em"}}/>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{height: '7px'}}>
                                <div className="progress-bar progress-a-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Create Template for compute resources</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row d-flex">
                                <div className="col-12">
                                    <h5>This component will be able to create a template that user will be able to setup compute resources. </h5>
                                    <h6>This will help user to reduce repetative effort as setting up Linux server with the required software can be automated.</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Col md={6} xl={12}>
                        <Card>
                            <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group controlId="formBasic">
                                            <Form.Label>Template Name</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Template Name" />
                                            <Form.Text className="text-muted">
                                                Please enter the template name
                                            </Form.Text>
                                        </Form.Group>

                      
                                        <Form.Group controlId="formBasicChecbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button variant="primary">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Enter Software</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                        <Form.Text className="text-muted">
                                            Please enter software with version that need to be installed on the server. 
                                            <p>Eg. python:3.8, java:17</p>
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Aux>
        );
    }
}

export default Template;