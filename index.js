import server from './src/app.js'
import {db} from './src/db.js'

import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001

db.authenticate().then(()=>{
    server.listen(PORT , ()=>{
        console.log(`server running on the port ${PORT_LOCAL}`)
    })
})
.catch(error => console.log(error))