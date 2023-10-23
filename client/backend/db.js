// const mongoose = require('mongoose');

// // const mongoURI = 'mongodb+srv://Zulquarnain:zulquar20112003@cluster0.fvihrvg.mongodb.net/gofoodmern?retryWrites=true&w=majority'
// const mongoURI = 'mongodb://Zulquarnain:zulquar20112003@ac-oeqp9l2-shard-00-00.fvihrvg.mongodb.net:27017,ac-oeqp9l2-shard-00-01.fvihrvg.mongodb.net:27017,ac-oeqp9l2-shard-00-02.fvihrvg.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-t5w81h-shard-0&authSource=admin&retryWrites=true&w=majority'
// // var mongoDB = async () => {
// //     await mongoose.connect(mongoURI, { useNewUrlParser: true });
// //     console.log('connected');
// //     const fetched_data = await mongoose.connection.db.collection("food_items");

// //     fetched_data.find().toArray(function (err, data) {
// //         if (err) console.log(err);
// //         else {
// //             global.food_items = data;
// //             console.log(global.food_items);
// //         }
// //     });
// // }



// const mongoDB = async () => {
//     // await mongoose.connect(mongoURI);
//     // console.log("Connected to MongoDB successfully");

//     mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//     const db = mongoose.connection;

//     db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//     db.once('open', () => {
//         // The database connection is open, you can now access the collection
//         fetchData();
//     });

//     const fetchData = async () => {
//         try {
//           const collection = db.collection('food_items');
//         //   const collection = db.collection('food_items');
//           const data = await collection.find({}).toArray();
//           console.log('Fetched data:', data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         } finally {
//           // Close the connection when done (optional)
//           mongoose.connection.close();
//         }
//       };

//     // const fetch_data = mongoose.connection.db.collection("food_items").find({});
//     // const results = await fetch_data.toArray();

//     // if (results.length > 0) {
//     //     const foodCategory = mongoose.connection.db.collection("food_category").find({});
//     //     const result1 = await foodCategory.toArray();

//     //     if (result1.length > 0) {
//     //         result1.forEach((innerResult, j) => {
//     //             global.food_category = result1;
//     //         });
//     //     } else {
//     //         console.log('No listing found');
//     //     }
//     //     global.food_items = results;
//     // } else {
//     //     console.log('No listings found');
//     // }
// };

// // mongoDB();

// module.exports = mongoDB();
