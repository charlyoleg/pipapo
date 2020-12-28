const { app, BrowserWindow } = require('electron')
//const path = require('path');
//const url = require('url');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  let base_path = `${__dirname}/../web_ui/dist/`;
  console.log('base_path: ' + base_path);
  let base_url = `file://${__dirname}/../web_ui/dist/`;
  console.log('base_url: ' + base_url);
  win.loadFile('../web_ui/dist/index.html');
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

