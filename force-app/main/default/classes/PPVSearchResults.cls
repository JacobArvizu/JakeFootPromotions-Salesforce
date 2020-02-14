public with sharing class PPVSearchResults {
    @AuraEnabled
    public static List<Promotion__c> getPromotions() {
        return [SELECT Id, Name FROM Promotion__c];
    }

    @AuraEnabled
    public static List<PPV_Event__c> getPPVs(String promotionId) {
        if (promotionId != null && promotionId.length() > 0) {
            return [SELECT Id, Name,  Promotion__c FROM PPV_Event__c WHERE Promotion__c = :promotionId];
        }

        return [SELECT Id, Name,  Promotion__c FROM PPV_Event__c];
    }
}