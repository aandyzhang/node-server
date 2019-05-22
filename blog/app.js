const userRouter = require('./src/router/user')
const serverHandle = (req,res) => {
    res.setHeader('Content-type', 'application/json');
    
    const userData = userRouter(req,res);

    if(userData){
        return res.end(
            JSON.stringify(userData)
        )
    }
    res.setHeader('404','text/plain');
    res.end("this page no found")
}

module.exports = serverHandle