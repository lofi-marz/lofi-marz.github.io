import {IconContext, IconType} from 'react-icons';
import React, {ReactElement} from 'react';
import {FaAt, FaBook, FaGithub, FaLinkedin} from 'react-icons/fa';
import IconLink from './IconLink';
import styled from 'styled-components';


interface Icon {
    icon: ReactElement<IconType>
    link: string;
}


const Wrapper = styled.div`
    position: absolute;
    bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 25px;
`;

const Socials: React.FC = () => {

    const icons: Icon[] = [
        {icon: <FaGithub/>, link:'https://github.com/lofi-marz'},
        {icon: <FaBook/>, link:'https://github.com/lofi-marz'},
        {icon: <FaAt/>, link:'mailto:othompsonedwards@gmail.com'},
        {icon: <FaLinkedin/>, link:'https://www.linkedin.com/in/omari-thompson-edwards-b7307b195/'}
    ];
    return (
        <IconContext.Provider value={{size:'5em'}}>
            <Wrapper>
                {icons.map((i => <IconLink key={i.link} href={i.link}>{i.icon}</IconLink>))}
            </Wrapper>
        </IconContext.Provider>
    );
};



export default Socials;