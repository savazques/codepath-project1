import express from 'express';
import mobRouter from './routes/mobs.js'

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

app.use('/mobs', mobRouter)

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

const PORT = process.env.PORT || 3001

app.listen(PORT,() => {
    console.log(`Server Listening on http://localhost:${PORT}`)
})