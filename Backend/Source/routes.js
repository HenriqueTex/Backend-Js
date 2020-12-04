const express= require('express');

const OngController= require('./controller/OngController')
const IncidentController= require('./controller/IncidenteController')
const ProfilleController= require('./controller/ProfileController')

const connection = require('./Database/connection');

const routes = express.Router();

routes.get('/ongs ', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents:id',IncidentController.delete);

routes.get('/profile', ProfilleController.index);
module.exports=routes;