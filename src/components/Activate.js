import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Activate = () => {

    const [message, setMessage] = useState(null)
    const [email, setEmail] = useState('text')

    const fetchActiveEmail = async () => {

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

    //useEffect( () => {
    //    fetchData()
    //}, [] )

    return (
        <div className="activate" style={Style}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Active an email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                </Form.Group>
                <Button variant="success" block onClick={fetchActiveEmail}>
                    Activate
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

export default Activate
