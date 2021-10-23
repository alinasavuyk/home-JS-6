function liElementIngredient(ingredients) {
  const itemElementIngredient = document.createElement('li');
  itemElementIngredient.textContent = ingredients;
  itemElementIngredient.classList.add(itemElementIngredient);
  return itemElementIngredient;
}
