/**
 * Created by jaumard on 11/05/2015.
 */
let ShopController = {

  getAllShop: async(function( req, res ) {
    try {
      let shops = await(ShopService.findShop());
      return res.json(shops);
    }catch (e) {
      sails.log.warn(e)
      return res.serverError(e);
    }
  })
}

module.exports = ShopController;