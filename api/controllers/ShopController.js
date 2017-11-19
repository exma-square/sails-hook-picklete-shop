/**
 * Created by jaumard on 11/05/2015.
 */
let utils = require('../../helper/utils');
let currentPath = utils.currentPath;

let ShopController = {

  getAllShop: async(function( req, res ) {
    try {
      let shops = await(ShopService.findShop());
      return res.json(shops);
    }catch (e) {
      sails.log.warn(e)
      return res.serverError(e);
    }
  }),
  test: async(function( req, res ) {
    try {
    	let brands = await(db.Brand.findAll({
    	  where: {
    	    type: {
    	      $ne: 'OTHER'
    	    }
    	  }
    	}));

    	let dpts = await(db.Dpt.findAll({
    	  include: [{
    	    model: db.DptSub
    	  }],
    	  order: ['Dpt.weight', 'DptSubs.weight']
    	}));

    	let tags = await(db.Tag.findAll());

      	return res.view(currentPath('views/test'), {
      		brands,
      		dpts,
      		tags,
      		pageName: '/admin/goods/create'
      	});

    }catch (e) {
      sails.log.warn(e)
      return res.serverError(e);
    }
  }),
}

module.exports = ShopController;