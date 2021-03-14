import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Deactivate = () => {

    const [message, setMessage] = useState(null)
    const [email, setEmail] = useState('text')

    const fetchDeactiveEmail = async () => {

        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(mailformat))
        {
            setMessage("Please provide a valid email address.")
            return
        }
        //const results = await axios.get('/.netlify/functions/helloWorld')
        const results = await axios.post('/.netlify/functions/activeEmail', { email : email })
        setMessage(results.data.message)
    }

    return (
        <div className="deactivate" style={Style}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Deactivate an email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={ (e) => setEmail(e.target.value) }/>
                </Form.Group>

                <Button variant="danger" block onClick={fetchDeactiveEmail}>
                    Deactivate
                </Button>
            </Form>
            <p style={messageStyle}>{message}</p>
        </div>
    )
}


const Style = {
    color: 'Black',
    paddingTop: '30px',

}

const messageStyle = {
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '0px',

}

export default Deactivate