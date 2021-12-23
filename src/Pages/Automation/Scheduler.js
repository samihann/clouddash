import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {BsClockFill} from "react-icons/bs"
import Aux from "../../hoc/_Aux";
import TimePicker from 'react-time-picker';


class Scheduler extends React.Component {
    state = {
        value: "00:00"
    };

    render() {
        return (
            <Aux>
            <Row>
                <Col md={6} xl={12}>
                    <Card>
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-10">
                                    <h3 className="f-w-400 d-flex align-items-center text-center m-b-0">Instance Scheduler</h3>
                                
                                </div>
                                <div className='col-2'>
                                    <BsClockFill style={{fontSize: "2em"}}/>
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
                            <Card.Title as="h5">Create a Schedule</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row d-flex">
                                <div className="col-12">
                                    <h5>This component will assist the user to create custom schedule to start/shutdown the compute resources. </h5>
                                    <h6>This presents a comprehensive cost saving module.</h6>
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
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Select Resource</Form.Label>
                                        <Form.Control as="select">
                                            <option>VM 1</option>
                                            <option>VM 2</option>
                                            <option>VM 3</option>
                                            <option>VMSS 1 Instance 1</option>
                                            <option>VMSS 1 Instance 2</option>
                                        </Form.Control>
                                    </Form.Group>


                                    <Form.Group controlId="formBasic">
                                        <Form.Label>Server Start Time</Form.Label>
                                        <br/>
                                        <TimePicker
                                            value={this.state.value}
                                        />
                                        <Form.Text className="text-muted">
                                                Please enter the start time for this particular instance.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasic">
                                        <Form.Label>Server Shutdown Time</Form.Label>
                                        <br/>
                                        <TimePicker
                                            value={this.state.value}
                                        />
                                        <Form.Text className="text-muted">
                                                Please enter the stop time for this particular instance.
                                        </Form.Text>
                                    </Form.Group>
                                                                           

                                        <Form.Group controlId="formBasic">
                                            <Form.Label>Repeated on</Form.Label>
                                            <br/>
                                            <Form.Check
                                            label="Monday"
                                            name="group1"
                                            type="checkbox"
                                            />
                                            <Form.Check
                                            label="Tuesday"
                                            name="group1"
                                            type="checkbox"
                                            />
                                            <Form.Check
                                            label="Wednesday"
                                            name="group1"
                                            type="checkbox"
                                            />
                                            <Form.Check
                                            label="Thursday"
                                            name="group1"
                                            type="checkbox"
                                            />
                                            <Form.Check
                                            label="Friday"
                                            name="group1"
                                            type="checkbox"
                                            />
                                            <Form.Check
                                            label="Saturday"
                                            name="group1"
                                            type="checkbox"
                                            />
                                            <Form.Check
                                            label="Sunday"
                                            name="group1"
                                            type="checkbox"
                                            />
    
                                        </Form.Group>
                                        
                                        <Button variant="primary">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                <Form.Group controlId="text">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                        <Form.Text className="text-muted">
                                            Please enter name for the following schedule.
                                        </Form.Text>
                                    </Form.Group>
                                
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows="15" />
                                        <Form.Text className="text-muted">
                                            Please Enter Description for the following Schedule. 
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

export default Scheduler;