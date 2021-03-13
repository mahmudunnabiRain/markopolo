import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Deactivate = () => {
    return (
        <div className="deactivate" style={Style}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Deactivate an email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="danger" type="submit" block>
                    Deactivate
                </Button>
            </Form>
        </div>
    )
}


const Style = {
    color: 'Black',
    paddingTop: '30px',

}

export default Deactivate