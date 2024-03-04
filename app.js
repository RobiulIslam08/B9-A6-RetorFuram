
const cardContainer = document.getElementById('card-container')
const itemContainer = document.getElementById('item-container')
const latestCardContainer = document.getElementById('latest-card-container')
let countNumber = 1;
let load = document.getElementById('loading');

const allPost = async () => {

  load.classList.remove('hidden')
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  const data = await res.json();
  //console.log(data.posts)
  data.posts.forEach(item => {
    const card = document.createElement('div')

    const badgeClass = item.isActive ? "badge-accent" : "badge-error"


    card.innerHTML = ` <div class="rounded-lg lg:w-[100%] mb-[20px] mt-10 bg-[#7D7DFC1A] w-full flex shadow-xl">
        <!-- profile -->
        <div class=" w-[30%] lg:w-[15%] lg:p-5 p-0 lg:mt-0 lg:ml-0 mt-5 ml-2">
          <div class="indicator">
             <span class="indicator-item badge ${badgeClass}"></span>
            <img src=${item.image} alt="" class="grid rounded-xl lg:h-[72px] lg:w-[72px] h-[60px] w-[60px] bg-base-300 place-items-center">
          </div>
        </div>
        <!-- details -->
        <div class="w-[100%]  p-5">

          <!-- 1st -->
          <div class="text-sm font-inter font-medium text-[#12132DCC] flex gap-7 mb-[12px]">
            <h1># <span >${item.category}</span></h1>
            <h1>Author:${item.author.name}</h1>
          </div>

          <!-- 2nd heading-->
          <h1 class="font-mulish text-xl font-bold text-[#12132D] mb-[17px]">${item.title}</h1>

          <!-- 3rd -->
          <p class="text-[#12132D99] text-base font-inter font-normal mb-[44px]">${item.description}</p>

        

          <!-- 4th icon -->
          <div class="flex justify-between">
           <div class="flex lg:gap-8 gap-3">
            <div class="flex gap-2 items-center">
            <i class="fa-regular fa-comment"></i>
              <p class="text-[#12132D99] text-base font-inter font-normal">${item.comment_count}</p>
            </div>
            <div  class="flex gap-2 justify-center items-center">
            <i class="fa-regular fa-eye"></i>
              <p class="text-[#12132D99] text-base font-inter font-normal">${item.view_count}</p>
            </div>
            <div  class="flex gap-2 items-center">
            <i class="fa-regular fa-clock"></i>
              <p class="text-[#12132D99] text-base font-inter font-normal"><span>${item.posted_time}</span> min</p>
            </div>
           </div>
           <div class="flex justify-center items-center">
            <button onclick="addItem('${item.title}', '${item.view_count}')"  class="bg-[#10B981] px-2 rounded-full"><i class="fa-regular fa-envelope-open text-white"></i></button>
           </div>

          </div> 
        </div>
      </div>`
    cardContainer.appendChild(card)
    load.classList.add('hidden')

  })
}

const singlePost = async (id) => {

  load.classList.remove('hidden')

  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`)
  const data = await res.json();
  cardContainer.innerText = ''
  //console.log(data.posts)
  data.posts.forEach(item => {
    const card = document.createElement('div')

    const badgeClass = item.isActive ? "badge-accent" : "badge-error"


    card.innerHTML = `  <div class="rounded-lg lg:w-[100%] mb-[20px] bg-[#7D7DFC1A] w-full flex shadow-xl">
      <!-- profile -->
      <div class=" w-[30%] lg:w-[15%] lg:p-5 p-0 lg:mt-0 lg:ml-0 mt-5 ml-2">
        <div class="indicator">
           <span class="indicator-item badge ${badgeClass}"></span>
          <img src=${item.image} alt="" class="grid rounded-xl lg:h-[72px] lg:w-[72px] h-[60px] w-[60px] bg-base-300 place-items-center">
        </div>
      </div>
      <!-- details -->
      <div class="w-[100%]  p-5">

        <!-- 1st -->
        <div class="text-sm font-inter font-medium text-[#12132DCC] flex gap-7 mb-[12px]">
          <h1># <span >${item.category}</span></h1>
          <h1>Author:${item.author.name}</h1>
        </div>

        <!-- 2nd heading-->
        <h1 class="font-mulish text-xl font-bold text-[#12132D] mb-[17px]">${item.title}</h1>

        <!-- 3rd -->
        <p class="text-[#12132D99] text-base font-inter font-normal mb-[44px]">${item.description}</p>

      

        <!-- 4th icon -->
        <div class="flex justify-between">
         <div class="flex lg:gap-8 gap-3">
          <div class="flex gap-2 items-center">
          <i class="fa-regular fa-comment"></i>
            <p class="text-[#12132D99] text-base font-inter font-normal">${item.comment_count}</p>
          </div>
          <div  class="flex gap-2 justify-center items-center">
          <i class="fa-regular fa-eye"></i>
            <p class="text-[#12132D99] text-base font-inter font-normal">${item.view_count}</p>
          </div>
          <div  class="flex gap-2 items-center">
          <i class="fa-regular fa-clock"></i>
            <p class="text-[#12132D99] text-base font-inter font-normal"><span>${item.posted_time}</span> min</p>
          </div>
         </div>
         <div class="flex justify-center items-center">
          <button onclick="addItem('${item.title}', '${item.view_count}')"  class="bg-[#10B981] px-2 rounded-full"><i class="fa-regular fa-envelope-open text-white"></i></button>
         </div>

        </div>


      </div>
    </div>`
    cardContainer.appendChild(card)
    load.classList.add('hidden')
  })


}


load.classList.remove('hidden')
setTimeout(() => {
  allPost()
  // singlePost()

}, 2000);


// allPost() 
function addItem(title, view) {
  console.log(title)
  console.log(view)
  let count = document.getElementById('count')
  count.innerText = countNumber
  countNumber = countNumber + 1


  const div = document.createElement('div')
  div.innerHTML = `<div class="flex justify-between p-5 bg-[#12132D0D] rounded-lg shadow-lg mb-5">
  <h1 class="">${title}</h1>

    <div class="flex justify-center items-center gap-2 ">
    <i class="fa-regular fa-eye"></i>
      <p class="text-[#12132D99] text-base font-inter font-normal">${view}</p>
    </div>
  
</div>`
  itemContainer.appendChild(div)
}

function handleSearch() {
  const input = document.getElementById('input').value;
  load.classList.remove('hidden')
  setTimeout(() => {
    singlePost(input)
  }, 2000);


}


//latest post
const latestPosts = async () =>{
  let res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  let data = await res.json()
  data.forEach(item => {
    //console.log(item)
    const latest = document.createElement('div')
    
    latest.innerHTML = `<div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body ">
      <!-- date -->
      <div class="flex gap-4 text-[#12132D99]">
        <h2 class="card-title"><i class="fa-regular fa-calendar-minus"></i></h2>
        <p>29 January 2024</p>
      </div>
      <h1 class="text-[#12132D] font-extrabold font-mulish text-lg">What will a mars habitat force that impact in our daily life</h1>
      <p class="text-[#12132D99] text-base font-normal font-mulish">If a dog chews shoes whose shoes does he choose?</p>
      <div class="flex gap-3 items-center">
        <img src="images/Ellipse 1.png" alt="">
        <div>
          <h1 class="text-[#12132D] font-mulish text-base font-bold">Authour name</h1>
          <h1 class="text-[#12132D99] text-sm font-normal font-mulish">destigation</h1>
        </div>
      </div>
    </div>
  </div>`
  latestCardContainer.appendChild(latest)
  })
}
latestPosts()