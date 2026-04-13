const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//DATASET
const SIA101 = [
    {
        id: 1,
        name: "jao nara",
        course: "BSIT"
    },

    {
        id: 2,
        name: "ronie nidea",
        course: "BSIT"
    },

    {
        id: 3,
        name: "miro valerio",
        course: "BSIT"
    }
]
// API ENDPOINTS
app.get('/api/students', (req, res) => {
    res.json(SIA101)
})

//UPLOAD A STUDENT
app.post('/api/students', (req, res) => {
    const {name, course} = req.body
    const id = SIA101.length + 1
    const newStudent = {id, name, course}
    SIA101.push(newStudent)

    res.json(201).json({
        message: "Student added successfully",
        student: newStudent
    })
})




//START SERVER
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})