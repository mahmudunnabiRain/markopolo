import Activate from "./Activate"
import Deactivate from "./Deactivate"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'

const Admin = () => {
    return (
        <div className="admin" style={Style}>
            <Container fluid >
                    <Row className="justify-content-center">  
                        <Card border="light">
                            <Card.Body className="admin-card">
                                <Tabs defaultActiveKey="activate" id="uncontrolled-tab-example">
                                    <Tab eventKey="activate" title="On-Board">
                                        <Activate />
                                    </Tab>
                                    <Tab eventKey="deactivate" title="Off-Board">
                                        <Deactivate />
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>  
                    </Row>
                                          
            </Container>

        </div>
    )
}

const Style = {
    margin: '20px',

}


export default Admin
