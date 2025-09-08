const activeButton = (id) => {
  const categoryBtn = document.getElementsByClassName("category-btn");
  for (let btn of categoryBtn) {
    btn.classList.remove("active");
  }

  document.getElementById(`active-btn-${id}`).classList.add("active");
};

const manageSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner-container").classList.remove("hidden");
    document.getElementById("card-category-section").classList.add("hidden");
  } else {
    document.getElementById("spinner-container").classList.add("hidden");
    document.getElementById("card-category-section").classList.remove("hidden");
  }
};

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const loadAllPlants = () => {
  manageSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
};
const loadPlantsCategories = (id) => {
  manageSpinner(true);
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      activeButton(id);
      displayPlantsCategories(data.plants);
     
    });
};

const loadPlantsDetail = (id) => {
  console.log(id);
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => displayPlantsDetail(data.plants));
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("Categories-container");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="active-btn-${category.id}" onclick="loadPlantsCategories(${category.id})" class="text-[#1F2937] mb-3 w-full text-left category-btn">${category.category_name}</button>
    `;
    categoryContainer.appendChild(div);
  });
};

const displayAllPlants = (plants) => {
  const cardContainer = document.getElementById("category-card-container");
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
     <div class="bg-white rounded-lg p-4 space-y-4 ">
                <img class="h-[180px] w-full rounded-lg object-cover" src='${plant.image}' alt="">
                <h4 onclick="loadPlantsDetail(${plant.id})" class="font-semibold text-sm">${plant.name}</h4>
                <p class="text-xs">${plant.description}</p>
                <div class="flex justify-between items-center">
                <button class="bg-[#DCFCE7] text-[#15803D] p-2 rounded-full text-sm">${plant.category}</button>
                <p><span>ট</span>${plant.price}</p>
                </div>
                <button class="w-full p-2 rounded-full bg-[#15803D] text-white">Add to card</button>

            </div>
    `;
    cardContainer.appendChild(cardDiv);
  });
  manageSpinner(false);
  return
};

const displayPlantsCategories = (categoryPlants) => {
    console.log(categoryPlants)
  const cardContainer = document.getElementById("category-card-container");
  cardContainer.innerHTML = "";
  categoryPlants.forEach((categoryPlant) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
     <div class="bg-white rounded-lg p-4 space-y-4 ">
                <img class="h-[180px] w-full rounded-lg object-cover" src='${categoryPlant.image}' alt="">
                <h4 onclick="loadPlantsDetail(${categoryPlant.id})" class="font-semibold text-sm">${categoryPlant.name}</h4>
                <p class="text-xs">${categoryPlant.description}</p>
                <div class="flex justify-between items-center">
                <button class="bg-[#DCFCE7] text-[#15803D] p-2 rounded-full text-sm">${categoryPlant.category}</button>
                <p><span>ট</span>${categoryPlant.price}</p>
                </div>
                <button class="w-full p-2 rounded-full bg-[#15803D] text-white">Add to card</button>

            </div>
    `;
    cardContainer.appendChild(cardDiv);
     
  });
 return manageSpinner(false)
  
};

const displayPlantsDetail = (details) => {
  console.log(details);
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML=''
  const detailDiv = document.createElement("div");
  detailDiv.innerHTML = `
<div class="space-y-4">
            <h1 class="font-semibold text-sm">${details.name}</h1>
            <img class="h-[180px] w-full object-cover rounded-lg" src='${details.image}' alt="">
            <h2 class=" text-sm"><span class="font-bold">Category:</span>${details.category}</h2>
            <p class="text-sm"><span class="font-bold">Price:</span><span>ট</span>${details.price}</p>
            <p class="text-xs"><span class="font-bold">Description:</span>${details.description}</p>
          </div>


`;
  modalContainer.appendChild(detailDiv);
  document.getElementById("my_modal_5").showModal();
};

loadCategories();
loadAllPlants();
