function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const obj=document.querySelector(".objectives");
const mis=document.querySelector(".mission");
const vis=document.querySelector(".vision");

const obj_btn=document.querySelector(".obj-btn");
const mis_btn=document.querySelector(".mis-btn");
const vis_btn=document.querySelector(".vis-btn");
obj.classList.add("active");
obj_btn.classList.add("active_btn");
obj_btn.addEventListener("click",()=>{
   mis.classList.remove("active");
   obj.classList.add("active");
   vis.classList.remove("active");
   obj_btn.classList.remove("non-btn");
   obj_btn.classList.add("active_btn");
   mis_btn.classList.remove("active_btn");
   vis_btn.classList.remove("active_btn");
   mis_btn.classList.add("non-btn");
   vis_btn.classList.add("non-btn");
})

mis_btn.addEventListener("click",()=>{
  obj.classList.remove("active");
  mis.classList.add("active");
  vis.classList.remove("active");
  mis_btn.classList.add("active_btn");
  mis_btn.classList.remove("non-btn");
  vis_btn.classList.remove("active_btn");
  vis_btn.classList.add("non-btn");
  obj_btn.classList.remove("active_btn");
  obj_btn.classList.add("non-btn");
})

vis_btn.addEventListener("click",()=>{
  obj.classList.remove("active");
  mis.classList.remove("active");
  vis.classList.add("active");
  vis_btn.classList.add("active_btn");
  mis_btn.classList.remove("active_btn");
  obj_btn.classList.add("non-btn");
  vis_btn.classList.remove("non-btn");
  obj_btn.classList.remove("active_btn");
  mis_btn.classList.add("non-btn");
})
