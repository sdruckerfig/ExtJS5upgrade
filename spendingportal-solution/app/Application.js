Ext.define('SpendingPortal.Application', {
    extend: 'Ext.app.Application',
     
    name: 'SpendingPortal',
    
    controllers: [
        'Main',
        'Sponsors',
        'Earmarks',
        'Feedback'
    ],
 
    launch: function () {
        // TODO - Launch the application
 
        var pnl = Ext.ComponentQuery.query('#centerpanel')[0];
 
        Ext.widget('sponsors', {
            constrainTo: pnl.getEl(),
            x: 5,
            y: 20
        });
 
        Ext.widget('earmarksviewer', {
            constrainTo: pnl.getEl(),
            x: 500,
            y: 20
        });
 
        Ext.widget('sponsorchart', {
            constrainTo: pnl.getEl(),
            x: 500,
            y: 300
        });
    }
});