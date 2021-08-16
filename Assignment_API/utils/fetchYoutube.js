const { google } = require('googleapis');

console.log("key", process.env.GOOGLE_TOKEN);
function fetchYoutube(query="mast magan") {
  return  google.youtube('v3').search.list({
        key: process.env.GOOGLE_TOKEN,
        q: query,
        part: "snippet"
    })
}
module.exports = fetchYoutube;