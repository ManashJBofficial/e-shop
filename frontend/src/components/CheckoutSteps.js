import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1,step2,step3,step4 }) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                { step1 ? ( <LinkContainer to='/login'>
                                <Nav.Link><strong>Sign In &ensp;&ensp;<i className="fas fa-arrow-circle-right"></i></strong></Nav.Link>
                            </LinkContainer> ) : <Nav.Link disabled>Sign In</Nav.Link> }
            </Nav.Item>

            <Nav.Item>
                { step2 ? ( <LinkContainer to='/shipping'>
                                <Nav.Link><strong>Shipping &ensp;&ensp;<i className="fas fa-arrow-circle-right"></i></strong></Nav.Link>
                            </LinkContainer> ) : <Nav.Link disabled>Shipping</Nav.Link> }
            </Nav.Item>

            <Nav.Item>
                { step3 ? ( <LinkContainer to='/payment'>
                                <Nav.Link><strong>Payment &ensp;&ensp;<i className="fas fa-arrow-circle-right"></i></strong></Nav.Link>
                            </LinkContainer> ) : <Nav.Link disabled>Payment</Nav.Link> }
            </Nav.Item>

            <Nav.Item>
                { step4 ? ( <LinkContainer to='/placeorder'>
                                <Nav.Link ><strong>Place Order</strong></Nav.Link>
                            </LinkContainer> ) : <Nav.Link disabled>Place Order</Nav.Link> }
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
