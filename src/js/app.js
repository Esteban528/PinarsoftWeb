// const jsonURL = 'https://api.allorigins.win/get?url=https://drive.usercontent.google.com/download?id=15176n3npBznb-2oe5YO7-li4D_hJHxin&export=download&authuser=0&confirm=t&uuid=0f2c064b-58b1-4b09-8406-367f54a89149&at=APZUnTW1dMdi87W081E8RUcSj8kw:1692999575450';
// const jsonURL = "http://144.202.44.57/json/integrants.json";
const jsonURL = "data/integrants.json";

document.addEventListener('DOMContentLoaded', function (){
    run();
}); // Esto inicia el funcionamiento solo cuando ha cargado todo. Para no hacer la carga tan pesada

function run () { // Esta funcion activa las demás funciones 
    loadIntegrants();
}

async function loadIntegrants() {
    const json = await getJson(jsonURL);
    
    for (let i = 0; i < json.integrants.length; i++) {
        console.log(json.integrants)
        addToDocument (json.integrants[i]);
    }
    
}

async function addToDocument (json) {
    const profile = document.createElement("section");

    profile.innerHTML = ` 
        <section class="profile">
            <h3 class="profile_text profile_rol">${json.rol}</h3>

            <div class = "profile_personal">
                <img class="profile_icon profile_logo" src="${json.image}" alt="profile image">
                
                <h3 class="profile_text profile_name">${json.name}</h3>
            </div>

            <div class="profile_social">
                <a href="${json.github}" class="profile_github" target="-blank"> 
                    <img class="profile_icon profile_github_img" src="svg/github-mark.svg" alt="">   
                </a>
            </div>
        </section> <!---.profile-->
    `; 

    const integrantList = document.querySelector("#integrantList");
    integrantList.appendChild(profile)
}

async function getJson(url) {
    const result = await fetch(url);
    const json = await result.json();
    if (json) alert("Good");
    return json;
}

