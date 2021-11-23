import React from 'react'
import { Constants } from './../../Constants/index';

export default function StatictsCard({ subTitle, title, icon }) {
    return (
        <div className="card-element border bg-white py-3" style={{ borderRadius: 8 }}>
            <div className="icon my-2">
                <i
                    className={`fa fa-${icon} fa-lg p-3 d-flex justify-content-center align-items-center m-auto`}
                    style={{ background: Constants.Colors.light, borderRadius: 50, width: 50 }}
                ></i>
            </div>
            <div className="text-content">
                <h5 className="card-title text-capitalize ">{title}</h5>
                <p className="card-subtitle text-capitalize m-0">{subTitle}</p>
            </div>
        </div>
    )
}
