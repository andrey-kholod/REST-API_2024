import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './router.js'
dotenv.config()

 
const app = express()

app.use(express.json())

app.use(router)

app.get('/', (req, res) => {
   res.status(200).send('WORKS')
})

const work = async () => {
   await mongoose.connect(process.env.DB_URL)
   try {
         app.listen(5001, (err) => {
               console.log(`Запущен на порту 5000`)
         })
   }
   catch(e) {
      console.log(e)
   }
}

work()