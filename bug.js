```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("65321654321654321")}, {"$inc": {"counter": "1"}});
```