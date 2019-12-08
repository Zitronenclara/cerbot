const fs = require('fs');
const Discord = require('discord.js');
var mysql = require('mysql');
const con = require('./../db.js');

module.exports = {
	name: 'sell',
	description: 'Verkauft eine beliebige Rolle in deinem Besitz und du bekommst 100% der Seelen zurückerstattet',
	category: 'Währung',
    usage: '``c!sell [rollenname]``',
	execute(arguments, receivedMessage) {
		if (arguments == "charon" || arguments == "Charon"){
			const it = require('./shopitems/charon.js');
			it.sellcharon(receivedMessage);
		}else if (arguments == "dionysos" || arguments == "Dionysos"){
			const it = require('./shopitems/dionysos.js');
			it.selldionysos(receivedMessage);
		}else if (arguments == "artemis" || arguments == "Artemis"){
			const it = require('./shopitems/artemis.js');
			it.sellartemis(receivedMessage);
		}else if (arguments == "eris" || arguments == "Eris"){
			const it = require('./shopitems/eris.js');
			it.selleris(receivedMessage);
		}else if (arguments == "erebos" || arguments == "Erebos"){
			const it = require('./shopitems/erebos.js');
			it.sellerebos(receivedMessage);
		}else if (arguments == "nyx" || arguments == "Nyx"){
			const it = require('./shopitems/nyx.js');
			it.sellnyx(receivedMessage);
		}else if (arguments == "hephaistos" || arguments == "Hephaistos"){
			const it = require('./shopitems/hephaistos.js');
			it.sellhephaistos(receivedMessage);
		}else if (arguments == "ares" || arguments == "Ares"){
			const it = require('./shopitems/ares.js');
			it.sellares(receivedMessage);
		}else if (arguments == "thanatos" || arguments == "Thanatos"){
			const it = require('./shopitems/thanatos.js');
			it.sellthanatos(receivedMessage);
		}else if (arguments == "hades" || arguments == "Hades"){
			const it = require('./shopitems/hades.js');
			it.sellhades(receivedMessage);
		}else if (arguments == "zeus" || arguments == "Zeus"){
			const it = require('./shopitems/zeus.js');
			it.sellzeus(receivedMessage);
		}else if (arguments == "kekselaos" || arguments == "Kekselaos"){
			const it = require('./shopitems/kekselaos.js');
			it.sellkekselaos(receivedMessage);
		}else if (arguments == "halbluzifer" || arguments == "Halbluzifer"){
			const it = require('./shopitems/halbluzifer.js');
			it.sellhalbluzifer(receivedMessage);
		}
	},
};