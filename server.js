//express server
const express=require('express');
const connectDB=require('./config/db');

const app=express();

//connect Database
connectDB();

app.get('/', (req, res)=>res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


//listen port
const PORT=process.env.PORT|| 5000;
app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`));

