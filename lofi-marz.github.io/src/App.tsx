
import './App.css';
import Intro from './components/Intro';
import theme from './theme';
import GlobalStyle from './components/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import About from './components/About';
import Root from './components/Root';

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
            <GlobalStyle></GlobalStyle>
            <Root>
                <Intro/>
                <About/>
            </Root>
        </ThemeProvider>

    );
}

export default App;
