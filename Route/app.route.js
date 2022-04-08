const express = require("express");
const { getData, checkToken } = require("../Controller/app.controller");

const RouteA=express.Router()
RouteA.get('/',getData)
RouteA.post('/post',checkToken)
module.exports=RouteA