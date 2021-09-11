import React from 'react';
import detail from '../../../image/1.jpg';
import AppLayout from '../../AppLayout/AppLayout';
import './NewsDetail.css'

const NewsDetail = () => {
    return (
        <AppLayout>
        <div className="container">
            <div className="detailNews">
                <div className="title">
                    <h4>Crime & Justice</h4>
                    <h1>Case filed over Savar jewellery shops heist; cash, valuables worth Tk 1cr looted</h1>
                    <p>Daily News Report</p>
                </div>
                <div className="img">
                    <img src={detail} alt="" />
                </div>
                <div className="description">
                    <p>A case was filed in connection with yesterday's robbery in Savar, in which 17 jewellery shops were looted.

                        Monoranjan Rajbongshi, general secretary of Noarhat Bazar Gold Traders Association and owner of Shubho Jewellers, filed the case with Ashulia Police Station around 9pm yesterday, reports our correspondent.

                        Abdullah Hil Kafi, additional superintendent of police of Savar Circle (Dhaka district), told our correspondent that a robbery case has been filed. Police are trying to identify and arrest the group of robbers.

                        According to the case statement, 40 unidentified individuals have been charged with looting Tk 17,60,000 in cash, 126 tola of gold, and 912 tola of silver from 17 shops -- totaling Tk 1,02,32,000 in value.

                        Monoranjan Rajbongshi told The Daily Star that the case was filed after the amount of looted valuables was calculated, in consultation with all affected shop owners.</p>
                </div>
            </div>
        </div>
        </AppLayout>
    );
};

export default NewsDetail;