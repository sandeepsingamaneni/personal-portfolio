let main = document.querySelector("main");

let image = document.createElement("img");
image.src = "Sandeep.jpg";
image.alt = "Sandeep-Bio";
image.style.borderRadius = "50%";
image.style.display = "block";
image.style.height = "200px";
image.style.width = "200px";
image.style.marginLeft = "auto";
image.style.marginRight = "auto";
image.style.marginTop = "5px";
image.style.marginBottom = "5px";
main.append(image);

let paragraph = document.createElement("p");
paragraph.classList.add("para1");
paragraph.textContent =
  "Hello! This is Sandeep. I'm currently pursuing my Masters in CS at Portland State University. I have previously worked in banking industry and I aspire to be a Software Engineer. Currently I am learning Python along with Algorithms and Data Structures. In one of the courses, I used Python for ETL and created a data base application. I wish to use my problem solving and logical thinking skills along with my communication skills gained from my work experience to design and develop computer software. In my free time, I would like to travel and explore new places.";
paragraph.style.padding = "15px";

main.append(paragraph);
