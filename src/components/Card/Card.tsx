import React from "react";
import './Card.css'
import { Employee } from "../../utils/types";
import { BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";
const pug = '/assets/pug.png';
const baseLinkedIn = 'https://linked.in/'
const baseGithub = 'https://github.com/'
const baseTwitterX = 'https://x.com/'


interface Props {
    colleague: Employee
}

const Card: React.FC<Props> = ({colleague}) => {

    return (
        <div className="card r-border">
            <div className="avatar r-border" style={{backgroundImage: `url(${colleague.imagePortraitUrl! ?? pug})`}}>
            </div>
            <div className="cardContent">
                <p className="name"><b>{colleague.name}</b></p>
                <p>{colleague.office && 'Office: ' + colleague.office}</p>
                <div className="icons">
                    {colleague.linkedIn && <a href={baseLinkedIn + colleague.linkedIn!}><BsLinkedin/></a>}
                    {colleague.twitter && <a href={baseTwitterX + colleague.twitter!}><BsTwitterX/></a>}
                    {colleague.gitHub && <a href={baseGithub + colleague.gitHub!}><BsGithub/></a>}
                </div>
            </div>
        </div>
    );
}

export default Card;