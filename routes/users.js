const express = require('express')
const { v4: uuidv4 } = require('uuid')
const router = express.Router()
const { db } = require('../config/dbConfig')


router.get('/', (req, res) => {
    const sqlQuery = 'SELECT * FROM user'
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


router.get('/:id', (req, res) => {
    const param = req.params
    const sqlQuery = `SELECT * FROM user WHERE user_id = ${param.id}`
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


router.post('/', (req, res) => {
    const payload = req.body
    const sqlQuery = `INSERT INTO user(user_name, user_email, user_password) VALUE('${payload.user_name}', '${payload.user_email}', '${payload.user_name}')`
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


router.put('/:id', (req, res) => {
    const payload = req.body
    const sqlQuery = `UPDATE user SET user_name = ? WHERE user_id = ?`
    
    db.query(sqlQuery, [payload.user_name, req.params.id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

router.delete('/:email', (req, res) => {
    //const param = req.params
    //const payload = req.body
    const sqlQuery = `DELETE FROM user WHERE user_email = ?`
    db.query(sqlQuery, [req.params.email], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router


// const dataUser = [
//     {
//         id: 1,
//         name: 'Rahmat',
//         roles: 'user'
//     }
// ]

// router.get('/', (req, res) => {
//     res.send(dataUser)
// })

// router.post('/', (req, res) => {
//     //console.log(req.body)
//     const payload = req.body
//     dataUser.push(payload)
//     res.send('data berhasil ditambah')
// })

// router.get('/:id', (req, res) => {
//     const param = req.params
//     const data = dataUser.filter((item) => item.id == param.id)
//     res.send(data)
// })

// router.delete('/:id', (req, res) => {
//     const param = req.params
//     const data =  dataUser.filter((item) => item.id != param.id)
//     res.send(data)
// })

// router.put('/:id', (req, res) => {
//     const param = req.params
//     const newName = req.body.name
//     const newUsers = dataUser.map((item) => {
//         return item.id == param.id ? { ...item, name: newName } : item
//     })

//     //console.log(newUsers)
//     res.send(newUsers)
// })


