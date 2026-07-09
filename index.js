async function fetchdata(){

    try {
        
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

        const data = await response.json();
        console.log(data);

        const result = document.getElementById("results");

    

        result.innerHTML = data.map((item, index,) => {
            let image = `./images/${index}.jpeg` 
        return `
            <div class="card"> 
                <h3>name: ${item.name} </h3>
                <p>price: ${item.price} </p>
                <img src=${image} alt= "${item.image}">
                <p>Type: ${item.type}</p>
            </div>
        
        `
        }).join("")


    } catch (error) {
        console.log("error");
    }

}

fetchdata();