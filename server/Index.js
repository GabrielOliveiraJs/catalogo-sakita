import express, { json } from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import multer from 'multer'
import bodyParser from 'body-parser'

const app = express()
const upload = multer({ dest: '../public/images/products/' })
app.use(express.json())
app.use(bodyParser.json())

const options = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}
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
    const { name, category, description, code, smallImage, bigImage, link, brand } = req.body
    const q = `INSERT INTO products (product_name, product_category, product_description, product_code, product_image_small, product_image_big, product_link, product_brand) VALUES ('${name}','${category}','${description}','${code}','${smallImage}','${bigImage}','${link}', '${brand}')`

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return json(data)
    })
})

app.get('/products/:id', (req, res) => {
    const productId = req.params.id
    const query = `SELECT * FROM products WHERE productID = ${productId}`

    db.query(query, (error, results) => {
        if (error) {
            console.error('Erro ao buscar o produto:', error);
            return res.status(500).json({ error: 'Erro ao buscar o produto' })
        }

        if (results.length === 0) {
            console.error('Produto não encontrado')
            return res.status(404).json({ error: 'Produto não encontrado' })
        }

        const product = results[0]
        res.status(200).json(product)
    })
})

app.put('/products/:id', (req, res) => {
    const productId = req.params.id
    const { product_name, product_category, product_description, product_code, product_image_small, product_image_big, product_link, product_brand } = req.body
    const query = `
        UPDATE products SET product_name = '${product_name}', product_category = '${product_category}', product_description = '${product_description}', product_code = '${product_code}', product_image_small = '${product_image_small}', product_image_big = '${product_image_big}', product_link = '${product_link}', product_brand = '${product_brand}'
        WHERE productID = ${productId}
    `

    db.query(query, (error, results) => {
        if (error) {
            console.error("Erro ao atualizar o produto:", error)
            return res.status(500).json({ error: "Erro ao atualizar o produto" })
        }
        res.status(200).json({ message: `Produto com ID ${productId} atualizado com sucesso` })
    })
})

app.delete('/products/:id', (req, res) => {
    const productId = req.params.id
    const query = `DELETE FROM products WHERE productID = ${productId}`

    db.query(query, (error, results) => {
        if (error) {
            console.error("Erro ao excluir o produto:", error)
            return res.status(500).json({ error: "Erro ao excluir o produto" })
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Produto não encontrado" })    
        }
        res.status(200).json({ message: `Produto com ID ${productId} excluído com sucesso` })
    })
})

app.listen(8800, () => {
    console.log('Server conectado na porta 8800')
})