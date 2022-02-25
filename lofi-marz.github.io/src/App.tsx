
import './App.css';
import me from  './images/8183486.jpeg';
import { FaGithub, FaBook, FaAt } from 'react-icons/fa';
import {ReactElement} from 'react';
import {IconType} from 'react-icons';

interface Icon {
    icon: ReactElement<IconType>
    link: string;
}

function App() {

    const icons: Icon[] = [
        {icon: <FaGithub/>, link:'https://github.com/lofi-marz'},
        {icon: <FaBook/>, link:'https://github.com/lofi-marz'},
        {icon: <FaAt/>, link:'mailto:othompsonedwards@gmail.com'}
    ];


    return (
        <div className='container centered-flex'>
            <div id="main-box">
                <img id="me" src={me}/>
                <div className="icon-container">
                    {icons.map((i => <a key={i.link} className='social-icon' href={i.link}>{i.icon}</a>))}
                </div>
                <h1 id="name" className="title">{'Hi, I\'m '}<span className="highlight">Omari</span></h1>
            </div>

        </div>
    );
}

export default App;
