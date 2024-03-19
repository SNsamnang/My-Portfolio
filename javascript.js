const service = document.getElementById("service");
const work = document.getElementById("work");
const resume = document.getElementById("resume");
const skill = document.getElementById("skill");
const contact = document.getElementById("contact");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");

service.addEventListener("click", () => {
  line1.style.width = "100%";
  service.style.color = "blueviolet";
  line3.style.width = "0%";
  line4.style.width = "0%";
  line5.style.width = "0%";
  resume.style.color = "white";
  skill.style.color = "white";
  contact.style.color = "white";
});

// work.addEventListener("mousedown", () => {
//   line2.style.width = "100%";
//   work.style.color = "blueviolet";
// });
// work.addEventListener("mouseout", () => {
//   line2.style.width = "0%";
//   work.style.color = "white";
// });

resume.addEventListener("mousedown", () => {
  line3.style.width = "100%";
  resume.style.color = "blueviolet";
  line1.style.width = "0%";
  line4.style.width = "0%";
  line5.style.width = "0%";
  service.style.color = "white";
  skill.style.color = "white";
  contact.style.color = "white";
});

skill.addEventListener("mousedown", () => {
  line4.style.width = "100%";
  skill.style.color = "blueviolet";
  line1.style.width = "0%";
  line3.style.width = "0%";
  line5.style.width = "0%";
  resume.style.color = "white";
  service.style.color = "white";
  contact.style.color = "white";
});

contact.addEventListener("mousedown", () => {
  line5.style.width = "100%";
  contact.style.color = "blueviolet";
  line1.style.width = "0%";
  line3.style.width = "0%";
  line4.style.width = "0%";
  resume.style.color = "white";
  skill.style.color = "white";
  service.style.color = "white";
});

const mypic = document.getElementById("mypic");

function handle() {
  const checkinghoverpic = mypic.classList.contains("right-pic-hover");
  if (checkinghoverpic) {
    mypic.classList.remove("right-pic", "right-pic-hover");
  } else {
    mypic.classList.add("right-pic", "right-pic-hover");
  }
}
mypic.addEventListener("click", handle);

const containner_img_width = document.getElementById("containner-img-width");
const text_img = document.querySelector(".text-img");
const widthbody = (document.body.offsetWidth);
 const widthbodypx=widthbody/2+"px"
console.log(widthbodypx)

if (document.body.style.width < "1000px") {
  text_img.style.width = "100%";
  mypic.style.width = "100%";
} else{
  
  text_img.style.width = "400px";
  mypic.style.width = "250px";
}
