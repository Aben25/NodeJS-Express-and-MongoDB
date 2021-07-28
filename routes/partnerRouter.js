const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the  partner to you');
    })
    .post((req, res) => {
        res.end(`Will add the  partner: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on / partner');
    })
    .delete((req, res) => {
        res.end('Deleting all  partner');
    });
    partnerRouter.route('/:partnerId')
    .get((req, res) => {
        res.end(`Will send details of the partners: ${req.params.partnerId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /partnerss/${req.params.partnerId}`);
    })
    .put((req, res) => {
        res.write(`Updating the partners: ${req.params.partnerId}\n`);
        res.end(`Will update the partners: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting partners: ${req.params.partnerId}`);
    });

module.exports = partnerRouter;