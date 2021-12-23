import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import tools from "../../assets/images/tools.png"

class Docs extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={12}>
                        <Card title='Documentation'>
                            <h5>The main objective of this project to facilitate users by interating with multiple cloud providers (eg. Azure, AWS, Oracle Cloud) through a single portal.</h5>
                            <p>The users would be able to view complete view of their infrastucture though a single dashboard eliminating the need of keeping trck of multiple portals.</p>
                            <hr/>
                            <div className='theme-bg2 text-white p-3'>
                            <p><b>Please note this demo is just a front end demonstration of how the website would look like (Just for Azure). As the website is static, it is not connected to any backend server.</b></p>
                            <p>Rest of the components are work in progress and will be updated soon.</p>
                            </div>
                            
                            <hr/>
                            <p> Through this dashboard a user should be able to -</p>
                            <p> - Create a new account through sign-up page</p>
                            <p> - Create new resources</p>
                            <p> - View the status of all the resources across multiple cloud providers.</p>
                            <p> - Create a template for all the required software instalation on the server during its creation.</p>
                            <p> - Schedule Start/Stop of the server at a specified date & time enabling a cost saving function.</p>
                            <p> - Schedule a custom script to be executed on the server at a designated time & date on the server. </p>
                            
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card title='Tools Used' isOption>
                            <img src={tools} width="100%"/>
                            
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Docs;