import mipNotifications from './assets/mip-notifications.png';
import topdesk from './assets/topdesk.png';
import youforce from './assets/youforce.png';

export default function() {
  return [
    {
      image: { src: youforce, w: 43, h: 43 },
      text: 'Youforce',
    },
    {
      image: { src: mipNotifications, w: 51, h: 49 },
      text: 'MIP-meldingen',
    },
    {
      image: { src: topdesk, w: 69, h: 47 },
      text: 'Topdesk',
    },
  ];
}
