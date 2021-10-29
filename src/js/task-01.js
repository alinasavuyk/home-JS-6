const numOtCategoriesAll =  document.querySelectorAll('.item')
console.log('Number of categories:', numOtCategoriesAll.length);

//Animals
const item =document.querySelector('.item')
const nameOtCategoriesAnimals = item.children[0];
console.log('Category:', nameOtCategoriesAnimals.textContent);

const listOfCategoriesAnimals = item.children[1];
const numOtCategoriesAnimals = listOfCategoriesAnimals.children.length
console.log('Elements:', numOtCategoriesAnimals)

//Products
const nameOtCategoriesProducts = item.nextElementSibling.children[0];
console.log('Category:', nameOtCategoriesProducts.textContent);

const listOfCategoriesProducts = categories.children[1].children[1];
const numOtCategoriesProducts = listOfCategoriesProducts.children.length
console.log('Elements:', numOtCategoriesProducts)

//Technologies
const nameOtCategoriesTechnologies = categories.lastElementChild.children[0];
console.log('Category:', nameOtCategoriesTechnologies.textContent);

const listOfCategoriesTechnologies = categories.children[2].children[1];
const numOtCategoriesTechnologies = listOfCategoriesTechnologies.children.length
console.log('Elements:', numOtCategoriesTechnologies)

console.log('')
console.log('/////////Інший варіант/////////')
console.log('')


const itemcategoriesAll = document.querySelectorAll('.item');
console.log('Number of categories:', itemcategoriesAll.length);


itemcategoriesAll.forEach(item => {
  const itemName =  item.firstElementChild.textContent;
   const itemNamber =  item.lastElementChild.childElementCount;
console.log(`Category:`, itemName);
console.log(`Elements:`, itemNamber);
});

    
   
    





