const { app, shell, BrowserWindow } = require('electron')
//const path = require('path');
//const url = require('url');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'web_ui/img/pipapo_favicon_256x256.png',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
    }
  })

  //let base_path = `${__dirname}/../web_ui/dist/`;
  //console.log('base_path: ' + base_path);
  //let base_url = `file://${__dirname}/../web_ui/dist/`;
  //console.log('base_url: ' + base_url);
  win.loadFile('web_ui/dist/index.html');
  //win.loadFile('../web_ui/dist/index.html');
  //win.loadURL(`file://${__dirname}/../web_ui/dist/index.html`);
  //win.loadURL(base_url + 'index.html', {
  //  //baseURLForDataURL: base_url
  //  });
  //win.loadURL(url.format({
  //  pathname: path.join(base_path, 'index.html'),
  //  protocol: 'file:'
  //  }));
  //console.log(__dirname);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


// Fix the issue of link to external pages
app.on('web-contents-created', (e, contents) => {
    contents.on('new-window', (e, url) => {
      e.preventDefault();
      shell.openExternal(url);
    });
    contents.on('will-navigate', (e, url) => {
      if (url !== contents.getURL()) {
        e.preventDefault();
        shell.openExternal(url);
      }
    });
});

