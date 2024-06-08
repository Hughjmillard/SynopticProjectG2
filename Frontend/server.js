const bodyParser = require('body-parser');
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

let mysql =require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "correctUsername",
    password: "correctPassword",
    database: "diagnosis"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  function createDatabase() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("CREATE DATABASE diagnosis", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
    });
  }
  function dropDatabase() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("DROP DATABASE diagnosis", function (err, result) {
        if (err) throw err;
        console.log("Database dropped");
      });
    });
  }

  function createTables() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
  
      const queries = [
        "CREATE TABLE Symptoms (SymptomsID INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(100) NOT NULL, Location VARCHAR(100) NOT NULL)",
        "CREATE TABLE Illness (IllnessID INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(100) NOT NULL, Severity VARCHAR(50) NOT NULL)",
        "CREATE TABLE SymptomIllness (SymptomID INT NOT NULL, IllnessID INT NOT NULL, PRIMARY KEY (SymptomID, IllnessID), FOREIGN KEY (SymptomID) REFERENCES Symptoms(SymptomsID), FOREIGN KEY (IllnessID) REFERENCES Illness(IllnessID))",
        "CREATE TABLE Remedy (RemedyID INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(100) NOT NULL, Ingredients TEXT NOT NULL, Method TEXT NOT NULL)",
        "CREATE TABLE IllnessRemedy (RemedyID INT NOT NULL, IllnessID INT NOT NULL, PRIMARY KEY (RemedyID, IllnessID), FOREIGN KEY (RemedyID) REFERENCES Remedy(RemedyID), FOREIGN KEY (IllnessID) REFERENCES Illness(IllnessID))"
      ];
  
      queries.forEach((query, index) => {
        con.query(query, function (err, result) {
          if (err) throw err;
          console.log(`Table ${index + 1} created`);
        });
      });
    });
  }
  
  
  function insertData() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
  
      const queries = [
        "INSERT INTO Symptoms (SymptomsID, Name, Location) VALUES (1, 'Headache', 'Head'),(2, 'Fever', 'Body'),(3, 'Open Wound', 'Skin'),(4, 'Nausea', 'Stomach'),(5, 'Loss of Appetite', 'Stomach'),(6, 'Night Sweats', 'Body'),(7, 'Vomiting', 'Stomach'),(8, 'Blurred Vision', 'Eyes')",
        "INSERT INTO Illness (IllnessID, Name, Severity) VALUES (1, 'Common Cold', 'Mild'),(2, 'Influenza', 'Moderate'),(3, 'Food Poisoning', 'Severe'),(4, 'Migraine', 'Severe'),(5, 'Chickenpox', 'Moderate'),(6, 'Night Sweats', 'Moderate')",
        "INSERT INTO SymptomIllness (SymptomID, IllnessID) VALUES (1, 1),(2, 1),(5, 1),(6, 1),(2, 2),(7, 2),(4, 2),(6, 2),(4, 3),(7, 3),(5, 3),(1, 4),(8, 4),(4, 4),(2, 5),(6, 6)",
        "INSERT INTO Remedy (RemedyID, Name, Ingredients, Method) VALUES (1, 'Ginger Tea', 'Ginger, Water, Honey', 'Boil ginger in water, add honey'),(2, 'Peppermint Oil', 'Peppermint oil, Water', 'Dilute peppermint oil in water and apply'),(3, 'Hydration', 'Water, Electrolytes', 'Drink frequently'),(4, 'Tepid Sponge Bath', 'Water, Sponge', 'Sponge the body with tepid water'),(5, 'Aloe Vera', 'Aloe Vera Gel', 'Apply aloe vera gel to the wound'),(6, 'Turmeric Paste', 'Turmeric, Water', 'Mix turmeric with water to make a paste and apply'),(7, 'Peppermint Tea', 'Peppermint leaves, Water', 'Boil peppermint leaves in water'),(8, 'Cinnamon Tea', 'Cinnamon, Water, Honey', 'Boil cinnamon in water and add honey'),(9, 'Sage Tea', 'Sage leaves, Water', 'Boil sage leaves in water'),(10, 'Soy Products', 'Tofu, Soy Milk', 'Consume soy products'),(11, 'Mint Tea', 'Mint leaves, Water', 'Boil mint leaves in water'),(12, 'Carrot Juice', 'Carrots', 'Juice the carrots and drink'),(13, 'Bilberry Extract', 'Bilberry, Water', 'Extract bilberry juice and mix with water')",
        "INSERT INTO IllnessRemedy (RemedyID, IllnessID) VALUES (1, 1),(2, 1),(3, 2),(4, 2)"
      ];
  
      queries.forEach((query, index) => {
        con.query(query, function (err, result) {
          if (err) throw err;
          console.log(`Data inserted into table ${index + 1}`);
        });
      });
    });
  }
  
  // Uncomment the functions you need to run
  //createDatabase();
  //dropDatabase();
  //createTables();
  //insertData();




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/queryIllnesses', (req, res) => {
  const selectedSymptoms = req.body.symptoms || [];

  if (selectedSymptoms.length === 0) {
    return res.send('No symptoms selected.');
  }

  // Convert the selectedSymptoms array to a list of numbers
  const symptomIds = selectedSymptoms.map(id => mysql.escape(parseInt(id))).join(',');

  const query = `
    SELECT Name as illnessName 
    FROM Illness 
    WHERE IllnessID IN (
      SELECT IllnessID 
      FROM SymptomIllness 
      WHERE SymptomID IN (${symptomIds})
    )
  `;

  con.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/getSymptoms', (req, res) => {
  con.query('SELECT * FROM Symptoms', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});