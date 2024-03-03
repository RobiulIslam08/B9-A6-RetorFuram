
const cardContainer = document.getElementById('card-container')
const itemContainer = document.getElementById('item-container')
let countNumber = 1;



const allPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
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
      
    })
   

}
allPost() 
function addItem(title, view) {
  console.log(title)
  console.log(view)
  let count = document.getElementById('count')
  count.innerText = countNumber
  countNumber = countNumber + 1
  

  const div = document.createElement('div')
  div.innerHTML  = `<div class="flex justify-between p-5 bg-[#12132D0D] rounded-lg shadow-lg mb-5">
  <h1 class="">${title}</h1>

    <div class="flex justify-center items-center gap-2 ">
    <i class="fa-regular fa-eye"></i>
      <p class="text-[#12132D99] text-base font-inter font-normal">${view}</p>
    </div>
  
</div>`
itemContainer.appendChild(div)

  // itemContainer.innerHTML = ``






 
  // console.log(view, title) 
//   const div = document.createElement('div');
//   const h1 = document.createElement('h1');

//   h1.innerText = title
//   const div2 = document.createElement('div')
//   div2.innerHTML = ` <div  class="flex gap-2">
//   <img src="images/eye.png" alt="">
//   <p class="text-[#12132D99] text-base font-inter font-normal">${view}</p>
// </div>`
//   div.appendChild(h1)
//   div.appendChild(div2)
//   itemContainer.appendChild(div)
  


}


{/* <div  class="flex gap-2">
<img src="images/eye.png" alt="">
<p class="text-[#12132D99] text-base font-inter font-normal">${item.view_count}</p>
</div> */}