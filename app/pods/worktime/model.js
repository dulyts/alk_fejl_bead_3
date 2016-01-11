import DS from 'ember-data';

export default DS.Model.extend({
    leiras: DS.attr('string'),
    nap: DS.attr('string' ,{
        defaultValue: function() { return new Date().localDate.toLocaleDateString(); }
    }),
    mettol: DS.attr('string' ,{
        defaultValue: function() { return new Date().localDate.toLocaleDateString(); }
    }),
    meddig: DS.attr('string' ,{
        defaultValue: function() { return new Date().localDate.toLocaleDateString(); }
    }),
    jovahagyva: DS.attr('boolean' ,{
        defaultValue: function() { return false; }
    }),
    comments: DS.hasMany('comment', { async: false , inverse: 'worktime'})
});
