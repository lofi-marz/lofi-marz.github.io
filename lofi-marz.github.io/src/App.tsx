
import './App.css';
import me from  './images/8183486.jpeg';
import { FaGithub, FaBook, FaAt, FaLinkedin } from 'react-icons/fa';
import {ReactElement} from 'react';
import {IconType} from 'react-icons';
import MetaballsSketch from './sketches/metaballs-sketch';

interface Icon {
    icon: ReactElement<IconType>
    link: string;
}



function App() {

    const icons: Icon[] = [
        {icon: <FaGithub/>, link:'https://github.com/lofi-marz'},
        {icon: <FaBook/>, link:'https://github.com/lofi-marz'},
        {icon: <FaAt/>, link:'mailto:othompsonedwards@gmail.com'},
        {icon: <FaLinkedin/>, link:'https://www.linkedin.com/in/omari-thompson-edwards-b7307b195/'}
    ];


    return (
        <div className='container centered-flex'>
            <div id="main-box">
                <img id="me" src={me}/>
                <div>
                    <h1 id="name" className="title">{'Hi, I\'m '}<span className="highlight">Omari</span></h1>
                    <div className="icon-container">
                        {icons.map((i => <a key={i.link} className='social-icon' href={i.link}>{i.icon}</a>))}
                    </div>
                </div>
            </div>
            <MetaballsSketch></MetaballsSketch>
        </div>
    );
}

export default App;
