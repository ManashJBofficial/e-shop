import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod} from '../actions/cartActions'


const PaymentScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress)
    {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch =useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
        <CheckoutSteps step1 step2 step3/>
            <h1>Payment Methods</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-3'>
                    <Form.Label as='legend'>
                        Select Method
                    </Form.Label>
                
                <Col>
                    <Form.Check type='radio' label='PayPal or Credit Card' id='PaypPal' 
                    name='paymentMethod' value='PayPal' checked onChange={ (e)=>setPaymentMethod(e.target.value) } >
                    </Form.Check>

                    <Form.Check type='radio' label='Stripe' id='Stripe' 
                    name='paymentMethod' value='Stripe' onChange={ (e)=>setPaymentMethod(e.target.value) } >
                    </Form.Check>
                </Col>
            </Form.Group>
                <Button type="submit" variant='primary' className='my-3' >Next</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
