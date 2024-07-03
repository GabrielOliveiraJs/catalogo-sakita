import express, { json } from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import multer from 'multer'

const app = express()

const upload = multer({ dest: '../public/images/products/' })

app.use(express.json())

const options = {
    origin: 'http://localhost:5173', // Replace with your client's domain
    methods: 'GET,POST,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  };
app.use(cors(options))

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

app.get('/categories', (req, res) => {
    const q = "SELECT * FROM categories"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get('/users', (req, res) => {
    const q = 'SELECT * FROM users'
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post('/api/products', upload.single('productImage'), async (req, res) => {
    const { name, category, description, code, image, link, price } = req.body
    const q = `INSERT INTO products (product_name, product_category, product_description, product_code, product_image1, product_image2, product_image3, product_image4, product_link, product_price) VALUES ('${name}','${category}','${description}','${code}','${req.file.path}','','','','${link}','${price}')`

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return json(data)
    })
})

app.listen(8800, () => {
    console.log('Server conectado na porta 8800')
})