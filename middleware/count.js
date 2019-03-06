const originModel = require('../models/origin');

module.exports = function () {
    return async function (ctx, next) {
        try {
            const origin = ctx.request.origin
            try {
                let isExist = false
                const result = await originModel.findOriginByName(origin)
                console.error(result)
                if (!result) {
                    const originData = {
                        origin: origin,
                        count:1
                    }
                    await originModel.createOrigin(originData)
                }else{
                    await originModel.updateOriginCount(result.id)
                }
                await next()
            } catch (err) {

            }
        } catch (err) {
            if (err.status === 401) {

            } else {

            }
        }
    }
}