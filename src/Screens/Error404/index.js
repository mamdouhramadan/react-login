import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <div className="container py-5">

            <div className="w-75 mx-auto text-center mt-5">
                <img className="mw-100" alt="Error 404" src={require('./../../Images/error404.png').default} />
                <h4 className="my-4"> Oops! This Page Is Not Found.</h4>
                <Link className="btn btn-lg btn-primary mt-2" to="/" >Back To Home</Link>
            </div>
        </div>
    )
}
