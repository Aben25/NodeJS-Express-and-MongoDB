const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
    .all('/campsites', (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('will send campsite data');
    })

    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with a description of: ${req.body.description}`)
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported')
    })
    .delete((req, res) => {
        res.end('Deleting all campsites')
    })





module.export = campsiteRouter;