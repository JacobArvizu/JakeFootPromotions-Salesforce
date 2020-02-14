({
    onSearch : function(component, event, helper) {
        var promotionId = component.get("v.promotionId");
        var action = component.get("c.getPPvs");
        action.setParams({
            "promotionId": promotionId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            switch(state) {
                case "SUCCESS":
                    var ppvs = response.getReturnValue();
                    component.set("v.ppvs", ppvs);
                    break;

                case "INCOMPLETE":
                    console.log('Incomplete');
                    break;

                case "ERROR":
                    console.log(response.getError());
                    break;
            }
        });
        $A.enqueueAction(action);
    }
})
