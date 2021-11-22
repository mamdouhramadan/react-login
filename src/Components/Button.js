import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

export default function Button({ size, color, children, ...rest }) {
    return (
        <MDBBtn size={size || 'lg'} color={color || 'success'} {...rest}>{children}</MDBBtn>
    )
}
