module.exports = function(sequelize, DataTypes) {

  var Shop = sequelize.define('Shop', {

    name: DataTypes.STRING,
    // 優惠名稱
    address: DataTypes.STRING,
    // 優惠類型: price, discount
    open: DataTypes.STRING,
    // 優惠內容
    facebook: DataTypes.STRING,
    map: DataTypes.STRING,
    area: {
      type: DataTypes.ENUM('北部', '中部', '南部'),
      defaultValue: '北部'
    }

  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  });

  return Shop;
};
