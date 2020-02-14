({
  onPPVClick: function(component, event, helper) {
    var ppv = component.get("v.event");
    if (ppv && boat.Id) {
      var eventselect = component.getEvent("eventselect");
      eventselect.setParams({ "eventId": event.Id });
      eventselect.fire();

      var eventSelected = $A.get("e.c:eventselected");
      eventSelected.setParams({ "event": event });
      eventSelected.fire();
    }
  }
});
