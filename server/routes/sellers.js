const {getSeller,getGoods,getRatings} = require('../control/sellers')
module.exports = function (sellersRouter) {
    //获取商家信息
    sellersRouter.get('/getSeller', getSeller)
    //获取商家商品信息
    sellersRouter.get('/getGoods', getGoods)
    //获取商家评论信息
    sellersRouter.get('/getRatings',getRatings)
}