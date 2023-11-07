const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRoute = require('./dog');
const temperamentRoute = require('./temperament');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dog', dogRoute);
router.use('/temperament', temperamentRoute);

module.exports = router;
