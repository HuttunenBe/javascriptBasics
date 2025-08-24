// 10-render-list → Mapping arrays to JSX

function GameList() {
  // Create an array
  const games = ["Football", "Basketball", "Hockey"];

  return (
    // Return UI
    <ul>
      {games.map(
        (
          game,
          index // Map over games array
        ) => (
          <li key={index}>{game}</li> // Display each game
        )
      )}
    </ul>
  );
} // Key is required for React to track items

export default GameList;

function FruitsList() {
  const fruits = ["Banana", "Apple", "Kiwi"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// 11-add-to-list → Adding items dynamically

// 12-remove-item → Removing items from a list

// 13-conditional-rendering → Show content based on state
