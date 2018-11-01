const BaseController = require('./base');

module.exports= class Daichao extends BaseController{

    async genChannel() {

        let {ctx} = this;
        let body = ctx.request.body;

        try{
            
            await ctx.model.Daichao.create({

                channelName:body.channelName,
                channelSid:body.channelSid,
                url:body.url
            })

            this.success();
        }catch(error) {

            this.error(error)
        }
    } 


    async getChannelList() {
        
        let {ctx} = this;

        try{

            let list = await ctx.model.Daichao.find().sort({_id:-1});

            this.success(list);
        }catch(e) {

            this.error(e);
        }
    }

    async deleteChannel() {

        let {ctx} = this;
        
        try{
            
            await ctx.model.Daichao.remove({_id:ctx.query.channelSid});

            this.success();
        } catch(e) {

            this.error(e);
        }
    }

    async getChannel() {

        let {ctx} = this;

        try{
            
            let data = await ctx.model.Daichao.findOne({_id:ctx.query.id});

            this.success(data);
        } catch(e) {

            this.error(e);
        }
    }

    async editChannel() {

        let {ctx} = this;
        
        try{
            let body = ctx.request.body;

            await ctx.model.Daichao.update({_id:body.id}, {$set:{

                channelSid:body.channelSid,
                channelName:body.channelName,
                url:body.url
            }})

            this.success();
        }catch(e) {

            this.error(e);
        }
    }
}












