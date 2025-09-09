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



const loadAllPlants = () => {
  manageSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      displayAllPlants(data.plants);
    });
};

loadAllPlants();

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const loadPlantsCategories = (id) => {
  manageSpinner(true);
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      activeButton(id);
      displayAllPlants(data.plants);
    });
};

const loadPlantsDetail = (id) => {
  console.log(id);
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayPlantsDetail(data.plants);
    });
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("Categories-container");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="active-btn-${category.id}" onclick="loadPlantsCategories(${category.id})" class="text-[#1F2937] w-full text-left category-btn hover:bg-[#15803D] hover:text-white p-2 rounded-md text-sm font-medium">${category.category_name}</button>
    `;
    categoryContainer.appendChild(div);
  });
};

const displayAllPlants = (plants) => {
  const cardContainer = document.getElementById("category-card-container");
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    // console.log(plant)
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
     <div id="${plant.id}" class="bg-white rounded-lg p-4 space-y-4 shadow-md">
                <img class="h-[180px] w-full rounded-lg object-cover" src='${plant.image}' alt="">
                <h4 onclick="loadPlantsDetail(${plant.id})" class="font-semibold text-sm">${plant.name}</h4>
                <p class="h-[65px] text-xs">${plant.description}</p>
                <div class="flex justify-between items-center">
                <button class="bg-[#DCFCE7] text-[#15803D] p-2 rounded-full text-xs">${plant.category}</button>
                <p class="font-semibold text-sm text-[#15803D]">ট<span class="text-xl">${plant.price}</span></p>
                </div>
                <button class="add-cart-btn w-full p-2 rounded-full bg-[#15803D] text-white text-sm font-semibold">Add to cart</button>

            </div>
    `;
    cardContainer.appendChild(cardDiv);
  });

  manageSpinner(false);
  return;
};


const displayPlantsDetail = (details) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = "";
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


let addToCart = [];
const cardContainer = document.getElementById("category-card-container");
const addToCartContainer = document.getElementById("add-to-cart-container");
cardContainer.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Add to cart") {
    handleAddToCart(e);
  }

});

const handleAddToCart = (e) => {
  const cartTitle = e.target.parentNode.children[1].innerText;
  const cartPrice =
    e.target.parentNode.children[3].children[1].children[0].innerText;
  const id = e.target.parentNode.id;

  addToCart.push({
    title: cartTitle,
    price: cartPrice,
    id: id,
  });
  
  showAddToCart(addToCart);
  handleTotalPrice(addToCart);
};
const showAddToCart = (addToCart) => {
  const addToCartContainer = document.getElementById("add-to-cart-container");
  addToCartContainer.innerHTML = "";

  addToCart.forEach((cart) => {
    const addCartDiv = document.createElement("div");
    addCartDiv.innerHTML = `
<div class="bg-[#F0FDF4] p-4 md:p-2 m-2 rounded-lg flex justify-between items-center shadow-md">
<div><h2 class="font-semibold text-lg md:text-sm ">${cart.title}</h2>
<p class="text-xs">ট<span class="text-lg md:text-sm">${cart.price}</span></p></div>
<div id="deleteBtn" onclick="handleDeleteCart('${cart.id}')"><i class="fa-solid fa-xmark"></i></div>
</div>
 

`;
    addToCartContainer.appendChild(addCartDiv);
  });
};

const handleDeleteCart = (deleteCartId) => {
  const filteredAddToCart = addToCart.filter(
    (cart) => cart.id !== deleteCartId
  );
  addToCart = filteredAddToCart;
  showAddToCart(addToCart);
};

const handleTotalPrice = (addToCart) => {
  let totalPrice = 0;
  for (let cart of addToCart) {
    let price = parseInt(cart.price);
    totalPrice = totalPrice + price;
    document.getElementById("totalPrice").innerText = totalPrice;
  }
};

addToCartContainer.addEventListener("click", () => {
   const totalPrice= addToCart.reduce((acc,tree)=>{
    return acc + Number(tree.price);
  },0)
  
  document.getElementById("totalPrice").innerText = totalPrice;
});

loadCategories();
