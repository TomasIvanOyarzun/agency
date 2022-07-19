import express from 'express'
import router from './routes/index.js'

 const app = express()

//app.use(express.json())
 app.use(express.urlencoded({extended: true}))


// pug on
 app.set('view engine' ,'pug')
  // add router

 app.use(express.static('public'))
 app.use((req, res, next)=>{
    const year = new Date()
    
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes'
     next()
 })
 app.use(router)
 

export default app

