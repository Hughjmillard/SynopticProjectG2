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
            "CREATE TABLE Symptoms (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL)",
            "CREATE TABLE Illness (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, explanation TEXT NOT NULL)",
            "CREATE TABLE SymptomIllness (symptom_id INT NOT NULL, illness_id INT NOT NULL, PRIMARY KEY (symptom_id, illness_id), FOREIGN KEY (symptom_id) REFERENCES Symptoms(id), FOREIGN KEY (illness_id) REFERENCES Illness(id))",
            "CREATE TABLE Remedies (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL)",
            "CREATE TABLE IllnessRemedy (remedy_id INT NOT NULL, illness_id INT NOT NULL, PRIMARY KEY (remedy_id, illness_id), FOREIGN KEY (remedy_id) REFERENCES Remedies(id), FOREIGN KEY (illness_id) REFERENCES Illness(id))"
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
          // Insert data into Symptoms
          "INSERT INTO Symptoms (name) VALUES ('Headache')",
          "INSERT INTO Symptoms (name) VALUES ('Fever')",
          "INSERT INTO Symptoms (name) VALUES ('Cough')",
          "INSERT INTO Symptoms (name) VALUES ('Sore Throat')",
          "INSERT INTO Symptoms (name) VALUES ('Fatigue')",
          "INSERT INTO Symptoms (name) VALUES ('Runny Nose')",
          "INSERT INTO Symptoms (name) VALUES ('Muscle Pain')",
          "INSERT INTO Symptoms (name) VALUES ('Chills')",
          "INSERT INTO Symptoms (name) VALUES ('Shortness of Breath')",
          "INSERT INTO Symptoms (name) VALUES ('Nausea')",
          "INSERT INTO Symptoms (name) VALUES ('Vomiting')",
          "INSERT INTO Symptoms (name) VALUES ('Diarrhea')",
          "INSERT INTO Symptoms (name) VALUES ('Loss of Taste')",
          "INSERT INTO Symptoms (name) VALUES ('Loss of Smell')",
          "INSERT INTO Symptoms (name) VALUES ('Chest Pain')",

          // Insert data into Illness
          "INSERT INTO Illness (name, explanation) VALUES ('Common Cold', 'A viral infection of your nose and throat (upper respiratory tract).')",
          "INSERT INTO Illness (name, explanation) VALUES ('Flu', 'An infectious disease caused by the influenza virus.')",
          "INSERT INTO Illness (name, explanation) VALUES ('COVID-19', 'An infectious disease caused by the SARS-CoV-2 virus.')",
          "INSERT INTO Illness (name, explanation) VALUES ('Migraine', 'A primary headache disorder characterized by recurrent headaches.')",
          "INSERT INTO Illness (name, explanation) VALUES ('Strep Throat', 'A bacterial infection that may cause a sore, scratchy throat.')",
          "INSERT INTO Illness (name, explanation) VALUES ('Pneumonia', 'An infection that inflames the air sacs in one or both lungs.')",
          "INSERT INTO Illness (name, explanation) VALUES ('Bronchitis', 'An inflammation of the lining of your bronchial tubes.')",
          "INSERT INTO Illness (name, explanation) VALUES ('Asthma', 'A condition in which your airways narrow and swell and may produce extra mucus.')",
          "INSERT INTO Illness (name, explanation) VALUES ('Gastroenteritis', 'An intestinal infection marked by watery diarrhea, abdominal cramps, nausea or vomiting, and sometimes fever.')",
          "INSERT INTO Illness (name, explanation) VALUES ('Sinusitis', 'An inflammation or swelling of the tissue lining the sinuses.')",

          // Insert data into SymptomIllness
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (1, 1)", // Headache -> Common Cold
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (2, 1)", // Fever -> Common Cold
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (3, 1)", // Cough -> Common Cold
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (4, 1)", // Sore Throat -> Common Cold
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (2, 2)", // Fever -> Flu
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (3, 2)", // Cough -> Flu
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (5, 2)", // Fatigue -> Flu
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (2, 3)", // Fever -> COVID-19
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (3, 3)", // Cough -> COVID-19
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (5, 3)", // Fatigue -> COVID-19
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (1, 4)", // Headache -> Migraine
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (4, 5)", // Sore Throat -> Strep Throat
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (6, 1)", // Runny Nose -> Common Cold
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (7, 2)", // Muscle Pain -> Flu
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (8, 2)", // Chills -> Flu
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (9, 6)", // Shortness of Breath -> Pneumonia
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (3, 7)", // Cough -> Bronchitis
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (10, 9)", // Nausea -> Gastroenteritis
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (11, 9)", // Vomiting -> Gastroenteritis
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (12, 9)", // Diarrhea -> Gastroenteritis
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (13, 3)", // Loss of Taste -> COVID-19
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (14, 3)", // Loss of Smell -> COVID-19
          "INSERT INTO SymptomIllness (symptom_id, illness_id) VALUES (15, 6)", // Chest Pain -> Pneumonia

          // Insert data into Remedies
          "INSERT INTO Remedies (name) VALUES ('Rest')",
          "INSERT INTO Remedies (name) VALUES ('Hydration')",
          "INSERT INTO Remedies (name) VALUES ('Pain Relievers')",
          "INSERT INTO Remedies (name) VALUES ('Antibiotics')",
          "INSERT INTO Remedies (name) VALUES ('Cough Syrup')",
          "INSERT INTO Remedies (name) VALUES ('Inhalers')",
          "INSERT INTO Remedies (name) VALUES ('Antihistamines')",
          "INSERT INTO Remedies (name) VALUES ('Decongestants')",
          "INSERT INTO Remedies (name) VALUES ('Nasal Sprays')",
          "INSERT INTO Remedies (name) VALUES ('Electrolyte Solutions')",

          // Insert data into IllnessRemedy
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (1, 1)", // Rest -> Common Cold
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (2, 1)", // Hydration -> Common Cold
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (3, 4)", // Pain Relievers -> Migraine
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (4, 5)", // Antibiotics -> Strep Throat
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (5, 2)", // Cough Syrup -> Flu
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (5, 1)", // Cough Syrup -> Common Cold
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (1, 3)", // Rest -> COVID-19
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (2, 3)", // Hydration -> COVID-19
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (4, 6)", // Antibiotics -> Pneumonia
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (6, 8)", // Inhalers -> Asthma
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (7, 7)", // Antihistamines -> Bronchitis
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (8, 10)", // Decongestants -> Sinusitis
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (9, 10)", // Nasal Sprays -> Sinusitis
          "INSERT INTO IllnessRemedy (remedy_id, illness_id) VALUES (10, 9)" // Electrolyte Solutions -> Gastroenteritis
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

  const symptomIds = selectedSymptoms.map(id => mysql.escape(parseInt(id))).join(',');

  const query = `
    SELECT Illness.name as illnessName, Illness.explanation as illnessExplain
    FROM Illness 
    WHERE Illness.id IN (
      SELECT SI.illness_id
      FROM SymptomIllness SI
      WHERE SI.symptom_id IN (${symptomIds})
      GROUP BY SI.illness_id
      HAVING COUNT(DISTINCT SI.symptom_id) = ${selectedSymptoms.length}
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