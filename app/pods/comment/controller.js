import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newComment: function (commentData) {
            console.log(commentData);
            
            var store = this.store;
            var comment = store.createRecord('comment', {
                szoveg: commentData.szoveg
            });
            store.find('worktime', commentData.worktime).then(function(munkaora){
                comment.set('worktime', munkaora);
            });
            
            
            /*store.find('worktime', commentData.worktime).then(function(munkaora){
                commentData.worktime = munkaora;
                store.createRecord('comment', commentData).save();  
                console.log('komment mentve');
            });*/
        }
    }
});
