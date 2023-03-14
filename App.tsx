import * as React from 'react';
import './style.css';
import { AccordionImageGallery } from './components/AccordionImageGallery/AccordionImageGallery';

export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Accordion Image Gallery</h1>
      <AccordionImageGallery />
    </div>
  );
}
