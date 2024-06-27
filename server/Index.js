import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '33112020',
    database: 'catalogo_sakita'
})

app.get('/products', (req, res) => {
    const q = "SELECT * FROM products"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get ('/categories', (req, res) => {
    const q = "SELECT * FROM categories"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800,  () => {
    console.log('Server conectado na porta 8800')
})