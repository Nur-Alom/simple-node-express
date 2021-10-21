// 1.
const express = require('express');
const cors = require('cors');
// 2.
const app = express();

app.use(cors());
app.use(express.json());

// 3.
const port = process.env.PORT || 5000;

// .4
app.get('/', (req, res,) => {
    res.send('Hello From Kutub')
});

// 

const users = [
    { id: 0, name: "sbana", email: "sabana@12gmail.com", phone: "0136999568" },
    { id: 1, name: "sbana", email: "sabana@12gmail.com", phone: "0136999568" },
    { id: 2, name: "samsu", email: "sabana@12gmail.com", phone: "0136999568" },
    { id: 3, name: "sumon", email: "sabana@12gmail.com", phone: "0136999568" },
    { id: 4, name: "sahon", email: "sabana@12gmail.com", phone: "0136999568" },
    { id: 5, name: "sulin", email: "sabana@12gmail.com", phone: "0136999568" },
    { id: 6, name: "safin", email: "sabana@12gmail.com", phone: "0136999568" },
]


// Query parameter and all users
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post', req.body)
    // res.send('all done');
    res.json(newUser);

});

// dynamic Api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    console.log(req.params.id);
})


// in depth api
app.get('/fruits/mango/langra', (req, res) => {
    res.send('ami am khamu')
})

// 

// 5.
app.listen(port, () => {
    console.log('hello from port', port);
})