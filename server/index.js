import dotenv from 'dotenv'
dotenv.config();

import epxress from 'express';
import moviesRouter from './src/features/movies/movies.routes.js';
import { connectDB } from './src/cofiguration/db.connection.js';

const app = epxress();
const port = process.env.PORT;


app.use(epxress.json({extends:true}));
app.use(epxress.urlencoded({extended:true}));
app.use('/api/movies', moviesRouter);

/** CONNECTION DB AND LISTENING*/ 
connectDB()
.then((connectedDb) => {
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
    console.log(`connected to DB :: ${connectedDb.name}`);
  });
})
.catch((error) => console.log(`${error} did not connect`));