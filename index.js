import Electron from './electron';
import Phone from './phone';
import server from './server';

Electron.start();
Phone.start();
server.start();
