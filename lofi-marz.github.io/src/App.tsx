
import './App.css';
import {FaGithub, FaBook, FaAt, FaLinkedin} from 'react-icons/fa';
import {ReactElement} from 'react';
import {IconType, IconContext} from 'react-icons';

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

    /*const [p5Active, setP5Active] = useState(true);

    const getp5 = (): ReactElement | undefined  => {
        if (p5Active) {
            return <MetaballsSketch/>;
        } else {
            return <FaGift onClick={() => setP5Active(true)}/>;
        }
    };*/

    return (
        <div className='container centered-flex'>
            <section id="main-box">
                <div>
                    <h1 id="name" className="title"><span className='bracket'>{'<'}</span>Hi, I&apos;m <span className="highlight">Omari</span><span className='bracket'>{'/>'}</span></h1>
                    <IconContext.Provider value={{size:'2rem'}}>
                        <div className="icon-container">
                            {icons.map((i => <a key={i.link} className='social-icon' href={i.link}>{i.icon}</a>))}
                        </div>
                    </IconContext.Provider>

                </div>
            </section>
        </div>
    );
}

export default App;
