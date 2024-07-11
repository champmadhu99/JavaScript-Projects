let http = new XMLHttpRequest();

http.open('get','products.json',true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
         let products = JSON.parse(this.responseText);
         let output ="";
            

         for(let item of products){
            output += `

            <div class="products">
             <img src="${item.image}" alt="">
             
             
             
                  <div class="demo py-5 align-center">
              
            
        <table >
            <tr>
                <th>Id:</th>
                <td>${item.id}</td>
            </tr>
            <tr>
                <th>Model:</th>
                <td>${item.model}</td>
            </tr>
            <tr>
                <th>Year:</th>
                <td>${item.year}</td>
            </tr>
            <tr>
                <th>Colour:</th>
                <td>${item.colour}</td>
            </tr>
            <tr>
                <th>Door:</th>
                <td>${item.door} </td>
            </tr>
            <tr>
                <th>Price:</th>
                <td>${item.price}</td>
            </tr>
            
        </table>
                
           </div>
             
        
          </div>

            `;
         }

         document.querySelector(".products").innerHTML = output;
    }
}
