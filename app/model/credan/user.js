module.exports = app => {

    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({

        phone: {
            required:true,
            type:String
        }
    })

    const credanUser = mongoose.model('credanUser', UserSchema);

    return credanUser;
}