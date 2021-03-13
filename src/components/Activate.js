import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Activate = () => {
    return (
        <div className="activate" style={Style}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Active an email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="success" type="submit" block>
                    Activate
                </Button>
            </Form>
        </div>
    )
}


const Style = {
    color: 'Black',
    paddingTop: '30px',
}

export default Activate
