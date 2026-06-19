package com.aurafit.controller;

import com.aurafit.config.CloudMongoConfig;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "*")
public class AuraFitController {

    @GetMapping("/metrics/sync")
    public List<Document> syncGlobalMetrics() {
        try {
            MongoCollection<Document> collection = CloudMongoConfig.getCloudConnection().getCollection("Global_Metrics");
            List<Document> metrics = new ArrayList<>();
            for (Document doc : collection.find()) { 
                metrics.add(doc); 
            }
            return metrics;
        } catch (Exception e) {
            System.out.println("Error syncing metrics: " + e.getMessage());
            return new ArrayList<>();
        }
    }

    @PostMapping("/user/onboard")
    public String onboardUser(@RequestBody String jsonPayload) {
        try {
            MongoCollection<Document> collection = CloudMongoConfig.getCloudConnection().getCollection("User_Profiles");
            Document userDoc = Document.parse(jsonPayload);
            collection.insertOne(userDoc);
            return "[SUCCESS] User metrics cluster synced to MongoDB Atlas!";
        } catch (Exception e) {
            return "[ERROR] Onboarding failed: " + e.getMessage();
        }
    }
}