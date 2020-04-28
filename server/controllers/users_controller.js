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
  },
  getUsersAll:(req, res, next)=>{
    const db = req.app.get('db');
    setTimeout(()=>{
    db.get_all_users([])
    .then(dbResponse => { res.status(200).send(dbResponse) })
    .catch((err)=>console.log(err))
    }, 1500)
  },
  getUsersByName:(req, res, next)=>{
    const db = req.app.get('db');
    db.get_all_users_where_name(['Joe'])
    .then(dbResponse => {res.status(200).send(dbResponse)})
    .catch((err)=>console.log(err))
  }
}