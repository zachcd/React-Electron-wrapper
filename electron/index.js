import {app, BrowserWindow} from 'electron';
import path from 'path';
import url from 'url';
import {enableLiveReload} from 'electron-compile';

enableLiveReload({strategy: 'react-hmr'});


let window;


function createHost() {

   win = new BrowserWindow({frame: false, fullscreen: true});
   win.show();

   win.on('closed', () => {
      win = null
    })
}

export default createHost;
