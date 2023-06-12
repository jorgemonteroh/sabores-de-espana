const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
try {
    app.post('/pay', async(req, res) => {
        console.log(req.body.token);
        await Stripe.charges.create({
            source: req.body.token.id,
            amount: req.body.amount,
            currency: 'EUR'
        })
    })
} catch (error) {
    console.log(error)
}


console.log('Holaa');

app.listen(port, () => {
    console.log(`Servidor corriendo en el Puerto ${port}`);
})