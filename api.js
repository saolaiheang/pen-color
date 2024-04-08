// Test JavaScript Skill 2 Level 2.2
// 1. API
// 2. URL Parameter
// 3. Local Storage

function createPenElement(pen) {
  const penDiv = document.createElement("div");
  penDiv.classList.add("col-3", "text-center");

  const penColorDiv = document.createElement("div");
  penColorDiv.classList.add("pen-color");
  penColorDiv.style.backgroundColor = pen.color;

  const penNameP = document.createElement("p");
  penNameP.textContent = pen.name;

  const penLink = document.createElement("a");
  penLink.classList.add("pen-link");
  penLink.href = `/pages/detail/?id=${pen.id}`;
  penLink.appendChild(penColorDiv);
  penLink.appendChild(penNameP);

  penDiv.appendChild(penLink);

  return penDiv;
}

function getAllPens() {
  fetch(" https://pens-api.vercel.app/api/pens")
  .then((response)=>{
    return response.json();
  })
  .then((pens)=>{
     const penListDiv = document.getElementById("pen-list");

     pens.forEach((pen) => {
    const penElement = createPenElement(pen);
     penListDiv.appendChild(penElement);
   })
  })
  .then((error)=>{
    console.error("error",error);
    })
  
}

getAllPens();
