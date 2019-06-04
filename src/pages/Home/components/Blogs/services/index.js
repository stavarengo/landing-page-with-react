import image1 from './assets/image1.png';

export default function() {
  return {
    author: {
      name: 'Jacob Cobijn',
      picture: { src: image1, w: 57, h: 57 },
    },
    post: {
      title: 'Samenleving',
      description: 'Het hebben van een partner die positief in het leven staat, is mogelijk goed voor de....',
      date: new Date(2016, 3, 12),
    },
  };
}
