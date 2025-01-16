const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

// Configuration SSH
const sshConfig = {
  host: '90.89.133.173',
  port: 22,
  username: 'wal',
  privateKey: fs.readFileSync('C:\\Users\\cedri\\.ssh\\id_rsa'),
};

// Chemin du fichier JSON sur le serveur distant
const REMOTE_JSON_PATH = '/home/wal/wal-database-process/all_tables.json';

// Chemin du fichier JSON local
const LOCAL_JSON_PATH = path.join(__dirname, '../config/data.json');

// Fonction pour mettre à jour le fichier JSON local
function updateLocalData() {
  const conn = new Client();
  conn.on('ready', () => {
    console.log('Client :: ready');
    conn.sftp((err, sftp) => {
      if (err) throw err;
      sftp.readFile(REMOTE_JSON_PATH, (err, data) => {
        if (err) throw err;
        fs.writeFileSync(LOCAL_JSON_PATH, data, 'utf8');
        console.log('Local data updated successfully.');
        conn.end();
      });
    });
  }).connect(sshConfig);
}

// Appeler la fonction pour mettre à jour les données locales
updateLocalData();

//cd c:/INSA/S9/APP/wal-app/Screen
// node DataBaseManagement.js
// DataBase in config is updated