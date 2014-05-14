Ext.define('SpendingPortal.view.SponsorChart', {
    extend: 'Ext.window.Window',
    alias: 'widget.sponsorchart',

    requires: [
        'Ext.chart.Chart',
        'Ext.chart.series.Column',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric'
    ],

    autoShow: true,
    height: 320,
    width: 501,
    constrain: true,
    layout: {
        type: 'fit'
    },
    title: 'Compare Expenditures',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'chart',
                autoRender: false,
                height: 250,
                width: 400,
                animate: true,
                insetPadding: 20,
                store: 'ChartData',
                axes: [{
                    type: 'Category',
                    fields: [
                        'label'
                    ],
                    label: {
                        rotate: {
                            degrees: 45
                        },
                        renderer: function(s) {
                            return Ext.String.ellipsis(s, 10);
                        }
                    },
                    title: 'Elected Representative',
                    position: 'bottom'
                }, {
                    type: 'Numeric',
                    fields: [
                        'value'
                    ],
                    label: {
                        renderer: Ext.util.Format.usMoney
                    },
                    title: 'Expenditures',
                    decimals: 0,
                    position: 'left'
                }],
                series: [{
                    type: 'column',
                    label: {
                        display: 'insideEnd',
                        field: 'value',
                        color: '#333',
                        'text-anchor': 'middle'
                    },
                    xField: 'label',
                    yField: 'value'
                }]
            }]
        });

        me.callParent(arguments);
    }

});