import * as React from 'react';
import {
  AccordionContainer,
  AccordionGalleryContainer,
  AccordionGalleryWrap,
  AccordionItem,
  AccordionSlide,
  AccordionWrapper,
} from '../AccordionImageGallery/Styles';

export interface AccordionImageGalleryProps {
  images: string[];
}

export const AccordionImageGallery = ({
  images,
}: AccordionImageGalleryProps) => {
  return (
    <AccordionContainer>
      <AccordionWrapper>
        <AccordionSlide>
          <AccordionGalleryContainer>
            <AccordionGalleryWrap>
              {images.map((image, i) => (
                <AccordionItem key={i} bgImage={image} />
              ))}
            </AccordionGalleryWrap>
          </AccordionGalleryContainer>
        </AccordionSlide>
      </AccordionWrapper>
    </AccordionContainer>
  );
};
