const fs = require('fs');
const Discord = require('discord.js');
var mysql = require('mysql');
const con = require('./../../db.js');
const wert = 800
const name = "Spinat"

let buyspinat = function(mes) {
	con.query("SELECT id, coins, power, coinsspent FROM userdata WHERE usrid = '"+mes.author.id+"'", function (err, result, fields) {
		if (err) throw err;
		var aktucoins = result[0].coins;
        var aktucoinsspent = result[0].coinsspent;
        var aktupower = result[0].power;
		if (aktucoins >= wert) {
			con.query("UPDATE `cerbotdb`.`userdata` SET `coins`=" + (aktucoins - wert) + " WHERE  `id`="+result[0].id+";")
            con.query("UPDATE `cerbotdb`.`userdata` SET `coinsspent`=" + (aktucoinsspent + wert) + " WHERE  `id`="+result[0].id+";")
            con.query("UPDATE `cerbotdb`.`userdata` SET `power`=" + (aktupower + 3) + " WHERE  `id`="+result[0].id+";")
			mes.channel.send(mes.author+" du hast das Item ``"+name+"`` **erfolgreich gekauft**. Dir wurden **"+wert+"**❦ genommen. Deine Angriffspunkte wurden um **3** Punkte auf **"+(aktupower + 8)+"** erhöht!")
			const lt = require('./../../bot.js');
			lt.logging("0x00FF00", "Währungssystem", "Ein Logeintrag zum Währungssystem", "Item wurde gekauft", 
			""+mes.author+" (ID: ``"+mes.author.id+"``) hat das Item **"+name+"** für **"+wert+"**❦ gekauft.");
		}else{
			mes.channel.send(mes.author+" du kannst dir das Item ``"+name+"`` leider nicht leisten, dir fehlen **"+(wert - aktucoins)+"**❦.")
		}
	});
}

exports.buyspinat = buyspinat;