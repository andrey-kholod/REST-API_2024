import User  from './schema.js'

class Controller {
   async createName(req, res) {
      try {
         const {name} = req.body
         
         const user = await User.create({name})
         res.status(201).json(user)
      }
      catch(e) {
         res.status(400).json({error: e})
      }
   }

   async findAll(req, res) {
      try {
         const users = await User.find({})

         res.status(200).json(users)
      }
      catch(e) {
         res.status(400).json({error: e})
      }
   }
}

export default new Controller()