import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteMunkaora: function (munkaData) {
            console.log(munkaData.id);
            this.store.find('worktime', munkaData.id).then(function(post) {
                post.destroyRecord();
            });
            /*var munkaora = this.store.createRecord('worktime', munkaData);
            munkaora.save().then(function(){
                console.log("mentve");
            });*/
            
        }
    }
});
