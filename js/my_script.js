/**
 * Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
 */

const teamList = [
   
    {
        firstName : "Wayne Barnett",
        position :"Founder & CEO ",
        image :"wayne-barnett-founder-ceo.jpg"

    },

    {
        firstName : "Angela Caroll ",
        position :" Chief Editor  ",
        image :" angela-caroll-chief-editor.jpg"

    },
     {
        firstName : "Walter Gordon",
        position :" Office Manager",
        image :" walter-gordon-office-manager.jpg"

    },
     {
        firstName : "Angela Lopez ",
        position :" Social Media  ",
        image :"Manager  angela-lopez-social-media-manager.jpg"

    },
     {
        firstName : "Scott Estrada",
        position :"Developer",
        image :"   scott-estrada-developer.jpg"

    },
     {
        firstName : "Barbara Ramos ",
        position :"Graphic Designer",
        image :"barbara-ramos-graphic-designer.jpg"

    }

];

const ulElement = document.querySelector(".teamMembers");


for (let i = 0 ; i < teamList.length; i ++){
    const memberProfile = teamList[i];
    console.log(memberProfile.firstName, memberProfile.position, memberProfile.image);
    const ilElement = document.createElement ("li");
    ulElement.innerHTML += "<li>" +  memberProfile.firstName + '&nbsp;' + '&nbsp;' + '&nbsp;' +  '&nbsp;' +  memberProfile.position + '&nbsp;' + '&nbsp;' + '&nbsp;' +  '&nbsp;' +  '&nbsp;' +  '&nbsp;' + memberProfile.image + "</li>";
   
}
const boxImages = document.querySelector("div.images");
const imageList = [ "wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg","angela-lopez-social-media-manager.jpg","scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"];
const nameList = ["Wayne Barnett", "Angela Caroll ", "Walter Gordon", "Angela Lopez ", "Scott Estrada", "Barbara Ramos"];
const names = document.querySelector("div.names");
const positionList = ["Founder & CEO "," Chief Editor"," Office Manager", " Social Media  ", "Developer", "Graphic Designer",];
const positions = document.querySelector("div.positions");

for (let i = 0 ; i < imageList.length && i < nameList.length; i ++){
 boxImages.innerHTML += 
 `<div class="image-items">
        <img src="./img/${imageList[i]}">
     ${nameList[i]} <br>
  ${positionList[i]}
       
  </div>`;
  
 
}
