const sellersModel = require('../db/model/sellerModel')
module.exports = {
    //获取商家信息
    async getSeller(ctx) {
        let result = await sellersModel.find()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        ctx.body = {
            status: 200,
            data:result[0].seller
        }
    },
    //获取商家商品信息
    async getGoods(ctx) {
        let result = await sellersModel.find()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        ctx.body = {
            status: 200,
            data:result[0].goods
        }
    },
    //获取商家评论信息
    async getRatings(ctx) {
        let result = await sellersModel.find()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        ctx.body = {
            status: 200,
            data:result[0].ratings
        }
    }
}