module.exports = {

  findShop: async(() => {
    try {
      let shops = await(db.Shop.findAll());
      return shops;
    }catch (e) {
      sails.log.warn(e);
      return;
    }
  }),
}