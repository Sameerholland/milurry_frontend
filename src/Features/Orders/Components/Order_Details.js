import React from 'react'

export default function Order_Details() {
  return (
    <div>
      <div className="flex  justify-between items-center  pt-5 ">
        <div>
          <p className="flex justify-center items-center text-5xl linden-hill-regular text-olive-green">
            Orders
          </p>
          <p className="text-base kurale-regular text-olive-green-70 ">
            Check Your Progress
          </p>
        </div>
        <button className="px-5 py-2 kurale-regular shadow-drop-2-bl rounded-lg text-white bg-blue">
          Download Sheet
        </button>
      </div>
    </div>
  )
}
