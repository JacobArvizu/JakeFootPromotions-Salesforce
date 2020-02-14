({
  loadPromotions : function(component, event, helper) {
    var action = component.get("c.getPromotions");
    action.setCallback(this, function(response) {
      var state = response.getState();
      switch(state) {
        case "SUCCESS":
          var promotions = response.getReturnValue();
          component.set("v.promotionOptions", promotions);
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
});
