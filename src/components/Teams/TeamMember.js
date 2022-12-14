import React from 'react';
import styles from './TeamMember.module.css'
import LinkButton from "../UI/LinkButton/LinkButton";
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

function TeamMember(props) {
    return (
        <div className={styles['team__member']}>
            <div className={styles['team__member__image']}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className={styles['team__member_details']}>
                <h3>
                    {props.name}
                </h3>
                <h4>
                    {props.role}
                </h4>
            </div>
            <div className={styles['team__member__link-buttons']}>
                <LinkButton>
                    <span>{<AiFillFacebook/>}</span>
                </LinkButton>
                <LinkButton>
                    <span>{<AiFillLinkedin/>}</span>
                </LinkButton>
                <LinkButton>
                    <span>{<AiFillTwitterCircle/>}</span>
                </LinkButton>
            </div>
        </div>
    );
}

export default TeamMember;