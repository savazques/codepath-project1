import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mobData from '../data/minecraft_mobs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Serve all mobs data
router.get('/', (req, res) => {
    res.status(200).json(mobData);
});


router.get('/:mobId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/mob.html'))
  })

export default router;

