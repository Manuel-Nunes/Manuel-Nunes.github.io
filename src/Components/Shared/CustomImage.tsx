import styled from 'styled-components';

interface styledImageProps {
  $width?: string
  $height?: string
  $src?: string
  $margin?: string
  $padding?: string
}

export const CustomImage = styled.div<styledImageProps>`
  ${
    ({
      $height,
      $src,
      $width,
      $margin,
      $padding
    }) => `
      ${ $height && `height: ${ $height }; `}
      ${ $src && `background-image: url(${ $src }); `}
      ${ $width && `width: ${ $width }; `}
      ${ $margin && `margin: ${ $margin }; `}
      ${ $padding && `padding: ${ $padding }; `}
    `
  }
  background-position: center;
  background-size: 100% 100%; 
`;

CustomImage.defaultProps = {
  $height : '100%',
  $width: '100%',
  $src: '',
  $margin: '',
  $padding: ''
};


export default CustomImage;


// export function CustomImage() {
//   return (
//     <p>Hello image</p>
//   );
// }

// export default CustomImage;