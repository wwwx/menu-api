/**
 * Required External Modules
 */
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { itemsRouter } from './items/items.router';
import { errorHandler } from './middleware/error.middleware';
import { NotFoundHandler } from './middleware/not-found.middleware';

dotenv.config();




/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1)
}

const PORT: number = ~~process.env.PORT
const app = express()


/**
 *  App Configuration
 */
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api/menu/items', itemsRouter)

app.use(errorHandler)
app.use(NotFoundHandler)

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})
