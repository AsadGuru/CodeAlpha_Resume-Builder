// Generating CV

function generateResume(){
  // console.log('generater cv');

   let namefiled = document.getElementById('namefiled').value;
  // console.log(namefiled)
  let nameTemplate1= document.getElementById('nameTemplate');

  nameTemplate1.innerHTML = namefiled;


  document.getElementById('nameTemplate2').innerHTML = namefiled;

  let contactfiled = document.getElementById('contactfiled').value;
  
 // console.log(contactfiled);
   document.getElementById('contactTemplate').innerHTML = contactfiled;

  
  
 let addressfiled = document.getElementById('addressfiled').value;
 
 document.getElementById('addressTemplate').innerHTML = addressfiled;


 // links 

 let linkedfiled = document.getElementById('linkedfiled').value;
 
 document.getElementById('linkedinTemplate').setAttribute('href',linkedfiled);
 document.getElementById('linkedinTemplate').innerHTML = linkedfiled;


 let githubfiled = document.getElementById('githubfiled').value;
 
 document.getElementById('githubTemplate').setAttribute('href',githubfiled);
 document.getElementById('githubTemplate').innerHTML = githubfiled;

 let instafiled = document.getElementById('instafiled').value;
 
 document.getElementById('instaTemplate').setAttribute('href',instafiled);
 document.getElementById('instaTemplate').innerHTML = instafiled;




 // Objective 
 let objectivefiled = document.getElementById('objectivefiled').value;
 document.getElementById('objectiveTemplate').innerHTML = objectivefiled;


 // work experience
let wefiled = document.getElementsByClassName('wefiled');

let str = '';
for (const item of wefiled) {
    str = str + `<li> ${item.value}</li>`
}
document.getElementById('workExperienceTemplate').innerHTML = str;
//console.log("work filed ",str)

// Academic qualification 

let aqfiled = document.getElementsByClassName('aqfiled');

let str1 ='';
for (const item of aqfiled) {
    str1 = str1 + `<li> ${item.value} </li>`
}
    //console.log(str1);
 document.getElementById('academicQualificationTemplate').innerHTML = str1;
  // set the photo

   let file = document.getElementById('imgfiled').files[0];

   let reader = new FileReader()
    reader.readAsDataURL(file);
console.log(reader.result);

//   // set the image
   reader.onloadend = ()=>{
     document.getElementById('imgTemplate').src=reader.result}
  
 
 

 document.getElementById('cv-form').style.display="none";
document.getElementById('cv-template').style.display="block"
navigator.vibrate(4*100)
alert("Your Resume is Generated!")
}

const printCV =()=>{
    window.print();
}