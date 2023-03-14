import * as React from 'react';
import {
  AccordionContainer,
  AccordionGalleryContainer,
  AccordionGalleryWrap,
  AccordionItem,
  AccordionSlide,
  AccordionWrapper,
} from '../AccordionImageGallery/Styles';

export const AccordionImageGallery = ({}) => {
  return (
    <AccordionContainer>
      <AccordionWrapper>
        <AccordionSlide>
          <AccordionGalleryContainer>
            <AccordionGalleryWrap>
              <AccordionItem />
              <AccordionItem />
              <AccordionItem />
            </AccordionGalleryWrap>
          </AccordionGalleryContainer>
        </AccordionSlide>
      </AccordionWrapper>
    </AccordionContainer>
  );
};
