/**
 * API handler that returns node.js version
 */
;(function() {
	var nodeversion = function( req, res ) {		
		res.status( 200 ).send(process.versions);
	};
	
	module.exports.run = nodeversion;
}).call(this);