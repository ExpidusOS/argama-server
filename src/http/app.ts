import express from 'express'
import OAuthServer from 'express-oauth-server'
import winston from '../providers/winston'
import { notFoundHandler, errorHandler } from './middleware/error'

const app = express()

// const oauth = new OAuthServer({
//	model: new OAuthModel(di)
// })

app.use((req, res, next) => {
	winston.debug(`receving request from ${req.protocol}://${req.hostname}${req.originalUrl} (${req.method})`)
	next()
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(notFoundHandler)
app.use(errorHandler)

export default app
