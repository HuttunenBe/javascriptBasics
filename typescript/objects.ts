interface Movie {
  name: string;
  rating: number;
  filmLocation?: string;
}

const movies: any = {
  name: "Matrix",
  rating: 10000,
};

console.log(movies.name);
console.log(movies.rating);

// Dot & bracket notation
console.log(movies["name"]);
console.log(movies["filmLocation"]);

// Update properties
movies.name = "Star Wars";
movies.filmLocation = "New York";
movies.filmLenght = 200;

// Add & delete properties
movies.director = "Beniitta";
delete movies.director;
delete movies["director"];

// Check property existence
console.log("name" in movies);
console.log("year" in movies);

// Extract keys, values, entries
console.log(Object.keys(movies));
console.log(Object.values(movies));
console.log(Object.entries(movies));
