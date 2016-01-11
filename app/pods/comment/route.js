import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        console.log(params.itemid);
        var munka = this.store.find('worktime', params.itemid);
        munka.then(function(){
           console.log(munka.leiras); 
        });
        return {
            munka: munka,
            munkaId: params.itemid
        };
        /*return {
            munka: munka,
            munkaId: params.itemid
        };*/
        /*return {
            comments: this.store.findAll('comment', { filter: { worktime: params.itemid } }),
            munkaId: params.itemid
        };*/
    }
});
