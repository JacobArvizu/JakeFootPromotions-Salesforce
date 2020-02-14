({
  init : function(component, event, helper) {
    var createRecordEvent = $A.get("event.force:createRecord");
    if (createRecordEvent) {
      component.set("v.showNewBtn", true);
    }

    helper.loadPromotions(component, event, helper);
  },

  promotionChange : function(component, event, helper) {
    var promotion = event.getSource().get("v.value");
    component.set("v.promotion", promotion);
  },

  onFormSubmit : function(component, event, helper) {
    var params = {"formData": {"promotionId": component.get("v.promotion")}};

    var formsubmit = component.getEvent("formsubmit");
    formsubmit.setParams(params);
    formsubmit.fire();
  },

  newBtnClick : function(component, event, helper) {
    var createRecordEvent = $A.get("event.force:createRecord");

    if (createRecordEvent) {
      var params = {"entityApiName": "PPV_Event__C"};

      var promotion = component.get("v.promotion");
      if (promotion) {
        params.defaultFieldValues = {"Promotion" : promotion};
      }

      createRecordEvent.setParams(params);
      createRecordEvent.fire();
    }
  }
});
