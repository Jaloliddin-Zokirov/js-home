var elList = document.querySelector('.js-list')

function appendToDom(item, node) {
  for (info of item) {
    var newItem = document.createElement("li");
    var elStrong = document.createElement("strong");
    var elSpan = document.createElement("span");
    var elTitle = document.createElement("h2");
    var elImg = document.createElement("img");
    var elText = document.createElement("p");
    var elWeaknesses = document.createElement("span");
  
  
    elStrong.textContent = `${info.id}`;
    elSpan.textContent = `${info.num}`;
    elTitle.textContent = `${info.name}`;
    elImg.src = `${info.img}`;
    elText.textContent = `${info.type}`;
    elWeaknesses.textContent = `${info.weaknesses}`;
  
    newItem.setAttribute("class", "item");
    elStrong.setAttribute("class", "desc");
    elTitle.setAttribute("class", "subject");
    elImg.setAttribute("class", "img");
    elText.setAttribute("class", "text");
    elWeaknesses.setAttribute("class", "texts");
  
  
    newItem.appendChild(elStrong);
    newItem.appendChild(elSpan);
    newItem.appendChild(elTitle);
    newItem.appendChild(elImg);
    newItem.appendChild(elText);
    newItem.appendChild(elWeaknesses);
    node.appendChild(newItem);
  }
}

appendToDom(data, elList);

let elSelect = document.querySelector(".js-select");

let result = [];
elSelect.addEventListener("change", () => {
  result = [];
  elList.innerHTML = "";
  let elSelectVal = elSelect.value;
  data.forEach((poc) => {
    if (poc.type.includes(elSelectVal)) {
      result.push(poc);
    }
  });
  appendToDom(result, elList);
});

let optionList = new Set();

data.forEach((poci) => {
  optionList.add(...poci.type);
});

optionList.forEach((elment) => {
  let newOption = document.createElement("option");
  newOption.textContent = elment;
  newOption.value = elment;
  
  elSelect.appendChild(newOption)
});