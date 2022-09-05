const sectc = document.getElementById("cards")
let div = document.createElement('div');
div.classList.add("div-lep");
let img = document.createElement('img');
img.classList.add("imgsrr");
img.src = "images/vector.png"
let div1 = document.createElement('div');
div1.classList.add("divv");
let div2 = document.createElement('div');
div2.classList.add("div-t-1");
let div3 = document.createElement('div');
div3.classList.add("div-t-2");
let ref = document.createElement('a');
ref.classList.add("div-t-3");
div2.textContent = "ირინე ჩანქსელიანი"
div2.style.marginBottom = "18px"
div2.classList.add("div-t-1");
div3.textContent = "Pentium II"
div3.style.marginBottom = "40px"
ref.textContent = "მეტის ნახვა"
ref.href = "landing.html"
div.append(img)
div.append(div1)
div1.append(div2)
div1.append(div3)
div1.append(ref)
sectc.append(div)