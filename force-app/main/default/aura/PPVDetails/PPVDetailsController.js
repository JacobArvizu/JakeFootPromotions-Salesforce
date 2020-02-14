({
    onRecordUpdated : function(component, event, helper) {

    },

    onPPVSelected : function(component, event, helper) {
        var ppv = event.getParam("ppv");
        component.set("v.id", ppv.Id);
        component.find("service").reloadRecord();
    },
});
