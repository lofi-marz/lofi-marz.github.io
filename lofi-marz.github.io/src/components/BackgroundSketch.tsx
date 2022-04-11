
import styled from 'styled-components';
import Sketch from 'react-p5';

const BackgroundSketch = styled(Sketch)`
  width: 50%;
  position: absolute;
  z-index: -1;
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
  
  
`;



export default BackgroundSketch;