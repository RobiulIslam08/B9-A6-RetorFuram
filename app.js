
const cardContainer = document.getElementById('card-container')


const allPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
    //console.log(data.posts)
    data.posts.forEach(item => {
        const card = document.createElement('div')
       card.innerHTML = `  <div class="rounded-lg lg:w-[100%] mb-[20px] bg-[#7D7DFC1A] w-full flex">
        <!-- profile -->
        <div class="w-[15%] p-5">
          <div class="indicator">
            <span class="indicator-item badge badge-accent"></span>
            <img src=${item.image} alt="" class="grid h-[72px] w-[72px] bg-base-300 place-items-center">
          </div>
        </div>
        <!-- details -->
        <div class="w-[85%]  p-5">

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
           <div class="flex gap-8">
            <div class="flex gap-2">
              <img src="images/messege.png" alt="">
              <p class="text-[#12132D99] text-base font-inter font-normal">${item.comment_count}</p>
            </div>
            <div  class="flex gap-2">
              <img src="images/eye.png" alt="">
              <p class="text-[#12132D99] text-base font-inter font-normal">${item.view_count}</p>
            </div>
            <div  class="flex gap-2">
              <img src="images/clock.png" alt="">
              <p class="text-[#12132D99] text-base font-inter font-normal"><span>${item.posted_time}</span> min</p>
            </div>
           </div>
           <div>
            <button class="bg-[#10B981] px-2 rounded-full"><i class="fa-solid fa-envelope"></i></button>
           </div>

          </div>


        </div>
      </div>`
      cardContainer.appendChild(card)
    })
}
allPost() 