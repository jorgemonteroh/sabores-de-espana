const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
require('dotenv').config() 
const port = process.env.PORT || 8000


const productosArray = [
  /*Galicia*/
    {
      _id: 1,
      title: "Cerveza 1906 Reserva",
      isNew: true,
      oldPrice: "9.99",
      price: 6.99,
      description: "Pack de 6 (33cl.)",
      category: "Bebidas",
      image: "https://tucervezaadomicilio.com/wp-content/uploads/2020/11/reserva-especial-1906.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        _id: 2,
        title: "Cerveza 1906 Red Vintage",
        isNew: true,
        oldPrice: "9.99",
        price: 6.99,
        description: "Pack de 6 (33cl.)",
        category: "Bebidas",
        image: 'https://vinosconsolera.com/wp-content/uploads/1906-red-vintage.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        _id: 3,
        title: "Cerveza Estrella Galicia",
        isNew: false,
        price: 6.99,
        description: "Pack de 6 (33cl.)",
        category: "Bebidas",
        image: "https://distribucionesmarpin.es/GM000740/images/products/14444/es/700241.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      _id: 4,
      title: "Albariño 3000 Cepas 2020",
      isNew: false,
      price: 19.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
      category: "Vinos",
      image: "https://bodegasbordino.com/media/t/files/VIB-232.jpg.1920x1920_q85.jpg"
    },
    /*Asturias*/
    {
      _id: 5,
      title: "Fabes Asturianas IGP",
      isNew: false,
      price: 16.99,
      description: "1kg",
      category: "Legumbres",
      image: "https://www.casabartuelo.es/wp-content/uploads/2020/10/fabas-10Kg-casa-bartuelo.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        _id: 6,
        title: "Pomarina Natural",
        isNew: true,
        oldPrice: "19.99",
        price: 14.99,
        description: "Pack de 6 (70cl.)",
        category: "Bebidas",
        image: 'https://www.sidraelgaitero.com//resources/products/Sidras-naturales/elgaitero-productosweb-sidras-pomarina-1000.png?auto=compress&cs=tinysrgb&w=600'
    },
    {
        _id: 7,
        title: "Sidra Natural Espumosa",
        isNew: false,
        price: 15.99,
        description: "Pack de 6 (75cl.)",
        category: "Bebidas",
        image: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202111/10/00118730600170____6__600x600.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 8,
      title: "Chorizo a la Sidra",
      isNew: false,
      price: 9.99,
      description: "1kg.",
      category: "Carnes",
      image: "https://www.sidraelgaitero.com//resources/products/alimentacion/elgaitero-productosweb-alimentacion-chorizo-a-la-sidra-1000.png?auto=compress&cs=tinysrgb&w=600"
    },
    /* Castilla y León */
    {
      _id: 9,
      title: "Queso Monte Enebro",
      isNew: false,
      price: 23.99,
      description: "Queso de La Adrada ganador de varios premios al mejor queso del mundo. 1kg",
      category: "Quesos",
      image: "https://distribucionesabad.com/public/images/catalog405-img-queso-montenebro.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        _id: 10,
        title: "Vino tinto roble Ribera",
        isNew: true,
        oldPrice: "13.99",
        price: 8.99,
        description: "Un Roble con alma de Crianza. Frutal y versátil, amable, untuoso y largo. Es fresco y, a la vez, es carnoso y estructurado. Elaborado solo con nuestra mejor uva tempranillo. Elaborado en Roa (Burgos) por Bodegas Raíz y Quesos Páramo de Guzmán S.L.",
        category: "Vinos",
        image: 'https://market.tierradesabor.es/images/products/1600/1600_1416195_1.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        _id: 11,
        title: "Raíz Rosado D.O. Ribera",
        isNew: false,
        price: 15.99,
        description: "El mejor rosado de la Ribera del Duero, aúna la frescura de un blanco y la estructura y la untuosidad de un tinto. Su personalidad y su intensidad lo desmarcan de los rosados tradicionales.",
        category: "Bebidas",
        image: 'https://market.tierradesabor.es/images/products/1600/1600_1416193_1.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 12,
      title: "Morcillas de Sotillo",
      isNew: false,
      price: 13.99,
      description: "1kg.",
      category: "Carnes",
      image: "https://market.tierradesabor.es/images/products/1600/1600_1420986_1.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    /* Madrid */
    {
      _id: 13,
      title: "Aceite Laguna Villar",
      isNew: true,
      oldPrice: 33.99,
      price: 21.99,
      description: "5L. Aceitunas de cultivo ecológico seleccionadas y con una cuidadosa recolección de la misma, revisando en todo momento el grado de madurez en cada una de las fincas.",
      category: "Aceites",
      image: "https://www.lagunamadrid.com/wp-content/uploads/2020/05/LAGUNA-VILLAR-ECOLOGICO-5-Litros-2-550x818.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      _id: 14,
        title: "Variedad salsas Juana",
        isNew: false,
        price: 16.75,
        description: "Incluye salsa brava de 4 sabores. Original - Trufa & Miel - Mango & Curry - Cilantreo & Chile", 
        category: "Salsas",
        image: 'https://m.media-amazon.com/images/I/516Xw4kvXGL._AC_.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 15,
      title: "Queso Campo R. Semicurado",
      isNew: true,
      oldPrice: 34.99,
      price: 26.99,
      description: "Queso puro de oveja. Peso aproximado 3,4 Kg.",
      category: "Quesos",
      image: 'https://quesoscamporeal.com/wp-content/uploads/2020/09/SEMICURADO-PURO-OVEJA-PIEZA-3-Kg..png?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 16,
      title: "Queso Campo R. Curado",
      isNew: false,
      price: 25.99,
      description: "Queso puro de oveja. Peso aproximado 3,4 Kg.",
      category: "Quesos",
      image: 'https://quesoscamporeal.com/wp-content/uploads/2020/09/CURADO-PURO-OVEJA-PIEZA-2-Kg.png?auto=compress&cs=tinysrgb&w=600'
    },
    /* Andalucia */
    {
      __id: 17,
      title: "Aceite Oliva V.E Merced",
      isNew: true,
      oldPrice: 34.99,
      price: 26.99,
      description: "5L. Aceite de oliva virgen elaborado a partir de las variedades de aceituna, Coupage, Hojiblanca , Arbequina picual",
      category: "Aceites",
      image: 'https://www.hechoenandalucia.net/2285-large_default/aceite-de-oliva-virgen-extra-manzanillo-hojiblanco-molino-la-merced-sin-filtrar.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 18,
      title: "Anís Machaquito Dulce",
      isNew: false,
      price: 10.95,
      description: "1L. 35º Alcohol", 
      category: "Bebidas",
      image: 'https://licotecaonline.com/1530-modalsize/anis-machaquito-dulce.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 19,
      title: "Salmorejo Cordobés",
      isNew: false,
      price: 14.99,
      description: "Pack de 4. (500ml)",
      category: "Otros",
      image: 'https://www.hechoenandalucia.net/2516-large_default/salmorejo-cordobes-despensa-la-nuestra.jpg'
    },
    {
      _id: 20,
      title: "Miel de Flores Apilore",
      isNew: false,
      price: 7.99,
      description: "Miel natural de abejas sin tratamiento de Ecija. Bote de cristal de 1 Kg.",
      category: "Otros",
      image: 'https://www.hechoenandalucia.net/2225-large_default/miel-de-flores-apilore-500-grs.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    /* Otros */
    {
      __id: 21,
      title: "Salsa de Mojo Picón",
      isNew: false,
      price: 6.99,
      description: "Típica salsa canaria para sazonar y enriquecer platos de carne, pescados, verduras, sancochos, entre otros. Peso 400gr",
      category: "Salsas",
      image: 'https://argodeyfortaleza.com/wp-content/uploads/2020/08/mojo-picon-picante-2.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 22,
      title: "Catalán Juve Camp Brut",
      isNew: false,
      price: 16.95,
      description: "Destinado inicialmente al consumo exclusivo de la familia Juvé, Reserva de la Familia es el Cava Brut Nature Gran Reserva más vendido del mundo.", 
      category: "Bebidas",
      image: 'https://www.mantequeriaandres.com/tienda/1963-large_default/catalan-juve-camp-brut-nature.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      _id: 23,
      title: "Mermelada Fresa artesana",
      isNew: false,
      price: 5.99,
      description: "Mermelada elaborada con Fresas Frescas de Temporada de Sabores del Guijo. Peso 500gr.",
      category: "Otros",
      image: 'https://www.saboraextremadura.es/tienda/1426-large_default/mermelada-de-fresa-sabores-del-guijo-400-grs.jpg'
    },
    {
      _id: 24,
      title: "Jamón Teruel Gran Aragón",
      isNew: false,
      price: 109.99,
      description: "Peso pieza entera 8 kg. Secado y madurado de forma natural al aire de las montañas de Teruel durante 18 meses y curado de forma artesanal.",
      category: "Jamón",
      image: 'https://jamonaragon.com/wp-content/uploads/2022/02/Jamon-DOP-Teruel-Pata-300x450.jpg?auto=compress&cs=tinysrgb&w=600'
    },
]

app.get('/', (req, res) => {
  res.send(productosArray)
})

app.listen(port, () => {
  console.log(`API corriendo en puerto: ${port}`)
})