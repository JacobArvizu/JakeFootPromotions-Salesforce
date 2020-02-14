public with sharing class OpportunityHandler {

    public static void setupOrder(List<Opportunity> opportunities) {
        OpportunityLineItem opportunityLineItem = new OpportunityLineItem();
        List<OpportunityLineItem> opportunityLineItems = new List<OpportunityLineItem>();
        List<PricebookEntry> pricebookEntries = [SELECT Id, Name, Product2Id, Pricebook2Id FROM PricebookEntry];
    }
}