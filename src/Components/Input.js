import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

export default function Input({onChange, size, type, placeholder, value,  style, ...rest }) {
    
    return (
        <>
            <div className="mb-4">

                <MDBInput
                    onChange={onChange}
                    label={placeholder || 'Enter Value'}
                    type={type || 'text'}
                    size={size || 'lg'}
                    {...rest}
                />

            </div>

        </>
    )
}
