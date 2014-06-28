/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define(
				'MieuxTrierANantes.view.comments.CommentsContainer',
				{
					extend : 'Ext.Container',
					xtype : 'commentsContainer_xtype',

					config : {
						layout : 'vbox',
						title : "Commentaires sur l'application et la filière tri",
						scrollable : 'true',
						items : [
								{
									xtype : 'label',
									html : "<p>Application réalisées par des bénévoles. Version <font color='blue'>béta</font> (mars 2014). <a href='http://www.mieuxtrieranantes.fr' target=_blank>www.mieuxtrieranantes.fr</a></p>"
								}, {
									xtype : 'commentsForm_xtype',
									height : 400,
									scrollable : false
								} ]
					}

				});
