export default function Card(name, type, hp, attack, defense) {
  return `<section>
  <h2>${name}</h2>
  <ul>
    <li>Type: ${type}</li>
    <li>HP: ${hp}</li>
    <li>Attack: ${attack}</li>
    <li>Defense: ${defense}</li>
  </ul>
</section>`;
}
