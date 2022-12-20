const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5001;
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys')
require('./models/user')
require('./models/events')


const connectionParams = {
  useNewUrlParser: true,
  //   useFindAndModify: false,
  useUnifiedTopology: true,
};
mongoose.connect(MONGOURI, connectionParams)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("error", err);
  });
app.use(express.json());

//routes
app.use(cors());
app.use(require('./routes/auth'))
app.use(require('./routes/event'))

app.listen(PORT, () => { console.log('listening', `${PORT}`) });
