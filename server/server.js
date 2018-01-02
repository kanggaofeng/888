queryApi = require("./queryApi");
var http = require("http");
var querystring = require("querystring");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var fs = require("fs");
var jwt = require("jsonwebtoken");
//配置服务端口
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

app.use(bodyParser.json());
//jsonwebtoken
//设置跨域访问
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//接口
const home_goods_list = "/mall/index/getGoodsChannel";
const add_to_cart = "/user/Cart/addCart"; //添加购物车
const search_result_list = "/mobile/search/goodssortinfo";
const user_register = "/mobile/user/register";
const user_login = "/mobile/user/login";
const dizhi = "/user/districts/index";
const addaddress = "/user/address";
const get_address = "/get/address";
//登录

app.post(user_login, function(req, res) {
    res.status(200);
    var params = req.body;
    var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: params.user
        },
        "1507C"
    );
    console.log(token);
    var user_list = JSON.parse(
        fs.readFileSync("../mock/user_list.json", "utf-8")
    );
    user_list.forEach(item => {
        if (item.user == params.user && item.pwd == params.pwd) {
            res.end(
                JSON.stringify({
                    code: 1001,
                    msg: "scuess",
                    token: token
                })
            );
        }
    });
    res.end("err");
});
//后端注册接口
app.post(user_register, function(req, res) {
    res.status(200);
    var register_info = req.body;
    //   console.log(register_info);
    var usr_list = fs.readFileSync("../mock/user_list.json", {
        encoding: "utf-8"
    });
    var usr_list_obj;
    if (!usr_list) {
        usr_list_obj = [];
    }
    usr_list_obj = JSON.parse(usr_list);
    usr_list_obj.push(register_info);
    fs.writeFile("../mock/user_list.json", JSON.stringify(usr_list_obj), function(
        err
    ) {
        console.log(err);
        res.end("scuess");
    });
});

app.post(home_goods_list, function(req, res) {
    res.status(200);
    queryApi(home_goods_list, req.body, "POST").then(function(data) {
        res.end(data);
    });
});
//添加地址
app.get(dizhi, function(req, res) {
    res.status(200);
    var list = fs.readFileSync("../mock/address.json", {
        encoding: "utf-8"
    });
    res.end(list);
});
//添加购物车
app.post(add_to_cart, function(req, res) {
    res.status(200);
    var data = req.body;
    var end_info = "1";
    let token = jwt.verify(data.token, "1507C", function(err, decoded) {
        if (err) {
            end_info = {
                info: err.message,
                code: 1000
            };
        } else {
            end_info = {
                code: 1001,
                info: "登陆成功",
                decoded: decoded
            };
        }
    });
    if (!data.goods_id) {
        res.end(JSON.stringify({ code: 1002, msg: "入参错误", data: data }));
        res.status(403);
    }
    res.end(JSON.stringify(end_info));
});

app.get(search_result_list, function(req, res) {
    res.status(200);
    queryApi(search_result_list, req.query, "GET").then(function(data) {
        res.end(data);
    });
});
//添加地址 把传过来的 数据
app.post(addaddress, function(req, res) {
    res.status(200);
    var data = req.body;
    //console.log(data)
    //先进行解码把token j解出来
    jwt.verify(data.token, "1507C", function(err, decoded) {
        if (err) {
            end_info = { info: err.message, code: 1000 };
        } else {
            end_info = { code: 1001, info: "添加成功", decoded: decoded };
            var address_list = JSON.parse(
                fs.readFileSync("../mock/add_addresss.json", {
                    encoding: "utf-8"
                })
            );
            var info_else = JSON.parse(JSON.stringify(data));
            delete info_else.token;
            if (!address_list[decoded.data]) {
                address_list[decoded.data] = [info_else];
            } else {
                address_list[decoded.data].push(info_else);
            }
            fs.writeFileSync(
                "../mock/add_addresss.json",
                JSON.stringify(address_list)
            );
        }
    });
    res.end(JSON.stringify(end_info));
});
// 获取地址 就是最后渲染 地址那块
app.post(get_address, function(req, res) {
    res.status(200);
    var addr_info = req.body;
    var end_info;
    jwt.verify(addr_info.token, "1507C", function(err, decoded) {
        if (err) {
            end_info = {
                msg: err.message,
                code: "1000"
            };
        } else {
            end_info = {
                msg: "success",
                code: "1001",
                decoded: decoded
            };
            var addr_list = JSON.parse(fs.readFileSync("../mock/add_addresss.json"));
            console.log(addr_list);
            for (key in addr_list) {
                if (key == decoded.data) {
                    end_info["data"] = addr_list[key];
                    res.end(JSON.stringify(addr_list[key]));
                }
            }
        }
    });
});