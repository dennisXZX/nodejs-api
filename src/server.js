import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'

// Declare an app from Express
const app = express()

// Set up routings
app.get('/', (req, res) => {
    res.send('hello world')
})

export default app
