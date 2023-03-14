import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  height: 100%;
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
`;

export const AccordionItem = styled.div<{ bgImage: string }>`
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  background-image: url(${({ bgImage }) => bgImage});
  transition: .8s ease;

  &:hover {
    flex: 7;
  }
`;
