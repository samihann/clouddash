import React, {Component} from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import avatar1 from '../../assets/images/user/avatar-1.jpg';

class AboutMe extends Component {
    render() {
        return (
            <Aux>
                <Row>
                <Col md={6} xl={12}>
                        <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <img src={avatar1} alt="" width="300px"/>
                                    </div>
                                    <div className="col text-center">
                                        <h3>Samihan</h3>
                                        <h5 className="text-c-green mb-0"><span className="text-muted">I am a Graduate Student at UIC.</span></h5>
                                        <p>Please click below to open my github profile/ portfolio website/linkedin</p>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-4">
                                        <a href="https://github.com/samihann"><h6 className="text-center m-b-10"><span className="text-muted m-r-5">Github</span></h6></a>
                                        <p></p>
                                        <div className="progress">
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%', height: '6px'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <a href="https://www.samihann.com/"><h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Portfolio Website</span></h6></a>
                                        <div className="progress">
                                            <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '100%', height: '6px'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <a href="https://www.linkedin.com/feed/"><h6 className="text-center m-b-10"><span className="text-muted m-r-5">Linkedin</span></h6></a>
                                        <div className="progress">
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%', height: '6px'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default AboutMe;