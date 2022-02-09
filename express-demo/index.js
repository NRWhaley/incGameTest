const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());
const courses = [
    {id: 3, name: 'course3'},
    {id: 1, name: 'course1'}
]

app.get('/', (req, res) => {
    res.send('Hello!')
});

app.get('/api/courses', (req,res) =>{
    res.send([3,5,8]);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.')
    res.send(course)
})

app.post('/api/courses', (req,res) => {
    const { error } = validateCourse(req.body);
    if(error) {
        res.send(400).send(error.details[0].message)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.')

    const { error } = validateCourse(req.body);
    if(error) {
        res.send(400).send(error.details[0].message)
        return;
    }
    
    course.name = req.body.name;

    res.send(course);

})

function validateCourse(course) {

    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(req.body, schema);
}
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))