package com.aurafit.config;

import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;

public class CloudMongoConfig {
    private static MongoClient mongoClient = null;
    
    // Exact production URI with your credentials directly integrated
    private static final String CONNECTION_URI = "mongodb+srv://krishnashivhare654_db_user:RCwyMLFYD5wjKIol@cluster0.g1i91jq.mongodb.net/AuraFit_Cloud_DB?retryWrites=true&w=majority&appName=Cluster0";

    public static MongoDatabase getCloudConnection() {
        if (mongoClient == null) {
            try {
                mongoClient = MongoClients.create(CONNECTION_URI);
                System.out.println("[SUCCESS] Secure Tunnel Opened to MongoDB Atlas Cloud Clusters!");
            } catch (Exception e) {
                System.out.println("[CRITICAL] Cloud Network Handshake Failed: " + e.getMessage());
            }
        }
        return mongoClient.getDatabase("AuraFit_Cloud_DB");
    }
}