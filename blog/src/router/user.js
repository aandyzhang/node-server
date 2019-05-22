
const userRouter = (req,res) => {
    const method = req.method;
    const path = req.url.split("?")[0];

    //获取用户详细信息

    if(method === 'GET' && path === '/api/user/getUserDetail'){
        return {
            data: {
                name: "zhangsan",
                age: 12
            }
        }
    }

    if(method === 'POST' && path === '/api/user/del') {
        return {
            data: {
                errmsg: "success",
                errcode: 0,
            }
        }
    }
}

module.exports = userRouter;