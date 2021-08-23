import React from 'react';
import "../css/team.css";

const Team = () => {
    return (
        <div className="team-container">
            <p className="meet-team">Meet our team</p>
            <div className="team-div">
                <div className="team-member">
                    <div className="team-member-image">
                        <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg" alt="" />
                    </div>
                    <div className="team-member-detail">
                        <div className="team-member-name">Alexa North</div>
                        <div className="team-member-title">Executive Chairman</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image">
                        <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg" alt="" />
                    </div>
                    <div className="team-member-detail">
                        <div className="team-member-name">Andrew Milne</div>
                        <div className="team-member-title">Head of Marketing</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image">
                        <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" alt="" />
                    </div>
                    <div className="team-member-detail">
                        <div className="team-member-name">Tim Matthew</div>
                        <div className="team-member-title">Head of Design</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image">
                        <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg" alt="" />
                    </div>
                    <div className="team-member-detail">
                        <div className="team-member-name">Stephanie Hill</div>
                        <div className="team-member-title">Brand Strategy</div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Team;
