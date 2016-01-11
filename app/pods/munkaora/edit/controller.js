import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveMunkaora: function (munkaData) {
            console.log(munkaData.id)
            var munkaora = this.store.find('worktime', munkaData.id)
            .then(function(munka){
                munka.set('nap', munkaData.nap);
                munka.set('mettol', munkaData.mettol);
                munka.set('meddig', munkaData.meddig);
                munka.set('leiras', munkaData.leiras);
                munka.save();
            });
        }
    }
});
