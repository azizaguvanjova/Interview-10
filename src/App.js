import React, { useState } from "react";

const images =[ "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]
 
function App() {
  return <Captcha />;
}

const Captcha = () => {
  // KODUNUZ BURAYA GELECEK
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [correctImage,setCorrectImage] = useState(null)

  const handleButtonClick =()=>{
    setIsModalOpen(true);
    setCorrectImage(Math.floor(Math.random()*6) +1)
  }

  const handleImageClick = (index) =>{
    if(index +1 === correctImage){
      alert("Correct! You've passed the CAPTCHA")
      setIsModalOpen(false)
      setCorrectImage(null)
    }else{
      alert("Incorrect! Try again")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
      onClick={handleButtonClick}> Start CAPTCHA</button>
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
        <div className="bg-white ">
          <h3 className="text-lg font-bold  text-black mb-3 text-center">
            Select the image with the number {correctImage}
          </h3>
          <div className="grid grid-cols-3 gap-2">{images.map((img,index) =>(
            <img 
            key={index}
            src={img}
            alt="CAPTCHA"
            className="w-32 h-32 cursor-pointer border-2 border-gray-300 hover:border-blue-300"
            onClick={()=>handleImageClick(index)}
            />
          ))}</div>
        </div>
      </div>
    )}
    
    </div>
  )

};

export default App;
