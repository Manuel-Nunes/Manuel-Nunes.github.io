import { CustomImage } from 'SharedComp';
import styled from 'styled-components';

import ProfilePic from '../assets/ProfilePic.jpg';

const BigDiv = styled.div`
  display: flex;
  background-color: #229da8;
  height: 80vh;
  width: 50vw;
  border-radius: 0 0 25rem 0;
  overflow: hidden;
`;

export function Home(){
  return (
    <>
      <BigDiv>
        <CustomImage $src={ProfilePic} $height='50%' $width='50%'/>
        {/* <CustomImage /> */}
      </BigDiv>
    </>
  );
}

export default Home;