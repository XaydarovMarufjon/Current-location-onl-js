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


