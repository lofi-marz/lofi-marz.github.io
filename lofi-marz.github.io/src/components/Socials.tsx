import {IconContext, IconType} from 'react-icons';
import React, {ReactElement} from 'react';
import {FaAt, FaBook, FaGithub, FaLinkedin} from 'react-icons/fa';


interface Icon {
    icon: ReactElement<IconType>
    link: string;
}


const Socials: React.FC = () => {

    const icons: Icon[] = [
        {icon: <FaGithub/>, link:'https://github.com/lofi-marz'},
        {icon: <FaBook/>, link:'https://github.com/lofi-marz'},
        {icon: <FaAt/>, link:'mailto:othompsonedwards@gmail.com'},
        {icon: <FaLinkedin/>, link:'https://www.linkedin.com/in/omari-thompson-edwards-b7307b195/'}
    ];
    return (
        <IconContext.Provider value={{size:'0.5em'}}>
            <div className="icon-container">
                {icons.map((i => <a key={i.link} className='social-icon' href={i.link}>{i.icon}</a>))}
            </div>
        </IconContext.Provider>
    );
};

export default Socials;