var express = require("express");
var router = express.Router();
var {Users} = require('../models/users');
const userModel = new Users();

/* Register a user : POST /auths/register */
router.post("/register", function (req, res, next){
   console.log("test");
   if( !req.body || (req.body.hasOwnProperty("username") && req.body.username.length==0 || req.body.hasOwnProperty("password") && req.body.password.length==0) ){
            return res.stat(400).end();
   }

   const authentificatedUser = userModel.register(req.body, req.password);

   if(!authentificatedUser) return res.status(409).end();

   return res.json(authentificatedUser);
});


/* login a user : POST /auths/login */
router.post("/login", function (req, res, next) {
   // Send an error code '400 Bad request' if the body parameters are not valid
   if (
       !req.body ||
       (req.body.hasOwnProperty("username") && req.body.username.length === 0) ||
       (req.body.hasOwnProperty("password") && req.body.password.length === 0)
   )
      return res.status(400).end();

   const authenticatedUser = userModel.login(
       req.body.username,
       req.body.password
   );
   // Error code '401 Unauthorized' if the user could not be authenticated
   if (!authenticatedUser) return res.status(401).end();

   return res.json(authenticatedUser);
});

/* GET /auths/users : list all the users that can be authenticated
WARNING this is a security hole !!! You shall authorize access to these ressources
via JWT
router.get("/users", function (req, res, next) {
  return res.json(users);
});*/

module.exports = router;
