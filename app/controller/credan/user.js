const BaseController = require('../base');

module.exports = class User extends BaseController {

    async savePhone() {

        let {ctx} = this;

        try{    

            let body = ctx.request.body;
            
            await ctx.model.Credan.User.create({phone: body.phone})

            this.success("提交成功")
        }catch(e) {
            this.error(e)
        }
    }
}