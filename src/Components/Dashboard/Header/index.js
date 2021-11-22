import React, { useState } from 'react';
import './header.css';
import Button from './../../Button';
import { MenuIcon } from '../../../API/StaticData';
import { MDBTooltip } from 'mdb-react-ui-kit';

export default function Header() {
    const [toggled, setToggled] = useState(false)
    const toggleSidebar = () => {
        setToggled(!toggled)
    }

    return (
        <div className={`dashbaord-header header ${toggled ? 'sidebar-toggled' : ''}`}>

            <div className="left-header">
                <div className="logo-brand">
                    <img src={require('./../../../Images/logo-2.png').default} className="logo-img" alt="" />
                </div>
                <div className="toggle-Button">
                    <Button onClick={() => toggleSidebar()} size="sm" color="white"><i className="fa fa-bars"></i></Button>
                </div>
            </div>
            {/* left-header */}

            <div className="search-field d-flex align-items-center px-4">
                <div className="search-form d-flex align-items-center">
                    <i className="icon fa fa-search"></i>
                    <input type="search" className="form-control" placeholder="Search for Item" />
                </div>
            </div>
            {/* search-field */}

            <div className="right-header d-flex align-items-center ms-auto">
                <ul className="icons-menu d-flex align-items-center list-unstyled m-0 px-4">

                    {
                        MenuIcon.map((item, index) =>
                            <li key={index} className="icon-item menu-item mx-2" >
                                <MDBTooltip tag='a' wrapperProps={{ className: "icon-link", href: item.link }} title={item.title}>
                                    <i className={`icon fa fa-${item.icon}`} title={item.title}></i>
                                </MDBTooltip>
                            </li>
                        )
                    }

                    <li className="ms-3 menu-item">
                        <Button className="log-out" size="sm" color="danger" alt="">
                            <i className="fa fa-sign-out-alt"></i>
                            <span className="ms-2">Logout</span>
                        </Button>
                    </li>
                </ul>
            </div>
            {/* right-header */}
        </div >
    )
}
