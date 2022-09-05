const inp = document.getElementById("det-1-in");
const inp1 = document.getElementById("det-2-in");
const inp2 = document.getElementById("inp-dev-l-in");
const inp3 = document.getElementById("inp-dev-l1-in");
const latin_in = document.querySelector("#det-2-in-1");
const datech = document.querySelector("#det-2-in-ch");
const image_input = document.querySelector("#image-input");
const iamge_display = document.querySelector("#display-image");
const iamge_text = document.querySelector(".rel-text");
const iamge_ph = document.querySelector(".vector-1");
const check3 = document.querySelector("#checkbox-3");
const check4 = document.querySelector("#checkbox-4");
const disp = document.querySelector(".displayer");
const cpu_core = document.querySelector("#det-2-in-2");
const show = document.querySelector(".shower");
const newchwind = document.getElementById("new-chat-window-input")
let ddlh = document.getElementById("select-op-3");
const check = document.querySelector("#checkbox");
const checksp = document.querySelector("#det-2-c");
let checkp1 = {}
let checkp2 = {}
const check2 = document.querySelector("#checkbox-1");
let selectedValueh = {}
let ddlf = document.getElementById("select-op-2");
let selectedValuef = {}
const cpuc = document.querySelector("#det-2-in-3");
const ddl = document.getElementById("select-op");
const ram = document.querySelector("#det-2-in-4");
let selectedValueId = ddl.options[ddl.selectedIndex].id;
let selectedValueIdh = ddlh.options[ddlh.selectedIndex].id;
const ddlx = document.getElementById("select-op-4");
let selectedValuexId = ddlx.options[ddlx.selectedIndex].id;
let selectedValue = {}
let selectedValuex = {}
let selectedValueIdf = ddlf.options[ddlf.selectedIndex].id;
const modal = document.getElementById("myModal");
let uploaded_image = "";
const georgian = /^[ა-ჰ]+$/;
let imgvalue = {}


function uploadFile(element) {
  console.log("ELEMENT", element);
  let file = element.files[0];
  imgvalue = file;
}
async function tokensend(){
  const formData = new FormData();
  const data = {name: inp.value, surname : inp1.value , team_id : selectedValueId,
    position_id : selectedValueId,email : inp2.value,phone_number : inp3.value,laptop_name : latin_in.value,laptop_brand_id : selectedValueIdf,laptop_cpu : selectedValueh,
    laptop_cpu_cores : cpu_core.value,laptop_cpu_threads : cpuc.value,laptop_ram : ram.value,
    laptop_hard_drive_type : localStorage.getItem("checkval1"),laptop_state : localStorage.getItem("checkval"),laptop_purchase_date : datech.value,laptop_price : newchwind.value,token : "a872244d29828057ec98a34c0253a9da"};

  for(const key of Object.keys(data)){
    formData.append(key, data[key])
  }

  console.log("FORMDATA IMG", imgvalue);

  formData.append('laptop_image', imgvalue);

  console.log("FORMDATA", formData);

  const rawResponse = await fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
    method: 'POST',
    body: formData
  });
  const content = await rawResponse.json();
  console.log(content)
}
fetch("https://pcfy.redberryinternship.ge/api/teams")
  .then((respone) => respone.json())
  .then((response) => {
    cc = document.getElementById("select-op");
    for (i = 0; i < response.data.length; i++) {
      let option = document.createElement("option");
      option.value = response.data[i].name;
      option.text = response.data[i].name;
      option.id = response.data[i].id;
      cc.appendChild(option);
    }
  });
fetch("https://pcfy.redberryinternship.ge/api/brands")
  .then((respone) => respone.json())
  .then((response) => {
    cc = document.getElementById("select-op-2");
    for (i = 0; i < response.data.length; i++) {
      let option = document.createElement("option");
      option.value = response.data[i].name;
      option.text = response.data[i].name;
      option.id = response.data[i].id;
      cc.appendChild(option);
    }
  });
fetch("https://pcfy.redberryinternship.ge/api/positions")
  .then((respone) => respone.json())
  .then((response) => {
    cc = document.getElementById("select-op-4");
    for (i = 0; i < response.data.length; i++) {
      let option = document.createElement("option");
      option.value = response.data[i].name;
      option.text = response.data[i].name;
      option.id = response.data[i].id;
      cc.appendChild(option);
    }
  });
fetch("https://pcfy.redberryinternship.ge/api/cpus")
  .then((respone) => respone.json())
  .then((response) => {
    cc = document.getElementById("select-op-3");
    for (i = 0; i < response.data.length; i++) {
      let option = document.createElement("option");
      option.value = response.data[i].name;
      option.text = response.data[i].name;
      option.id = response.data[i].id;
      cc.appendChild(option);
    }
  });
function next() {
  disp.style.display = "block";
  show.style.display = "none";
}
function callback() {
  const obj = document.getElementById("det-1");
  const detsp1 = document.getElementById("det-1-sp");
  const obj1 = document.getElementById("det-2");
  const detsp2 = document.getElementById("det-2-sp");
  const detsp3 = document.getElementById("inp-dev-l-sp");
  const obj2 = document.getElementById("inp-dev-l-1");
  const detsp4 = document.getElementById("inp-dev-l1-sp");
  const obj3 = document.getElementById("inp-dev-l1-1");
  const backb = document.getElementById("back-b");
  let ivalue1 = inp.value;
  let ivalue2 = inp1.value;
  let ivalue4 = inp3.value;
  if (!georgian.test(ivalue1) || !(ivalue1.length >= 2)) {
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
    if (!georgian.test(ivalue2) || !(ivalue2.length >= 2)) {
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
      selectedValue = ddl.options[ddl.selectedIndex].value;
      selectedValueId = ddl.options[ddl.selectedIndex].id;
      if (selectedValue == "none") {
        ddl.style.borderColor = "#E52F2F";
      } else {
        ddl.style.borderColor = "transparent";
        selectedValuex = ddlx.options[ddlx.selectedIndex].value;
        selectedValuexId = ddlx.options[ddlx.selectedIndex].id;
        if (selectedValuex == "none") {
          ddlx.style.borderColor = "#E52F2F";
        } else {
          ddlx.style.borderColor = "transparent";
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
              if ((backb.clicked = true)) {
                next();
              }
            }
          }
        }
      }
    }
  }
}
function prev() {
  disp.style.display = "none";
  show.style.display = "block";
}
function ban() {
  iamge_ph.style.display = "none";
}
function callback1() {
  const latinsp = document.querySelector("#det-2-1");
  const latinsp2 = document.querySelector("#det-2-sp-1");
  const cpuin = document.querySelector("#det-2-sp-3");
  const cpusp = document.querySelector("#det-2-3");
  const cpu_core_in = document.querySelector("#det-2-sp-2");
  const cpu_coresp = document.querySelector("#det-2-2");
  const ram_in = document.querySelector("#det-2-sp-4");
  const ram_sp = document.querySelector("#det-2-4");
  const checksp2 = document.querySelector("#det-2-c-1");
  const checkim = document.querySelector(".vector-2");
  const checkim2 = document.querySelector(".vector-3");
  const format = /["!@#$%^&*()_+="]/;
  if (image_input.files.length === 0) {
    iamge_ph.style.display = "block";
    iamge_text.style.marginTop = "19px";
    iamge_text.style.color = "#E52F2F";
    iamge_display.style.backgroundColor = "#FFF1F1";
    iamge_display.style.borderColor = "#E52F2F";
  } else {
    iamge_ph.style.display = "none";
    iamge_display.style.borderColor = "#4386A9";
    if (
      /^[a-zA-Z]+$/.test(latin_in.value) ||
      /^\d+$/.test(latin_in.value) ||
      format.test(latin_in.value)
    ) {
      latinsp.style.color = "black";
      latinsp2.style.color = "#2E2E2E";
      latin_in.style.borderColor = "#8AC0E2";
      selectedValuef = ddlf.options[ddlf.selectedIndex].value;
      selectedValueIdf = ddlf.options[ddlf.selectedIndex].id;
      if (selectedValuef == "none") {
          ddlf.style.borderColor = "#E52F2F";
        } else {
          ddlf.style.borderColor = "transparent";
          selectedValueh = ddlh.options[ddlh.selectedIndex].value;
          selectedValueIdh = ddlh.options[ddlh.selectedIndex].id;
          if (selectedValueh == "none") {
            ddlh.style.borderColor = "#E52F2F";
          } else {
            ddlh.style.borderColor = "transparent";
            if (!/^\d+$/.test(cpuc.value)) {
              cpusp.style.color = "#E52F2F";
              cpuin.style.color = "#E52F2F";
              cpuc.style.borderColor = "#E52F2F";
            } else {
              cpusp.style.color = "black";
              cpuin.style.color = "#2E2E2E";
              cpuc.style.borderColor = "#8AC0E2";
              if (!/^\d+$/.test(cpu_core.value)) {
                cpu_coresp.style.color = "#E52F2F";
                cpu_core_in.style.color = "#E52F2F";
                cpu_core.style.borderColor = "#E52F2F";
              } else {
                cpu_coresp.style.color = "black";
                cpu_core_in.style.color = "#2E2E2E";
                cpu_core.style.borderColor = "#8AC0E2";
                if (!/^\d+$/.test(ram.value)) {
                  ram_sp.style.color = "#E52F2F";
                  ram_in.style.color = "#E52F2F";
                  ram.style.borderColor = "#E52F2F";
                } else {
                  ram_sp.style.color = "black";
                  ram_in.style.color = "#2E2E2E";
                  ram.style.borderColor = "#8AC0E2";
                  if (check.checked === true || check2.checked === true) {
                    checksp.style.color = "black";
                    checkim.style.display = "none";
                    if (check3.checked === true || check4.checked === true) {
                      checksp2.style.color = "black";
                      checkim2.style.display = "none";
                      tokensend()
                    } else {
                      checksp2.style.color = "#E52F2F";
                      checkim2.style.display = "inline-block";
                    }
                  } else {
                    checksp.style.color = "#E52F2F";
                    checkim.style.display = "inline-block";
                  }
                }
              }
            }
          }
        }
      }
      else {
        latinsp.style.color = "#E52F2F";
        latinsp2.style.color = "#E52F2F";
        latin_in.style.borderColor = "#E52F2F";
      }
    }
  }
const ele = document.getElementById("form");
const ele1 = document.getElementById("form-1");
if (ele1.addEventListener) {
  ele1.addEventListener("submit", callback1, false);
}
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    localStorage.setItem("recent-image", reader.result)
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
  uploadFile(image_input)
});
document.addEventListener("DOMContentLoaded", ()=> {
  recentimagedataurl = localStorage.getItem("recent-image")
})
const valuenum = document.querySelector(".valuenum");
const sizenum = document.querySelector(".sizenum");
image_input.onchange = () => {
  iamge_ph.style.display = "none";
  const image_label = document.querySelector(".custom-file");
  const checkshow = document.querySelector("#check-show");
  checkshow.style.display = "block";
  iamge_display.style.border = "none";
  valuenum.textContent = image_input.value.split("\\").pop() + ",";
  sizenum.textContent = Math.round(image_input.files[0].size / 1000) + " mb";
  iamge_text.style.display = "none";
  image_label.style.display = "none";
};
function lol() {
  if ((check4.checked = true)) {
    check3.checked = false;
    localStorage.setItem("checkbox-4", "on");
    localStorage.setItem("checkbox-3", "of");
    localStorage.setItem("checkval", "old");
    checksp2 = "old"
  }
}
function lol1() {
  if ((check3.checked = true)) {
    check4.checked = false;
    localStorage.setItem("checkbox-3", "on");
    localStorage.setItem("checkbox-4", "of");
    localStorage.setItem("checkval", "new");
    checkp2 = "new"
  }
}
function lol2() {
  if ((check.checked = true)) {
    check2.checked = false;
    localStorage.setItem("checkbox", "on");
    localStorage.setItem("checkbox-1", "of");
    localStorage.setItem("checkval1", "SSD");
    checkp1 = "SSD"
  }
}
function lol3() {
  if ((check2.checked = true)) {
    check.checked = false;
    localStorage.setItem("checkbox-1", "on");
    localStorage.setItem("checkbox", "of");
    localStorage.setItem("checkval1", "HDD");
    checkp1 = "HDD"
  }
}
const datass = document.querySelector("#datas");
function valuesaver(event) {
  let value = event.target.value;
  let key = event.target.id;
  if (document.getElementById(key).type == "checkbox") {
    if (document.getElementById(key).checked === true) {
      localStorage.setItem(key, "on");
    } else {
      localStorage.setItem(key, "of");
    }
  } else if (key && value) {
    localStorage.setItem(key, value);
    key = localStorage[key];
  }
}
for (let [key, x] of Object.entries(localStorage)) {
  f = `${key}`;
  elementt = document.getElementById(f);
  if(!elementt){
    continue;
  }
  if (elementt.type == "text") {
    elementt.value = x;
  }
  if (elementt.type == "checkbox" && x == "on") {
    elementt.checked = true;
  }
}