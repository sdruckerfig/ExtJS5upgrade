/*
 * File: app/view/Feedback.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SpendingPortal.view.Feedback', {
    extend: 'Ext.window.Window',
    alias: 'widget.feedback',

    autoShow: true,
    height: 388,
    width: 436,
    constrain: true,
    layout: {
        type: 'fit'
    },
    title: 'Feedback',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'feedbackForm',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            height: 27,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            fieldLabel: 'Name',
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    fieldLabel: '',
                                    hideLabel: true,
                                    name: 'firstname',
                                    allowBlank: false,
                                    emptyText: 'First Name'
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    fieldLabel: 'Label',
                                    hideEmptyLabel: false,
                                    hideLabel: true,
                                    name: 'lastname',
                                    allowBlank: false,
                                    emptyText: 'Last Name'
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Date',
                            name: 'date'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Email',
                            name: 'email',
                            allowBlank: false,
                            vtype: 'email'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Chapter',
                            name: 'chapter',
                            displayField: 'label',
                            queryMode: 'local',
                            store: 'BookChapters',
                            valueField: 'id'
                        },
                        {
                            xtype: 'slider',
                            anchor: '100%',
                            fieldLabel: 'Rating<br />1=poor,10=great',
                            name: 'rating',
                            value: 5,
                            maxValue: 10,
                            minValue: 1
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100% -185',
                            height: 150,
                            style: 'background-color: white;',
                            fieldLabel: 'Feedback',
                            labelAlign: 'top',
                            name: 'feedback'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var form = button.up('form');

                                form.submit({
                                    url: 'http://webapps.figleaf.com/arch101/dataservices/desktop/feedback.cfc?method=submitfeedback',
                                    success: function() {
                                        Ext.Msg.alert("Feedback Received","Thank you for your feedback!");
                                    },
                                    failure: function() {
                                        Ext.Msg.alert("Feedback failed","An error occurred while processing the request.");
                                    }
                                });
                            },
                            anchor: '100%',
                            formBind: true,
                            itemId: 'btnFeedbackSubmit',
                            margin: '5 0 0 0',
                            text: 'Submit'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});