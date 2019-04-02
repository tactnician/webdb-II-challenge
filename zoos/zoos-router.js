const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.sqlite3'
    }
}

const db = knex(knexConfig);



// router.get('/', async (req, res) => {
//     try {
//         const zooList = await db('zoos');
//         res.send(200).json(zooList);
//     } catch (error) {
//         res.send(500).json({message:`unable to fetch zoos ${error}`});
//     }
// });

// router.get('./:id' async (req, res) =>{

// });

router.post('/', (req, res) => {
    db('zoos')
        .insert(req.body)
        .then(ids => {
            const [id] = ids
            db('zoos')
                .where({id})
                .first()
                .then(zoo => {
                    res.status(200).json(zoo)
                })
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

// router.put('/:id', (req, res) => {

// })

// router.delete('/:id', (req, res) => {

// })

module.exports = router;