Ext.define('MieuxTrierANantes.model.HomeCollectModModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [               			{
							name : 'mco',
						  	convert: function(value, record) {
						  		if (record.raw["mco"]=="modco_sacjaune,modco_sacbleu") {
						  			return "<b>Modes de collecte</b> : Sacs jaunes et bleus";
						  		} else if (record.raw["mco"]=="modco_bacbleu,modco_bacjaune") {
						  			return "<b>Modes de collecte</b> : Bacs jaunes et bleus";
						  		}
						  		return "";
						  	}		
						}, {
							name : 'dcv',
							type : 'string',
							mapping : 'dcv'
						},
						{
							name : 'nvsa',
							type : 'string'
						},
						{
							name : 'ci',
							type : 'string'
							// ,
							// convert ajoute transforme 'un commentaire' en ' (un commentaire') OU '' en ''
							// convert: function(value, record) {
							// 	// if not blank
							// 	if (value!=null && value.replace(/\s/g,"") != "") {
							// 		// TODO : mettre à la fin .replace(" )", ")")
							// 		value = " ("+value+") ";
							// 	}
							// 	return value;
							// }
						},
						{
							name : 'jcprefixe',
							type : 'string',
							convert: function(value, record) {
								if (record.raw["jct"]!=null || record.raw["jcbb"]!=null || record.raw["jcbj"]!=null) {
									return "<br/>Jours de collecte : ";
								}
								return value;
							}
						},
						{
							name : 'jct',
							type : 'string'
						}, {
							name : 'jcbb',
							type : 'string',
							convert: function(value, record) {
								if (value!=null && record.raw["mco"]!=null && record.raw["mco"].indexOf("modco_bacbleu",0)!=-1) {
									return "<B>Bleu</B> "+value;
								}
								return value;
							}
						}, {
							name : 'jcbj',
							type : 'string',
							convert: function(value, record) {
								if (value!=null && record.raw["mco"]!=null && record.raw["mco"].indexOf("modco_bacjaune",0)!=-1) {
									return "<B>Jaune</B> "+value;
								}
								else {
									return value;
								}
							}
						}, {
							name : 'src',
							type : 'string'
						}, {
							name : 'cons',
							type : 'string'
							/*,
							convert: function(value, record) {
								if (record.raw["mco"]!=null && record.raw["mco"].indexOf("modco_bac",0)!=-1) {
									return "<B>Rappels</B> : ";
								}
								else {
									return "<B>Rappels</B> : ";
								}
							}*/
						}]
			}

		});