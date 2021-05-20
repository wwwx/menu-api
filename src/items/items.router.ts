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

// GET items
itemsRouter.get('/', async (request: Request, response: Response) => {
    try {
        // test error
        // throw Error('Oops! something went wrong')
        const items = await ItemService.findAll()
        response.status(200).send(items)
    } catch (e) {
        response.status(500).send(e.message)
    }
})



// GET items/:id
itemsRouter.get('/:id', async (request: Request, response: Respnose) => {
    try {
        const id = Number(request.params.id)
        const item: Item = await ItemService.find(id)
        if (item) {
            return response.status(200).send(item)
        }

        response.status(404).send('item not found')

    } catch(e) {
        response.status(500).send(e.message)
    }
})

// POST items

// PUT items/:id

// DELETE items/:id
