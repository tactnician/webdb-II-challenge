const router = require('express').Router();
const knex = require('knex');

cons knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.sqlite3'
    }
}

const db = knex(knexConfig);



router.get('/', async (req, res) => {

});

router.get('./id' async (req, res) =>{

});

router.post('/', async (req, res) => {

});

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;