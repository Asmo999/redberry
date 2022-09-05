(async () => {
  const rawResponse = await fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: ""})
  });
  const content = await rawResponse.json();
  console.log(content);
})();
// console.log()
document.querySelector("#uploadFile").addEventListener("change", function() {
    const reader = new FileReader()
    reader.addEventListener("load", ()=>{
        localStorage.setItem("recent-image", reader.result)
    })
    reader.readAsDataURL(this.files[0])
})
document.addEventListener("DOMContentLoaded", ()=> {
    const recentimagedataurl = localStorage.getItem("recent-image")

    if(recentimagedataurl) {
        document.querySelector("#imagePreview").setAttribute("src", recentimagedataurl)
    }
})