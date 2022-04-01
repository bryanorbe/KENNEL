const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');

// If this is production allow static files to be served from the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
//Load the stage for our react app, since it is a single page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, ()=>{
    console.log("App is listening on: http://localhost:" + PORT)
})