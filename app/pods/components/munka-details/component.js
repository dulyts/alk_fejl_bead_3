import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    classNameBindings: ['munka.jovahagyva:text-success:text-warning'],
    actions: {
        onDel: function () {
            this.get('onDel')({
                id: this.data.id
            });
            /*this.get('onSave')({
                id: $('[name="id"]').val(),
                leiras: $('[name="leiras"]').val(),
                nap: $('[name="nap"]').val(),
                mettol: $('[name="mettol"]').val(),
                meddig: $('[name="meddig"]').val()
            });*/
            //this.onSave();
        }
    }
});
