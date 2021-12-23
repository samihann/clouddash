import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {SiMicrosoftazure} from "react-icons/si"
import Aux from "../hoc/_Aux";

class VirtualMachine extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={12}>
                        <Card>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-10">
                                        <h3 className="f-w-400 d-flex align-items-center text-center m-b-0">Virtual Machines</h3>
                                        
                                    </div>
                                    <div className='col-2'>
                                    <SiMicrosoftazure style={{fontSize: "2em"}}/>
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
                                <Card.Title as="h5">Create Virtual Machine</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row d-flex">
                                    <div className="col-12">
                                        <h5>This component will be able to create Virtual Machine by interacting with Azure Cloud using API through a custom python script. </h5>
                                        <h6>Additonally the user will be able to specify a custom template to be setup in VM. The option to create template can be below.</h6>
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
                                                <Form.Label>Subscription</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Subscription" />
                                                <Form.Text className="text-muted">
                                                    Please enter the Subscription you want the VM to be in. 
                                                </Form.Text>
                                            </Form.Group>

                                            

                                            <Form.Group controlId="formBasic">
                                                <Form.Label>Virtual Machine Name</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Virtual Machine Name" />
        
                                            </Form.Group>

                                            <Form.Group controlId="formBasic">
                                                <Form.Label>VM Size</Form.Label>
                                                <Form.Control type="email" placeholder="Enter VM Size" />
                                                <Form.Text className="text-muted">
                                                    Please enter the Size for Virtual Machines.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasic">
                                                <Form.Label>Image Name</Form.Label>
                                                <Form.Control type="email" placeholder="Enter OS Image to be installed" />
        
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
                                        <Form.Group controlId="formBasic">
                                                <Form.Label>Resource Group</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Resource Group" />
                                                <Form.Text className="text-muted">
                                                    Please enter the Resource Group you want the VM to be in. 
                                                </Form.Text>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Select SSH public Key"
                                                name="SSH public Key"
                                                id="sshkey"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Select Password"
                                                name="Password"
                                                id="password"
                                            />
                                            <Form.Text className="text-muted">
                                                Selected Credentials will be mailed to the user.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Tags</Form.Label>
                                            <Form.Control type="text" placeholder="Text" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Select Template</Form.Label>
                                            <Form.Control as="select">
                                                <option>Template 1</option>
                                                <option>Template 2</option>
                                                <option>Template 3</option>
                                                <option>Template 4</option>
                                                <option>Template 5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Enter Commands</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                            <Form.Text className="text-muted">
                                                Please enter commands to run on VMs once it is initialized.
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

export default VirtualMachine;