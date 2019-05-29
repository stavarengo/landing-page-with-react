import Loadable from 'react-loadable';
import express from 'express';
import lang from './middleware/lang';
import serverRenderer from './middleware/renderer';

const PORT = 3000;
const path = require('path');
const app = express();
const router = express.Router();

// other static resources should just be served as they are
router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d', index: false }));

// Route to serve language date for i18n
router.get(/\/lang\/(.+?)\.js/, lang);

// root (/) should always serve our server rendered page
router.use(/.+/, serverRenderer);

// tell the app to use the above rules
app.use(router);

// start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      console.log('Failed!');
      console.log(error);
    } else {
      console.log('Done!\n');
      console.log('Listening on ' + PORT + '...');
    }
  });
});
