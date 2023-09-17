import { ContainerFCC, CustomImage } from 'SharedComp';
import styled from 'styled-components';

import ProfilePic from '../assets/ProfilePic.jpg';

const BigDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--profileCardColor);
  height: 45rem;
  width: 25rem ;
  border-radius: 0 0 15rem 0;
  overflow: hidden;
  align-items: center;
  box-sizing:border-box;
  z-index: 1;
`;

const InfoWrapper = styled.div`
  background-color: var(--infoBlockColor);
  height: 45rem;
  /* height: 48rem; */
  width: 28rem;
  left: 0;
  position: absolute;
  z-index: 0;
  border-radius: 0 0 15rem 0;
  /* border-radius: 0 0 18rem 0; */

  display: flex;
  flex-direction: column;
  align-items: end;
  &:hover{
    width: 43rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

export function Home(){
  return (
    <Wrapper>
      <BigDiv>
        <ContainerFCC style={
          {
            width:'25rem',
            aspectRatio:'1/1'
          }
        }>
          <CustomImage $src={ProfilePic} $size='20rem' $bordeRaduis='5rem'/>
        </ContainerFCC>
        <h1>Manuel A Nunes</h1>
      </BigDiv>
      <InfoWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

export default Home;