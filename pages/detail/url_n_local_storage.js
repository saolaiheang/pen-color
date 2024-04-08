// 2. URL Parameter: please get id from URL

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

let url = "https://pens-api.vercel.app/api/pens/"+id;



 // please use a url from single pen from API document

async function getPen() {
  // Fetch pen colors from API
  try {
    const response = await fetch(url);
    const pen = await response.json();

    const penListDiv = document.getElementById("single-pen");
    // 3. Local Storage : Save data to localStorage
    saveLocalStorageData(pen);

    const penElement = createPenElement(pen);
    penListDiv.appendChild(penElement);
  } catch (error) {
    console.error(`Get pen error: ${error.message}`);
  }
}


// 3. Local Storage : Save data to localStorage
function saveLocalStorageData(pen) {

    // Please implement saving local storage function
    localStorage.setItem('pen', JSON.stringify(pen));
}

function createPenElement(pen) {
  const penDiv = document.createElement("div");
  penDiv.classList.add("col-3", "text-center");

  const penColorDiv = document.createElement("div");
  penColorDiv.classList.add("pen-color");
  penColorDiv.style.backgroundColor = pen.color;

  const penNameP = document.createElement("p");
  penNameP.textContent = pen.name;

  penDiv.appendChild(penColorDiv);
  penDiv.appendChild(penNameP);

  return penDiv;
}

// call function getPen
getPen();
