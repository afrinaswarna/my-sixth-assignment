const activeButton=(id)=>{
 const categoryBtn = document.getElementsByClassName('category-btn') 
 for(let btn of categoryBtn){
 btn.classList.remove('active')
 }
   
  document.getElementById(`active-btn-${id}`).classList.add('active')
}


const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}

const loadAllPlants = ()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res=>res.json())
    .then(data=>displayAllPlants(data.plants))
}



const displayCategories=(categories)=>{
   const categoryContainer = document.getElementById('Categories-container')
   categories.forEach(category=>{
    const div = document.createElement('div')
    div.innerHTML=`
    <button id="active-btn-${category.category_name}" onclick="activeButton('${category.category_name}')" class="text-[#1F2937] mb-3 w-full text-left category-btn">${category.category_name}</button>
    `
    categoryContainer.appendChild(div)
   })
}

const displayAllPlants=(plants)=>{
    const cardContainer = document.getElementById('category-card-container')
    cardContainer.innerHTML=''
    plants.forEach(plant=>{

        const cardDiv=document.createElement('div')
    cardDiv.innerHTML=`
     <div class="bg-white rounded-lg p-4 space-y-4 ">
                <img class="h-[180px] w-full rounded-lg" src='${plant.image}' alt="">
                <h4 class="font-semibold text-sm">${plant.name}</h4>
                <p class="text-xs">${plant.description}</p>
                <div class="flex justify-between items-center">
                <button class="bg-[#DCFCE7] text-[#15803D] p-2 rounded-full text-sm">${plant.category}</button>
                <p><span>ট</span>${plant.price}</p>
                </div>
                <button class="w-full p-2 rounded-full bg-[#15803D] text-white">Add to card</button>

            </div>
    `
    cardContainer.appendChild(cardDiv)

    })
    
}



loadCategories()
loadAllPlants()