
const electron = require('electron');

function nw() {
  const options = {
    type: 'info',  // none/info/error/quetion/warning
    title: 'Koizumi.app',
    message: 'Error is error',
    // detail: '説明文',
    buttons: ['OK','OK','Quit'],
    cancelId: -1
  };
  let select = electron.dialog.showMessageBoxSync(options);

  if(select !== 2){
    nw();
  }
  else{
    electron.app.quit();
  }
}

electron.app.on('ready', nw);