({
    init : function(component, event, helper) {
        helper.onSearch(component, event, helper);
    },

    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            component.set("v.promotionId", params.promotionId);
            helper.onSearch(component, event, helper);
        }
    },

    onPPVSelect : function(component, event, helper) {
        var ppvId = event.getParam("ppvId");
        component.set("v.selectedPPVId", ppvId);
    },

    onPPVSelected : function(component, event, helper) {
    }
});
