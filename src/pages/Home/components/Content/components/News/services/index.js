import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';

export default function() {
  return [
    {
      text: 'Zorgmarathon',
      date: new Date(2016, 1, 29),
      image: { src: image1, w: 79, h: 79 },
    },
    {
      text: 'VIO erkend als theoretisch goed',
      date: new Date(2016, 1, 29),
      image: { src: image2, w: 79, h: 79 },
    },
    {
      text: 'Commissiebrief over nieuwe Wlz',
      date: new Date(2016, 1, 29),
      image: { src: image3, w: 79, h: 79 },
    },
  ];
}
