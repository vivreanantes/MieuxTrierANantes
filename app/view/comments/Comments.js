/**
 * Vue des Déchets (présente avec un icone de déchets
 */
Ext.define('MieuxTrierANantes.view.comments.Comments', {
			extend : 'Ext.navigation.View',
			xtype : 'comments_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'compose', // icône en forme de crayon
				title : 'Commentaires',
				items : [{
							xtype : 'commentsContainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});