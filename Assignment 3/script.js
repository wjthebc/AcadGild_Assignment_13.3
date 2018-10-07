//sets var that includes as a string 2 students each properties, an array, and sub properties
var jsonString = '[{"name":"Morty Smith", "age":14, "weight":130, "friends":["rick", "mr.meeseeks"], "college":{"collegeName":"Intergallictic University", "collegeCity":"The Citadel of Ricks"}}, {"name":"Jessica", "age":15, "weight":110, "friends":["summer", "frank"], "college":{"collegeName":"Monmouth University", "collegeCity":"Long Branch"}}]';

//parses var jsonString and converts to json object, stores in new var jsonObject
var jsonObject = JSON.parse(jsonString);
