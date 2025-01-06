```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("65321654321654321")}, {"$inc": {"counter": 1}});
```