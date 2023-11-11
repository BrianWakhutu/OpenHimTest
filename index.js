'use strict'

import express from 'express'
import { registerMediator } from 'openhim-mediator-utils'
import mediatorConfig from './mediatorConfig.json'
const app  = express()

app.all('*', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server Listening to port 3000....')
})

const openhimConfig = {
    username : 'root@openhim.org',
    password : 'Xkemricdc@123',
    apiURL: 'https://openhim-core:8080',
    trustSelfSigned: true
}
registerMediator(openhimConfig, mediatorConfig, err => {
    if(err){
        console.error('Check your Config ', err)
        process.exit(1);
    }
})