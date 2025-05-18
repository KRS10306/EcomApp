import express from 'express'
import { findProducts } from '../controller/product.controller.js'

export const productRouter = express.Router()

productRouter.get('/products',findProducts)