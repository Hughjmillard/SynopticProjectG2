const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('Public'));

const indexRouter = require('./Routes/index');
app.use('/', indexRouter);

const secondRouter = require('./Routes/symptoms');
app.use('/symptoms', secondRouter);

const thirdRouter = require('./Routes/contact');
app.use('/contact', thirdRouter);

const fourthRouter = require('./Routes/learning');
app.use('/learning', fourthRouter);

app.listen(port,(error)=>{
    if(error){
        console.log(`error`,error);
    }else{
        console.log(`port is running on ${port}!`);
    }
});

let mysql =require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    // database: "diagnosis"
  });
  
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  // });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
  
//     var query1 = "CREATE TABLE Symptoms (SymptomsID SERIAL PRIMARY KEY, Name VARCHAR(100) NOT NULL, Location VARCHAR(100) NOT NULL)";
//     var query2 = "CREATE TABLE Illness ( IllnessID SERIAL PRIMARY KEY, Name VARCHAR(100) NOT NULL, Severity VARCHAR(50) NOT NULL)";
//     var query3 = "CREATE TABLE SymptomIllness ( SymptomID INT NOT NULL, IllnessID INT NOT NULL, PRIMARY KEY (SymptomID, IllnessID), FOREIGN KEY (SymptomID) REFERENCES Symptoms(SymptomsID), FOREIGN KEY (IllnessID) REFERENCES Illness(IllnessID) )";
//     var query4 = "CREATE TABLE Remedy ( RemedyID SERIAL PRIMARY KEY, Name VARCHAR(100) NOT NULL, Ingredients TEXT NOT NULL, Method TEXT NOT NULL )";
//     var query5 = "CREATE TABLE IllnessRemedy ( RemedyID INT NOT NULL, IllnessID INT NOT NULL, PRIMARY KEY (RemedyID, IllnessID), FOREIGN KEY (RemedyID) REFERENCES Remedy(RemedyID), FOREIGN KEY (IllnessID) REFERENCES Illness(IllnessID) )";
    
//     var query6 = "INSERT INTO Symptoms (SymptomsID, Name, Location) VALUES (1, 'Headache', 'Head'),(2, 'Fever', 'Body'),(3, 'Open Wound', 'Skin'),(4, 'Nausea', 'Stomach'),(5, 'Loss of Appetite', 'Stomach'),(6, 'Night Sweats', 'Body'),(7, 'Vomiting', 'Stomach'),(8, 'Blurred Vision', 'Eyes')";
//     var query7 = "INSERT INTO Illness (IllnessID, Name, Severity) VALUES (1, 'Common Cold', 'Mild'),(2, 'Influenza', 'Moderate'),(3, 'Food Poisoning', 'Severe'),(4, 'Migraine', 'Severe'),(5, 'Chickenpox', 'Moderate'),(6, 'Night Sweats', 'Moderate')";
//     var query8 = "INSERT INTO SymptomIllness (SymptomID, IllnessID) VALUES (1, 1),(2, 1),(5, 1),(6, 1),(2, 2),(7, 2),(4, 2),(6, 2),(4, 3),(7, 3),(5, 3),(1, 4),(8, 4),(4, 4),(2, 5),(6, 6)";
//     var query9 = "INSERT INTO Remedy (RemedyID, Name, Ingredients, Method) VALUES (1, 'Ginger Tea', 'Ginger, Water, Honey', 'Boil ginger in water, add honey'),(2, 'Peppermint Oil', 'Peppermint oil, Water', 'Dilute peppermint oil in water and apply'),(3, 'Hydration', 'Water, Electrolytes', 'Drink frequently'),(4, 'Tepid Sponge Bath', 'Water, Sponge', 'Sponge the body with tepid water'),(5, 'Aloe Vera', 'Aloe Vera Gel', 'Apply aloe vera gel to the wound'),(6, 'Turmeric Paste', 'Turmeric, Water', 'Mix turmeric with water to make a paste and apply'),(7, 'Peppermint Tea', 'Peppermint leaves, Water', 'Boil peppermint leaves in water'),(8, 'Cinnamon Tea', 'Cinnamon, Water, Honey', 'Boil cinnamon in water and add honey'),(9, 'Sage Tea', 'Sage leaves, Water', 'Boil sage leaves in water'),(10, 'Soy Products', 'Tofu, Soy Milk', 'Consume soy products'),(11, 'Mint Tea', 'Mint leaves, Water', 'Boil mint leaves in water'),(12, 'Carrot Juice', 'Carrots', 'Juice the carrots and drink'),(13, 'Bilberry Extract', 'Bilberry, Water', 'Extract bilberry juice and mix with water')";
//     var query10 = "INSERT INTO IllnessRemedy (RemedyID, IllnessID) VALUES (1, 1),(2, 1),(3, 2),(4, 2),(5, 3),(6, 3),(1, 4),(7, 4),(1, 5),(8, 5),(9, 6),(10, 6),(1, 7),(11, 7),(12, 8),(13, 8)";

//     con.query(query1, function (err, result) {
//       if (err) throw err;
//       console.log("Table 'Symptoms' created");
      
//       con.query(query2, function (err, result) {
//         if (err) throw err;
//         console.log("Table 'Illness' created");
        
//         con.query(query3, function (err, result) {
//           if (err) throw err;
//           console.log("Table 'SymptomIllness' created");

//           con.query(query4, function (err, result) {
//             if (err) throw err;
//             console.log("Table 'Remedy' created");

//             con.query(query5, function (err, result) {
//               if (err) throw err;
//               console.log("Table 'IllnessRemedy' created");

//               con.query(query6, function (err, result) {
//                 if (err) throw err;
//                 console.log("Data inserted into 'Symptoms'");

//                 con.query(query7, function (err, result) {
//                   if (err) throw err;
//                   console.log("Data inserted into 'Illness'");

//                   con.query(query8, function (err, result) {
//                     if (err) throw err;
//                     console.log("Data inserted into 'SymptomIllness'");

//                     con.query(query9, function (err, result) {
//                       if (err) throw err;
//                       console.log("Data inserted into 'Remedy'");

//                       con.query(query10, function (err, result) {
//                         if (err) throw err;
//                         console.log("Data inserted into 'IllnessRemedy'");
                        
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
// });

  

  // create the database
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   con.query("CREATE DATABASE diagnosis", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });
  // });


// drop the database if it isnt working
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("drop database diagnosis", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
