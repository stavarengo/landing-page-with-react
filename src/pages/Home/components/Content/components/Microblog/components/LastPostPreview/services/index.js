import image1 from './assets/image1.svg';
import coverPicture from './assets/cover.png';

export default function() {
  return {
    author: {
      name: 'Ria de Vries',
      picture: { src: image1, w: 57, h: 57 },
    },
    post: {
      description: 'Nieuwe campagne CuraNed gisteren van start gegaan',
      coverPicture: coverPicture,
      date: new Date(2016, 8, 12, 11, 10),
    },
  };
}
