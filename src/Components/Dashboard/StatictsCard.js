import React from 'react'
import { Constants } from './../../Constants/index';

export default function StatictsCard({ subTitle, title, icon }) {
    return (
        <div className="card-element border bg-white py-3" style={{borderRadius:8}}>
            <div class="icon my-2">
                <i
                    className={`fa fa-${icon} fa-lg p-3 d-flex justify-content-center align-items-center m-auto`}
                    style={{ background: Constants.light, borderRadius: 50, width: 50 }}
                ></i>
            </div>
            <h5 className="text-capitalize">{title}</h5>
            <p className="text-capitalize m-0">{subTitle}</p>
        </div>
    )
}
