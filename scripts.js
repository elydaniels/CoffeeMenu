
const menuItems = document.querySelector('.menu-items')
// copy JSON DATA from https://api.sampleapis.com/coffee/hot
// create JSON file in local API with all Coffees

// fetch local API and render coffee list here
fetch('http://localhost:5503')
  .then(serverRes => serverRes.json())
  .then(data => {
    let html = ''

    data.forEach(eachItem => {
      console.log('each item', eachItem)
      let htmlItem = `
          <div class="menu-items__item">
              <img src="${eachItem.image}">
              <div>
                <h3>${eachItem.id} ${eachItem.title}</h3>
                <p>
                  ${eachItem.description}
                </p>
                <p>
                ${eachItem.ingredients}
                </p>
              </div>
        </div>  
    `
      html += htmlItem
    })
    menuItems.innerHTML = html
  })
  .catch(err => console.error(err))