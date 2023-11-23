import express from 'express';
import bestSellerRouter from './router/bestSeller.js';
import realTimeBestSellerRouter from './router/realTimeBestSeller.js';
import dayBestSellerRouter from './router/dayBestSeller.js';
import monthWeekBestSellerRouter from './router/monthWeekBestSeller.js';
import hotPriceBestSellerRouter from './router/hotPriceBestSeller.js';
import steadySellerRouter from './router/steadySeller.js';
import cors from 'cors';

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use('/', bestSellerRouter);
app.use('/realTime', realTimeBestSellerRouter);
app.use('/day', dayBestSellerRouter);
app.use('/monthweek', monthWeekBestSellerRouter);
app.use('/hotPrice', hotPriceBestSellerRouter);
app.use('/steady', steadySellerRouter);


app.listen(8000);