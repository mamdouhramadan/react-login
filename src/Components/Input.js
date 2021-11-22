import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

export default function Input({ size, type, placeholder, value, onClick, onChange, style, ...rest }) {
    const handleOnChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <div className="mb-4">

                <MDBInput onChange={(e) => handleOnChange(e)} label={placeholder || 'Enter Value'} type={type || 'text'} size={size || 'lg'} />
            
            </div>

        </>
    )
}
