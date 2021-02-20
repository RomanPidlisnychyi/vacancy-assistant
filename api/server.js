const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./routers/userRouter');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

app.use('/auth', userRouter);

app.listen(PORT, () => {
  console.log('Server started listening on port', PORT);
});
