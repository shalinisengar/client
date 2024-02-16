let express = require('express')
let app = express()
let User = require('./model/auth')
let bcrypt = require('bcrypt')
let mongoos = require('mongoose')
// const { emit } = require('nodemon')
let cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
mongoos.connect('mongodb://127.0.0.1:27017/auth').then(() => {
    console.log('connect');


}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('helooo')
})
app.post('/signup', async (req, res) => {
    // console.log(req.body);
    let user = req.body
    console.log(user);
  

    let email = await User.findOne({ email: user.email })
    if (email) {
        res.send('user already exist')
    }
    else {
        user.passWord = await bcrypt.hash(user.passWord, 10)
        console.log(user, "ssssssssss");
        let dbdata = new User({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            passWord: user.passWord
        })
        await dbdata.save()
        res.send('user created')

    }
})

app.post('/login', async (req, res) => {
    let ldata = req.body
    // console.log(ldata);
    //  res.send(ldata)
    let user1
    try {
        user1 = await User.findOne({ email: ldata.email })
    }
    catch {
        console.log(err);
    }
    if (!user1) {
        res.send('user not found')
    }
    else {
        let validpassword = await bcrypt.compare(ldata.passWord, user1.passWord).catch((err) => {
            console.log(err, 'error');
        })
        console.log(validpassword);
        if (!validpassword) {
            res.send('invalid passWord')
        }
        else {

            res.send('login ho gaya login scuccesfull')
        }
    }
})

app.listen(4000, () => {
    console.log('server is on 4000');
})