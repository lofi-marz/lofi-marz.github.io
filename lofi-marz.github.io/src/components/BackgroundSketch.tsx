
import styled from 'styled-components';
import Sketch from 'react-p5';

const BackgroundSketch = styled(Sketch)`
  width: clamp(1rem, 500px, 30rem);
  position: absolute;
  z-index: -1;
  &canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;



export default BackgroundSketch;