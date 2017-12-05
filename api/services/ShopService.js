module.exports = {

  findShop: async(() => {
    try {
      let shops = await(db.Shop.findAll({
      	order: [
          ['area', 'ASC']
        ]
      }));
      return shops;
    }catch (e) {
      sails.log.warn(e);
      return;
    }
  }),
}