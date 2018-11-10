import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import logger from 'console';
import express, { Router } from 'express';

const app = express();
const router = Router();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => res.json({
  message: 'Welcome to SendIt API',
}));

app.listen(PORT, () => {
  logger.log(`Running on PORT ${PORT}`);
});

export default app;
