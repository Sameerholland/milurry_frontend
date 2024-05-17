export async function AddProduct(userdata){
   return new Promise (async (resolve)=>{
      const response = await fetch('http://localhost:8080/product/add',{
         method:'POST',
         body:JSON.stringify(userdata),
         headers:{"content-type":"application/json"}
      })
      const data = await response.json();
      console.log(data)
      resolve({data});
   })
}

export async function FetchProduct(query){
   return new Promise(async (resolve)=>{
      const response = await fetch('http://localhost:8080/product/' + query)
      const data = await response.json();
      console.log(data)
      resolve({data:{Product:data.product,totaldoc:data.totalitems}})
   })
}