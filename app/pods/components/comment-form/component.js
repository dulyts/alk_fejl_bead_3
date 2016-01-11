import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSubmit: function () {
            console.log("mentve");
            this.get('onSave')({
                worktime: $('[name="munkaId"]').val(),
                szoveg: $('[name="szoveg"]').val(),
            });
            //this.onSave();
        }
    }
});
