export async function CreateSupplier(userdata) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8080/customer/add", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: { "content-type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      resolve({ data });
    } else {
      const err = await response.json();
      reject({err});
    }
  });
}


export async function LoginSupplier(userdata) {
  return new Promise(async (resolve)=>{
    const response = await fetch('http://localhost:8080/customer/login',{
      method:'POST',
      body:JSON.stringify(userdata),
      headers:{"content-type":'application/json'}
    })
    const data = response.json();
    resolve({data});
  })
}

export async function CheckSupplier(){
 return new Promise(async (resolve)=>{
  const response = await fetch('http://localhost:8080/customer/check')
  const data = response.json();
  resolve({data})
 })
 
}
