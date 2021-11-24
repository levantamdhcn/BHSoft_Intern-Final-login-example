import React,{ useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../stores/index'

const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()
    const { login } = bindActionCreators(userActions, dispatch)

    const errorMessage:string = useSelector((state: any) => state.loginState.message)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login(email,password)
    }

    return (
        <Form className="d-grid gap-2" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg" >
                <span className="">Login</span>
            </Button>
            <Form.Text>{errorMessage}</Form.Text>
        </Form>
    )
}

export default LoginForm
