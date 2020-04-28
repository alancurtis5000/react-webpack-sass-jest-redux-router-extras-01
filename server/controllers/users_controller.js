const users = require( '../dummyData/users.json');

module.exports={
  get:(req, res, next)=>{
    const db = req.app.get('db');
    // setTimeout(()=>{
    db.get_all_users([])
    .then(dbResponse => { res.status(200).send(dbResponse) })
    .catch((err)=>console.log(err))
    // }, 1500)
  },
  post:(req, res, next)=>{
    // on posts get data from req.body
    const db = req.app.get('db');
    db.add_new_user([req.body.name])
    .then(dbResponse => { res.status(200).send(dbResponse) })
    .catch((err)=>console.log(err))
  },
  put:(req, res, next)=>{
    // on posts get data from req.body
    console.log({req:req.body})

    const db = req.app.get('db');
    cosnt = { updateName, id } = req.body;
    db.update_user_name([updateName, id])
    .then(dbResponse => { res.status(200).send(dbResponse) })
    .catch((err)=>console.log(err))
  },
  delete:(req, res, next)=>{
    // on deletes have to use req.query
    const db = req.app.get('db');
    let id = parseInt(req.query.id);
    db.delete_user([id])
    .then(dbResponse => { res.status(200).send(dbResponse) })
    .catch((err)=>console.log(err))
  },
  getUsersByName:(req, res, next)=>{
    const db = req.app.get('db');
    db.get_all_users_where_name(['Joe'])
    .then(dbResponse => {res.status(200).send(dbResponse)})
    .catch((err)=>console.log(err))
  }
}