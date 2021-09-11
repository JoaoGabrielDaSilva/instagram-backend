import { createServer } from 'http'
import {Server, Socket} from 'socket.io'
import './database'

import express from 'express'

import routes from './routes'


const app = express()

const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => console.log(`O usuário ${socket.id} se conectou`))

app.use(express.json())
app.use(routes)

export { http, io }