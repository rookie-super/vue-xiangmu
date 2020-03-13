const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const cors = require("koa2-cors");
const staticServer = require("koa-static");
const path = require("path");
const fs = require("fs");
app.use(staticServer(path.join(__dirname, "/static")));
let goodsData = require("./static/goodsData");
let addressData = require("./static/addressData");
app.use(cors());
router.get("/getHome", function (ctx) {
    ctx.body = goodsData()
});
router.get("/getShop/:id", function (ctx) {
    let data = goodsData();
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == ctx.params.id) {
            ctx.body = data[i];
            return
        }
    }
    ctx.body = [];
});
router.get("/getGoods/:ids/:id", function (ctx) {
    let dataBig = goodsData();
    for (let i = 0; i < dataBig.length; i++) {
        if (dataBig[i].id == ctx.params.ids) {
            let data = dataBig[i].data;
            for (let j = 0; j < data.length; j++) {
                if (data[j].id == ctx.params.id) {
                    ctx.body = data[j];
                    return
                }
            }
        }
    }
    ctx.body = [];
});
router.get("/getAddress", function (ctx) {
    let data = addressData();
    ctx.body = data;
});
router.get("/getZhuCe/:name/:password", function (ctx) {
    fs.readFile("./static/usersData.json", function (err, data) {
        if (err) {
            console.log(404);
        }
        let json1 = JSON.parse(data.toString());
        let json2 = {name: ctx.params.name, password: ctx.params.password};
        json1.data.push(json2);
        fs.writeFile("./static/usersData.json", JSON.stringify(json1), function (err) {
            if (err) {
                console.log(405);
            }
        })
    });
    ctx.body = {name: ctx.params.name,bool:true}
});

router.get("/getDengLu/:name/:password", function (ctx) {
    fs.readFile("./static/usersData.json", function (err, data) {
        if (err) {
            console.log(404);
        }
        let json1 = JSON.parse(data.toString());
        let arr = json1.data;
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                if ((arr[i].name == ctx.params.name) && (arr[i].password == ctx.params.password)) {
                }
            }
        }
    });
    ctx.body = {name:ctx.params.name,bool:true}
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, function (err) {
    if (err) {
        console.log("服务未开启");
    }
    console.log("服务已开启");
});