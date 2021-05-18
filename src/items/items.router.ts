/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express'
import * as ItemService from './items.service'

/**
 * Router Definition
 */
export const itemsRouter = express.Router()

/**
 * Controller Definitions
 */
itemsRouter.get('/', async (request: Request, response: Response) => {
    try {
        throw Error('Oops! something went wrong')
        const items = await ItemService.findAll()
        response.status(200).send(items)
    } catch (e) {
        response.status(500).send(e.message)
    }
})


// GET items

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id