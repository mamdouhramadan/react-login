import React from 'react'
import { DashboardLinks } from '../../../API/StaticData'

export default function NavMenu() {
    return (
        <div className="nav-menu">
            <ul className="nav-links list-unstyled">
                {
                    DashboardLinks.map((item, index) =>
                        <li className="list-item" key={index}>
                            <a
                                href="#!"
                                className={`nav-link ${item.active ? 'active' : ''}`}
                                alt=""
                            >
                                <i className={`fa fa-${item.icon}`}></i>
                                <span className="mx-3">{item.title}</span>
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
