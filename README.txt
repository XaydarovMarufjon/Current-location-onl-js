Your Api data in your CONSOLE => open console ...

city: "Tashkent"
continent: "Asia"
continentCode: "AS"
countryCode: "UZ"
countryName: "Uzbekistan"
latitude: 41.3106176
locality: "Mirobod"
localityInfo: {administrative: Array(4), informative: Array(2)}
localityLanguageRequested: "en"
longitude: 69.2748288
lookupSource: "coordinates"
plusCode: "8JHF876F+6W"
postcode: 
""
principalSubdivision: "Tashkent"
principalSubdivisionCode: "UZ-TK"

//// js source code  --- > Javascript Obfuscator da privete qilingan
 

const findLocation = () => { 

  const status = document.querySelector(".status")
  const map = document.querySelector(".map")

  const success = (position) =>{
      
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude , longitude);
      map.innerHTML = `<iframe  width="100%" height="500" src="https://maps.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed"></iframe>`

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en `
 
      fetch(geoApiUrl)
      .then(res => res.json())
      .then( data => {
        console.log(data);
        status.innerHTML = `${data.countryName} , ${data.principalSubdivision  } , ${data.locality}`
        
      })
 
    }

  const error = () =>{
    status.textContent = "location aniqlanmadi "
}

  navigator.geolocation.getCurrentPosition(success , error);

}

document.querySelector(".find-state").addEventListener("click" , findLocation)


window.onload = (event) => {
  findLocation()
};


/// private  my code 

document.addEventListener("contextmenu", e => e.preventDefault(), false);  // distable right mouse click


document.addEventListener("keydown", e => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.keyCode == 17  || e.keyCode == 85 || e.keyCode== 123) {
    e.stopPropagation();
    e.preventDefault();
  }
});