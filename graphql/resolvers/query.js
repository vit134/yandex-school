const {models, sequelize} = require('../../models');

module.exports = {
    event(root, {id}) {
        return models.Event.find({
            where: {id: id},
            include: [{
                model: models.User
            }]
        }).then(res => {
            return res;
        });
    },
    events(root, args, context) {
        return models.Event.findAll({
            order: [ ['dateStart', 'ASC'] ]
        }, context);
    },
    user(root, {id}) {
        return models.User.findById(id);
    },
    users(root, args, context) {
        return models.User.findAll({}, context);
    },
    room(root, {id}) {
        return models.Room.findById(id);
    },
    rooms(root, args, context) {
        return models.Room.findAll({
            order: [
                [ {model: models.Event, as: 'Events'}, 'dateStart', 'ASC' ]
            ],
            include: [{
                
                // where: {
                //     //dateStart: sequelize.fn('strftime', sequelize.literal("'%Y-%m-%d'"), '2018-01-17')
                //     [sequelize.fn('strftime', sequelize.literal("'%Y-%m-%d'"), sequelize.col('dateStart')), 'dateStart']
                // },
                model: models.Event,
                //where: sequelize.where(sequelize.fn('strftime', sequelize.literal("'%Y-%m-%d'"), sequelize.col('dateStart')), '2018-01-17'),
                include: {
                    model: models.User,
                    as: 'Users'
                }
            }]
            
        }).then(res => {
            return res;
        })
    }
};