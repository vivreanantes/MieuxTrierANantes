/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('MieuxTrierANantes.view.structures.StructuresContainer', {
			extend : 'Ext.Container',
			xtype : 'structuresContainer_xtype',

			config : {
				layout : 'vbox',
				title : 'Lieux de collecte et réemploi',
				items : [/*{
							xtype : 'titlebar',
							docked : 'top'
						},*/ {
							xtype : 'structuresForm_xtype',
							height : 130,
							scrollable : false
						}, {
							xtype : 'structuresList_xtype',
							scrollable : 'vertical' ,
							flex : 1,
							// Pour fonctionner sous Windows Phone (800 hauteur totale, dont 100 barre haut et bas)
							minHeight : 570
						}]
			}
		});
