import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import logger from 'console';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
  logger.log(`Running on PORT ${PORT}`);
});
