
import './App.css';
import Intro from './components/Intro';

function App() {



    /*const [p5Active, setP5Active] = useState(true);

    const getp5 = (): ReactElement | undefined  => {
        if (p5Active) {
            return <MetaballsSketch/>;
        } else {
            return <FaGift onClick={() => setP5Active(true)}/>;
        }
    };*/

    return (
        <Intro></Intro>
    );
}

export default App;
