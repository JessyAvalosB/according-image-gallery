import * as React from 'react';
import './style.css';
import { AccordionImageGallery } from './components/AccordionImageGallery/AccordionImageGallery';

export default function App() {
  const images = [
    'https://i.pinimg.com/564x/76/4a/c6/764ac6cc35d60bf4646ed1bb0f4e55f3.jpg',
    'https://i.pinimg.com/564x/36/04/0a/36040a878e3f2bf73ae6f1b71fba252c.jpg',
    'https://i.pinimg.com/564x/76/0d/73/760d73cd89300fe3172a3304f7a122fb.jpg',
    'https://i.pinimg.com/564x/12/46/a1/1246a16afcfe3146117957d5313d4637.jpg',
    'https://i.pinimg.com/564x/da/6e/dc/da6edc1c1c308afa161fb615cf742051.jpg',
    'https://i.pinimg.com/564x/e2/ba/5a/e2ba5ad43b45da8f61e733446184822f.jpg',
  ];
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Accordion Image Gallery</h1>
      <AccordionImageGallery images={images} />
    </div>
  );
}
