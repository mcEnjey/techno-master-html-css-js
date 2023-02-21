let brands = [];

products.forEach((e) => {
   if (!brands.includes(e.brand)) {
      brands.push(e.brand)
   }

   let card = createElement('div', 'card m-2 shadow', ` 
   
   <img
      src="${e.img}"
      alt="smartphone" class="card-img">

      <div class="card-body">
         <h4 class="card-title">${e.name}</h4>
         <p>Price:<strong> ${e.price}$</strong></p>
         <p>Category:<strong>${e.category}</strong></p>
         <button class="${e.isBuy ? "btn btn-success" : "btn btn-danger"}">${e.isBuy ? "SOTUVDA MAVJUD" : "SOTUVDA YO'Q"}</button>
      </div>

   `)
   $('.wrapper').appendChild(card);
})

brands.forEach((e) => {
   const option = createElement('option', 'item-option', e);
   $('.form-select').appendChild(option)
})

$(".form-select").addEventListener('change', (evt) => {

   $('.wrapper').innerHTML = "";
   let price=$("#price").value;
   const FilterProduct = products.filter((e) => {
      return e.brand.toLowerCase() === evt.target.value.toLowerCase() && e.price>price;
   })

   FilterBrand(FilterProduct)

})

function FilterBrand(data) {

   data.forEach((e) => {
      if (!brands.includes(e.brand)) {
         brands.push(e.brand)
      }

      let card = createElement('div', 'card m-2 shadow', ` 
      
      <img
         src="${e.img}"
         alt="smartphone" class="card-img">
   
         <div class="card-body">
            <h4 class="card-title">${e.name}</h4>
            <p>Price:<strong> ${e.price}$</strong></p>
            <p>Category:<strong>${e.category}</strong></p>
            <button class="${e.isBuy ? "btn btn-success" : "btn btn-danger"}">${e.isBuy ? "SOTUVDA MAVJUD" : "SOTUVDA YO'Q"}</button>
         </div>
   
      `)
      $('.wrapper').appendChild(card);
   })

}