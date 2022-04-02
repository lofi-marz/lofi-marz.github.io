
import './App.css';
import Intro from './components/Intro';
import {ThemeProvider} from 'styled-components';
import theme from './theme';

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
        <ThemeProvider theme={theme}>
            <Intro></Intro>
        </ThemeProvider>

    );
}

export default App;
