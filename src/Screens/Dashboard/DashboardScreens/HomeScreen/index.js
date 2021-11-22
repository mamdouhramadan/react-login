import React from 'react'
import { Statictics } from '../../../../API/StaticData'
import StatictsCard from '../../../../Components/Dashboard/StatictsCard'
import Fade from 'react-reveal/Fade';
import WelcomePanel from '../../../../Components/Dashboard/WelcomePanel';

export default function HomeScreen() {
    return (
        <div className="container">
            <div className="row">
                <Fade>
                    <div className="col-md-6 col-12">
                       <WelcomePanel email="mamdouh@gmail.com" />
                    </div>

                    <div className="col-md-6 col-12">
                        <Fade right cascade>
                            <div className="row">
                                {
                                    Statictics.map((item, index) =>
                                        <div key={index} className="col-6  mb-4">
                                            <div className="text-center">
                                                <StatictsCard title={item.title} icon={item.icon} subTitle={item.subTitle} />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </Fade>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
