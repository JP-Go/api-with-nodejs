import express from 'express';
// import path from 'node:path'; // to send files
const app = express();
const port = process.env.PORT || 5000;

// Static files
// use middleware
app.use(express.static('./static'));

// app.get('/', (_, res) => {
//   res
//     .status(200)
//     .sendFile(path.resolve(path.dirname('.'), 'navbar-app', 'index.html'));
// });
//
app.all('*', (_, res) => {
  res.status(404).send('not found.');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
