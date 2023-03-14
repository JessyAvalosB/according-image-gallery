import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const AccordionWrapper = styled.div`

`;

export const AccordionSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccordionGalleryContainer = styled.div`
  padding: 75px 0;
  marging: 0 auto;
  width: 900px;
`;

export const AccordionGalleryWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 85vh;

  & div:first-of-type {
    background-image: url(https://i.pinimg.com/564x/76/4a/c6/764ac6cc35d60bf4646ed1bb0f4e55f3.jpg)
  }

  & div:nth-of-type(2) {
    background-image: url(https://i.pinimg.com/564x/36/04/0a/36040a878e3f2bf73ae6f1b71fba252c.jpg)
  }

  & div:nth-of-type(3) {
    background-image: url(https://i.pinimg.com/564x/76/0d/73/760d73cd89300fe3172a3304f7a122fb.jpg)
  }
`;

export const AccordionItem = styled.div`
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: .8s ease;

  &:hover {
    flex: 7;
  }
`;
