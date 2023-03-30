async function getNationInfo(){
    let info = await fetch('https://restcountries.com/v3.1/all');
    let finalInfo = await info.json();
    let container = document.querySelector('#country-container');
    for(let i = 0; i<finalInfo.length; i++){
        let countryElement = document.createElement("div");
        countryElement.classList.add("country");

        let img = document.createElement("img");
        img.src = finalInfo[i].flags.png;
        img.classList.add("img");
        countryElement.appendChild(img);

        let name = document.createElement("div");
        name.classList.add("name");
        name.textContent = `Name: ${finalInfo[i].name.common}`;
        countryElement.appendChild(name);

        let population = document.createElement("div");
        population.classList.add("population");
        population.textContent = `Population: ${finalInfo[i].population}`;
        countryElement.appendChild(population);

        
        container.appendChild(countryElement);
        console.log(finalInfo[i])
    }
};

getNationInfo();
