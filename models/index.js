// const User = require('./User');
// const Project = require('./Project');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// module.exports = { User, Project };


const User = require('./User');
// const High_score = require('./High_score');

// User.hasMany(High_score, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// High_score.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User };

