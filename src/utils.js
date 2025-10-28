export const filterByType = (pokemonList, type) => {
  return pokemonList.filter((pokemon) => pokemon.type === type);
};

export const getPokemonNames = (pokemonList) => {
  return pokemonList.map((pokemon) => pokemon.name);
};

export const getStrongestPokemon = (pokemonList) => {
  const sortedByAttack = structuredClone(pokemonList).sort(
    (a, b) => b.attack - a.attack
  );
  const highestAttack = sortedByAttack[0].attack;
  return sortedByAttack.filter((pokemon) => pokemon.attack === highestAttack);
};

export const sortByName = (pokemonList) => {
  return structuredClone(pokemonList).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  // Avoid mutating the original array by using spread operator
  // spread operator copies the array therefore original array is not mutated
  // LocaleCompare helps to sort strings in alphabetical order
  // structuredClone creates a copy of the original array even with nested objects
};

export const calculateAverageHP = (pokemonList) => {
  if (pokemonList.length === 0) return 0;
  const totalHP = pokemonList.reduce((sum, pokemon) => sum + pokemon.hp, 0);
  return totalHP / pokemonList.length;
};
