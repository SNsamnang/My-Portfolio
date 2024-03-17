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

service.addEventListener("mousedown", () => {
  line1.style.width = "100%";
  service.style.color = "blueviolet";
});
service.addEventListener("blur", () => {
  line1.style.width = "0%";
  service.style.color = "white";
});

work.addEventListener("mousedown", () => {
  line2.style.width = "100%";
  work.style.color = "blueviolet";
});
work.addEventListener("blur", () => {
  line2.style.width = "0%";
  work.style.color = "white";
});

resume.addEventListener("mousedown", () => {
  line3.style.width = "100%";
  resume.style.color = "blueviolet";
});
resume.addEventListener("blur", () => {
  line3.style.width = "0%";
  resume.style.color = "white";
});

skill.addEventListener("mousedown", () => {
  line4.style.width = "100%";
  skill.style.color = "blueviolet";
});
skill.addEventListener("blur", () => {
  line4.style.width = "0%";
  skill.style.color = "white";
});

contact.addEventListener("mousedown", () => {
  line5.style.width = "100%";
  contact.style.color = "blueviolet";
});
contact.addEventListener("blur", () => {
  line5.style.width = "0%";
  contact.style.color = "white";
});
