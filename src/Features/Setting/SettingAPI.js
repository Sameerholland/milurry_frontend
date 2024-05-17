export async function FetchUser(userdata){
   return new Promise (async (resolve)=>{
      const response = await fetch('http://localhost:8080/user',{
         method:'POST',
         body:JSON.stringify(userdata),
         headers:{'content-type':'application/json'}
      })
      const data = await response.json();
      resolve({data})
   })
}

export async function AddCategory(data){
   return new Promise (async (resolve)=>{
      console.log(data)
      const response = await fetch('http://localhost:8080/user/category/add',{
         method:'POST',
         body:JSON.stringify(data),
         headers:{'content-type':'application/json'}
      })
      const Data =  await response.json();
      resolve({Data})
   })
}

export async function UpdateProfilePic(data){
   return new Promise( async (resolve)=>{
      const response = await fetch('http://localhost:8080/user/profile/updateprofilepic',{
         method:"POST",
         body:JSON.stringify(data),
         headers:{'content-type':'application/json'}
      })
      const Data = await response.json();
      resolve({Data})
   })
}