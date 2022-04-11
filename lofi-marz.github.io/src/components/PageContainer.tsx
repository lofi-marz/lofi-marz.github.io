
import styled from 'styled-components';

export const PageContainer = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;


export const CenteredPageContainer = styled(PageContainer)`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const PaddedPageContainer = styled(PageContainer)`
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  padding: 20px;
    
`;

