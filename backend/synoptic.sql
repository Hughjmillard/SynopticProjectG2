Set search_path TO "Synoptic", public;
-- CREATE TABLE Symptoms (
--     SymptomsID SERIAL PRIMARY KEY,
--     Name VARCHAR(100) NOT NULL,
--     Location VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE Illness (
--     IllnessID SERIAL PRIMARY KEY,
--     Name VARCHAR(100) NOT NULL,
--     Severity VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE SymptomIllness (
--     SymptomID INT NOT NULL,
--     IllnessID INT NOT NULL,
--     PRIMARY KEY (SymptomID, IllnessID),
--     FOREIGN KEY (SymptomID) REFERENCES Symptoms(SymptomsID),
--     FOREIGN KEY (IllnessID) REFERENCES Illness(IllnessID)
-- );

-- CREATE TABLE Remedy (
--     RemedyID SERIAL PRIMARY KEY,
--     Name VARCHAR(100) NOT NULL,
--     Ingredients TEXT NOT NULL,
--     Method TEXT NOT NULL
-- );

-- CREATE TABLE IllnessRemedy (
--     RemedyID INT NOT NULL,
--     IllnessID INT NOT NULL,
--     PRIMARY KEY (RemedyID, IllnessID),
--     FOREIGN KEY (RemedyID) REFERENCES Remedy(RemedyID),
--     FOREIGN KEY (IllnessID) REFERENCES Illness(IllnessID)
-- );

-- INSERT INTO Symptoms (SymptomsID, Name, Location) VALUES
-- (1, 'Headache', 'Head'),
-- (2, 'Fever', 'Body'),
-- (3, 'Open Wound', 'Skin'),
-- (4, 'Nausea', 'Stomach'),
-- (5, 'Loss of Appetite', 'Stomach'),
-- (6, 'Night Sweats', 'Body'),
-- (7, 'Vomiting', 'Stomach'),
-- (8, 'Blurred Vision', 'Eyes');

-- INSERT INTO Illness (IllnessID, Name, Severity) VALUES
-- (1, 'Headache', 'Mild'),
-- (2, 'Fever', 'Moderate'),
-- (3, 'Open Wound', 'Severe'),
-- (4, 'Nausea', 'Moderate'),
-- (5, 'Loss of Appetite', 'Mild'),
-- (6, 'Night Sweats', 'Moderate'),
-- (7, 'Vomiting', 'Moderate'),
-- (8, 'Blurred Vision', 'Severe');

-- INSERT INTO SymptomIllness (SymptomID, IllnessID) VALUES
-- (1, 1),
-- (2, 2),
-- (3, 3),
-- (4, 4),
-- (5, 5),
-- (6, 6),
-- (7, 7),
-- (8, 8);

-- INSERT INTO Remedy (RemedyID, Name, Ingredients, Method) VALUES
-- (1, 'Ginger Tea', 'Ginger, Water, Honey', 'Boil ginger in water, add honey'),
-- (2, 'Peppermint Oil', 'Peppermint oil, Water', 'Dilute peppermint oil in water and apply'),
-- (3, 'Hydration', 'Water, Electrolytes', 'Drink frequently'),
-- (4, 'Tepid Sponge Bath', 'Water, Sponge', 'Sponge the body with tepid water'),
-- (5, 'Aloe Vera', 'Aloe Vera Gel', 'Apply aloe vera gel to the wound'),
-- (6, 'Turmeric Paste', 'Turmeric, Water', 'Mix turmeric with water to make a paste and apply'),
-- (7, 'Peppermint Tea', 'Peppermint leaves, Water', 'Boil peppermint leaves in water'),
-- (8, 'Cinnamon Tea', 'Cinnamon, Water, Honey', 'Boil cinnamon in water and add honey'),
-- (9, 'Sage Tea', 'Sage leaves, Water', 'Boil sage leaves in water'),
-- (10, 'Soy Products', 'Tofu, Soy Milk', 'Consume soy products'),
-- (11, 'Mint Tea', 'Mint leaves, Water', 'Boil mint leaves in water'),
-- (12, 'Carrot Juice', 'Carrots', 'Juice the carrots and drink'),
-- (13, 'Bilberry Extract', 'Bilberry, Water', 'Extract bilberry juice and mix with water');

-- INSERT INTO IllnessRemedy (RemedyID, IllnessID) VALUES
-- (1, 1),
-- (2, 1),
-- (3, 2),
-- (4, 2),
-- (5, 3),
-- (6, 3),
-- (1, 4),
-- (7, 4),
-- (1, 5),
-- (8, 5),
-- (9, 6),
-- (10, 6),
-- (1, 7),
-- (11, 7),
-- (12, 8),
-- (13, 8);

Select* From symptoms