const axios = require('axios');
const fs = require('fs');
const path = require('path');

// URL of the JSON data on the server
const DATA_URL = 'http://90.89.133.173/home/wal/wal-database-process/all_tables.json';

// Path to the local JSON file
const LOCAL_JSON_PATH = path.join(__dirname, '../Config/data.json');

// Function to fetch data from the server and update the local JSON file
async function updateLocalData() {
  try {
    // Fetch data from the server
    const response = await axios.get(DATA_URL);
    const data = response.data;

    // Write the data to the local JSON file
    fs.writeFileSync(LOCAL_JSON_PATH, JSON.stringify(data, null, 2), 'utf8');
    console.log('Local data updated successfully.');
  } catch (error) {
    console.error('Error updating local data:', error);
  }
}

// Call the function to update the local data
updateLocalData();