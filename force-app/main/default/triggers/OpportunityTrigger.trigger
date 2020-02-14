trigger OpportunityTrigger on Opportunity (after update) {
    if (Trigger.isUpdate && Trigger.isAfter) {
        OpportunityHandler.setupOrder(Trigger.new);
    }
}