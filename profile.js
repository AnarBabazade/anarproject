fetch("http://localhost:3000/get-data")
  .then(response => {
    return response.json(); 
  })
  .then(item => {
    item.data.map((item,index)=>{
      document.querySelector("#profile").innerHTML+=`
        <input type="text" id="name" value="${item.name}">
        <input type="text" id="surname" value="${item.surname}">
        <input type="text" id="mail" value="${item.mail}" readonly>
        <input type="text" id="password" value="${item.password}">
        <input type="text" id="confirmPassword" value="${item.confirmPassword}">
        <button onclick="update(${index})">UPDATE DATA</button>
        <span onclick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></span>
        <img src="${item.image}">
        <input type="file" id="change" onchange="changePhoto()">
      `
    })
  })
  .catch(error => {
    console.error(error); 
  });

const back=document.querySelector("#back")
back.addEventListener("click",(id)=>{
  window.location.href = "index.html"
})

const deleteItem=(index)=>{
  fetch(`http://localhost:3000/delete-data/${index}`,{
    method:"DELETE",    
    headers:{
      "Content-Type":"application/json"
    },
  })
  .then((response)=>response.json())
  .then((data)=>{
    location.reload()
  })
}

const changePhoto=()=>{
  const fileInput=document.querySelector("#change")
  const file = fileInput.files[0];
}

const update=(index)=>{
  const fileInput=document.querySelector("#change")
  const file = fileInput.files[0]; 
  const data={
    name:document.querySelector("#name").value,
    surname:document.querySelector("#surname").value,
    mail:document.querySelector("#mail").value,
    password:document.querySelector("#password").value,
    confirmPassword:document.querySelector("#confirmPassword").value,
    image:file 
  };
  fetch("http://localhost:3000/update-data",{
    method:"PUT",    
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data),
  })
  .then((response)=>response.json())
  .then((data)=>{
    location.reload();
    console.log(data);
  })
  .catch(error => {
    console.error(error); 
  });
}



 


