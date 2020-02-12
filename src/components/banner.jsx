import React from 'react';
import BannerImg from "../../assets/image/Banner-S32K-Homepage.jpg"

export const Banner = () => {
    return (
        <div id="Banner" className="section">
            <div className="row">
                <div className="col s12">
                    <img src={BannerImg} />
                    <div className="article">
                        <h2>The NXP Smarter World Podcast</h2>
                        <p>Learn about the vehicle data revolution and how changes in automotive networks make it possible.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}