import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newMunkaora: function (munkaData) {
            var munkaora = this.store.createRecord('worktime', munkaData);
            munkaora.save().then(function(){
                console.log("mentve");
            });
            
        }
    }
});
