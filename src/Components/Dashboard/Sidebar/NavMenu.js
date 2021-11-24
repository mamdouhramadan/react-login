import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { DashboardLinks } from '../../../API/StaticData'
import { logout_user } from './../../../Redux/Actions/index';
import { useNavigate } from 'react-router';

const NavMenu = (props) => {
    const goTo = useNavigate();
    
    const logout = () => {
        props.logout_user()
        goTo('/')
    }

    return (
        <div className="nav-menu">
            <ul className="nav-links list-unstyled">
                {
                    DashboardLinks.map((item, index) =>
                        <li className="list-item" key={index}>
                            <Link
                                to="/dashboard"
                                className={`nav-link ${item.active ? 'active' : ''}`}
                                alt=""
                            >
                                <i className={`fa fa-${item.icon}`}></i>
                                <span className="mx-3">{item.title}</span>
                            </Link>
                        </li>
                    )
                }
                <li className="list-item" >
                    <Link
                        to="/"
                        className={`nav-link`}
                        alt=""
                        onClick={()=>logout()}
                    >
                        <i className={`fa fa-power-off`}></i>
                        <span className="mx-3">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default connect(null, { logout_user })(NavMenu);