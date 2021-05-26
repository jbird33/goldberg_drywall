'use strict';
const {
  Model
} = require('sequelize');
const { post } = require('../routes/jobs');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.belongsTo(models.Customer, {foreignKey: 'customerId'})
    }
  };
  Jobs.init({
    address: DataTypes.STRING,
    square_ft: DataTypes.INTEGER,
    bid_amt: DataTypes.INTEGER,
    contact: DataTypes.STRING,
    customerID: Datatypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};