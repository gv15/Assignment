const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const loginRouter = require('./routes/login');
const otpRouter = require('./routes/otp');
const productsRouter = require('./routes/product');
const verifyToken = require('./middlewares/verifyToken');


dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/login", loginRouter);
app.use(verifyToken);
app.use("/otp", otpRouter)
app.use("/products", productsRouter)


app.listen(process.env.PORT, function(){
    console.log("Listening at", process.env.PORT);
})