import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

export default function Button({ disabled, size, color, children, onClick, ...rest }) {
    return (
        <MDBBtn disabled={disabled} onClick={onClick} size={size || 'lg'} color={color || 'success'} {...rest}>
            {/* Check if {disable = true} , Show Loader if not , Show Button Text  */}
            {disabled &&
                <span className="spinner-border spinner-border-sm text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                </span>
            }
            <span> {disabled || children}</span>
        </MDBBtn>
    )
}
