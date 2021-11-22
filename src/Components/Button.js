import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

export default function Button({ size, color, children, onClick, ...rest }) {
    return (
        <MDBBtn onClick={onClick} size={size || 'lg'} color={color || 'success'} {...rest}>{children}</MDBBtn>
    )
}
