import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSubmit: function () {
            console.log("mentve");
            this.get('onSave')({
                leiras: $('[name="leiras"]').val(),
                nap: $('[name="nap"]').val(),
                mettol: $('[name="mettol"]').val(),
                meddig: $('[name="meddig"]').val()
            });
            //this.onSave();
        }
    }
});
