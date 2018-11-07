const BaseController = require('../base');

module.exports = class User extends BaseController {

    async savePhone() {

        let {ctx} = this;

        try{    
            await ctx.model.Credan.User.create({phone: "13913169273"})

            this.success("提交成功")
        }catch(e) {
            this.error(e)
        }
    }
}