({
    init : function(component, event, helper) {
        var redirectEvent = $A.get("e.force:navigateToSObject");
        if (redirectEvent) {
            component.set("v.showFullDetailsBtn", true);
        }
    },

    onFullDetails : function(component, event, helper) {
        var ppv = component.get("v.ppv");
        var redirectEvent = $A.get("e.force:navigateToSObject");
        if (redirectEvent && ppv) {
            redirectEvent.setParams({
                "recordId": ppv.Id
            });
            redirectEvent.fire();
        }
    }
});
