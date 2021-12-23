import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import logo from "../assets/images/logo.png"
import {GrInProgress} from "react-icons/gr"

class HomePage extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={12}>
                        <Card>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-7">
                                        <h3 className="f-w-300 d-flex align-items-center text-center m-b-0"> Welcome to CloudDash</h3>
                                        <br/>
                                        <p>CloudDash is a comprensive dashboard facilitating user by interacting with multiple cloud providers though a single portal. </p>
                                        
                                    </div>

                                    <div className="col-5 text-center">
                                        <img style={{width: '200px'}} alt="" src={logo}/>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                    
                                </div>
                            
                            </Card.Body>
                            <Card.Footer>
                            
                            <div className='col-12 text-center'>
                            <h5><b>This is a demo application showcasing the just frontend structure for the application. The project still in progress <GrInProgress/> and features are being added regularly.</b></h5>
                            </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default HomePage;