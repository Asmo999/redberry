const inp = document.getElementById("det-1-in");
const inp1 = document.getElementById("det-2-in");
const inp2 = document.getElementById("inp-dev-l-in");
const inp3 = document.getElementById("inp-dev-l1-in");
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
var ele = document.getElementById("form");
if (ele.addEventListener) {
  ele.addEventListener("submit", callback, false);
}
