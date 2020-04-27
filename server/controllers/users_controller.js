const users = require( '../dummyData/users.json');

module.exports={
    get:(req, res, next)=>{
        // return list of users.
        // note using set timeout to simulate slow connection.
        setTimeout(()=>{ res.status(200).send(users) }, 1500)
    },
    post:(req, res, next)=>{
        // add user to list of users
        console.log("post", req.body);
        res.status(200).send(users);
    }
}