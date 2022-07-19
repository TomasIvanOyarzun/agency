import { Viaje } from "../models/viajes.js"
import { Testimonial } from "../models/testimoniales.js"

const paginaInicio =  async(req, res) =>{
    // consultar 3 viajes del model Viaje

     const promiseDb = []
     promiseDb.push(Viaje.findAll({limit : 3}))
     promiseDb.push(Testimonial.findAll({limit : 3}))
  try {

     const result = await Promise.all(promiseDb)
     res.render('inicio' , {
        pagina : 'Inicio',
        clase: 'home',
        viajes : result[0],
        testimoniales : result[1]
    })
}
   catch (error) {
     console.log(error)
  }
    
}

const paginaNosotros = (req, res)=>{
    res.render('nosotros' , {
        pagina : 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
    
    res.render('Viajes' ,{
        pagina : 'Proximos Viajes...',
        viajes
    })
}

const paginaDetalleViaje = async (req , res) =>{
      
    const {viaje} = req.params
        
    try {
       const result = await Viaje.findOne({
        where : {
            slug : viaje
        }
       }) 

       res.render('viaje', {
        pagina : 'Informacion Viaje',
        result
       })
      
    } catch (error) {
       console.log(error) 
    }
}

const paginaTestimoniales = async (req, res) => {
    
    try {
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            pagina : 'Testimoniales',
            testimoniales
        })
        
    } catch (error) {
        console.log(error)
    }
}


export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
    
}