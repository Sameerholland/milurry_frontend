export async function FetchDashboardData (userdata){
   return new Promise (async (resolve)=>{
      const response = await fetch('http://localhost:8080/Dashboard/'+ userdata)
      const Data = await response.json();

      console.log(Data)
      resolve({data:{Order_Amount:Data.order_Amount,Daily_Sales:Data.Daily_sales, Order_Status:Data.Order_status, pending_Order:Data.pendingOrder,Most_Selling_Category:Data.Group_Data }})
   })

}