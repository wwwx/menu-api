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
itemsRouter.post('/', async (request: Request, response: Response) => {
   try {
        const item: BaseItem = request.body
        console.log(item)
        const newItem = await ItemService.create(item)
        response.status(201).json(newItem)
   } catch(e) {
        response.status(500).send(e.message)
   } 
})

// PUT items/:id
itemsRouter.put('/:id', async (request: Request, response: Response) => {
    try {
        const { id } = request.params
        const itemUpdate: BaseItem = request.body
        const existingItem = await ItemService.find(id)

        console.log(id, itemUpdate)
        
        if (existingItem) {
            const updatedItem = await ItemService.update(id, itemUpdate)
            return response.status(200).send(updatedItem)
        }
        
        const newItem = await ItemService.create(itemUpdate)
        response.status(201).send(newItem)
    } catch (e) {
        response.status(500).send(e.message)
    }
})

// DELETE items/:id
itemsRouter.delete('/:id', async (request: Request, response: Response) => {
    try {
        const { id } = request.params
        console.log('Delete ', id)
        await ItemService.remove(id)
        response.sendStatus(204)
    } catch(e) {
        resonse.status(500).send(e.message)
    }
})







