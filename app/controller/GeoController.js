/**
 * Controlleur pour les vues et modèles de Carte
 * 
 * <p>
 * Pour information : Classe Carte Wrapper Carte Google Lire :
 * https://developers.google.com/maps/documentation/javascript/reference?hl=fr#ControlPosition
 * http://leafletjs.com/reference.html#marker
 * </p>
 * 
 * 
 * 
 * 
 * 
 */
 
 
/* Controlleur Carte */

Ext.define('MieuxTrierANantes.controller.GeoController', {
    extend : 'MieuxTrierANantes.controller.AbstractController',
  config : {
        refs : {
            vanmaposm : {
                selector : 'vanmaposm',
                xtype : 'vanmaposm',
                autoCreate : true
            }
        },
        control : {
            vanmaposm : {
                activate : 'onMapActivate'
            }
         
        }
    },

     /**
     * Action réalisée lorsqu'on active le panel Carte
     */
    onMapActivate : function(container, newc) {
       
       var map = this.getVanmaposm(); 
       map.init();
       
       
       if (!Ext.isDefined(this.structureGeoStore)) {
       	
            this.structureGeoStore = Ext.create('MieuxTrierANantes.store.StructureGeoStore',  { autoLoad : false });
            
            this.structureGeoStore.load(function(records, operation, success) {  		
            	
            	
    			records.forEach(function (element, index, array) {  							    			
    				 
    				 	map.addStructure(element);
    			});
    			
    			
			}, this);

        };   
        
       
    }
});
