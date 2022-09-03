const inp = document.getElementById("det-1-in");
const inp1 = document.getElementById("det-2-in");
const inp2 = document.getElementById("inp-dev-l-in");
const inp3 = document.getElementById("inp-dev-l1-in");
const image_input = document.querySelector("#image-input");
const iamge_display = document.querySelector("#display-image");
let uploaded_image = ""
const georgian = /^[ა-ჰ]+$/;
function callback() {
  const obj = document.getElementById("det-1");
  const detsp1 = document.getElementById("det-1-sp");
  const obj1 = document.getElementById("det-2");
  const detsp2 = document.getElementById("det-2-sp");
  const detsp3 = document.getElementById("inp-dev-l-sp");
  const obj2 = document.getElementById("inp-dev-l-1");
  const detsp4 = document.getElementById("inp-dev-l1-sp");
  const obj3 = document.getElementById("inp-dev-l1-1");
  let ivalue1 = inp.value;
  let ivalue2 = inp1.value;
  let ivalue4 = inp3.value;
  if (!georgian.test(ivalue1) || !(ivalue1.length >= 3)) {
    obj.style.color = "#E52F2F";
    inp.style.borderColor = "#E52F2F";
    detsp1.style.color = "#E52F2F";
    detsp1.textContent = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
    if (/\s/g.test(ivalue1)) {
      detsp1.textContent = "არ გამოიყენო გამოტოვებები";
    }
  } else {
    obj.style.color = "black";
    inp.style.borderColor = "#8AC0E2";
    detsp1.style.color = "#2E2E2E";
    detsp1.textContent = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
  }
  if (!georgian.test(ivalue2) || !(ivalue2.length >= 3)) {
    obj1.style.color = "#E52F2F";
    inp1.style.borderColor = "#E52F2F";
    detsp2.style.color = "#E52F2F";
    detsp2.textContent = "გამოიყენე ქართული ასოები";
    if (/\s/g.test(ivalue2)) {
      detsp2.textContent = "არ გამოიყენო გამოტოვებები";
    }
  } else {
    obj1.style.color = "black";
    inp1.style.borderColor = "#8AC0E2";
    detsp2.style.color = "#2E2E2E";
    detsp2.textContent = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
  }
  if (
    inp2.value.slice(inp2.value.indexOf("@")) !== "@redberry.ge" ||
    inp2.value.length < 13
  ) {
    detsp3.style.color = "#E52F2F";
    obj2.style.color = "#E52F2F";
    inp2.style.borderColor = "#E52F2F";
  } else {
    detsp3.style.color = "#2E2E2E";
    obj2.style.color = "black";
    inp2.style.borderColor = "#8AC0E2";
  }
  if (
    ivalue4.length != 13 ||
    ivalue4.indexOf("+995") != 0 ||
    /\s/g.test(ivalue4) ||
    !/^\d+$/.test(ivalue4.slice(1))
  ) {
    detsp4.style.color = "#E52F2F";
    obj3.style.color = "#E52F2F";
    inp3.style.borderColor = "#E52F2F";
  } else {
    detsp4.style.color = "#2E2E2E";
    obj3.style.color = "black";
    inp3.style.borderColor = "#8AC0E2";
  }
}
function callback1() {
  var inp = document.getElementById('image-input');
  const iamge_text = document.querySelector(".rel-text")
  const iamge_ph = document.querySelector(".vector-1")
    if(inp.files.length === 0){
        iamge_ph.style.display = "block"
        iamge_text.style.marginTop = "19px" 
        iamge_text.style.color = "#E52F2F"
        iamge_display.style.backgroundColor = "#FFF1F1"
        iamge_display.style.borderColor = "#E52F2F"
        inp.focus();
        return false;
    }
    else {
      console.log("lasha")
    }
}
var ele = document.getElementById("form");
var ele1 = document.getElementById("form-1");
if (ele.addEventListener) {
  ele.addEventListener("submit", callback, false);
}
if (ele1.addEventListener) {
  ele1.addEventListener("submit", callback1, false);
}
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
const iamge_text = document.querySelector(".idkbro")
const valuenum = document.querySelector(".valuenum")
const sizenum = document.querySelector(".sizenum")
image_input.onchange = () => {
  valuenum.textContent = image_input.value.split("\\").pop() + ","
  sizenum.textContent = Math.round(image_input.files[0].size /1000) + " mb"
}