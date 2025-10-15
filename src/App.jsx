import { useState } from "react";


function App() {

  const [currentPicture, setCurrentPicture] = useState(null);

  const pictureArray = [
    "https://images.pexels.com/photos/4909162/pexels-photo-4909162.jpeg",
    "https://images.pexels.com/photos/31746297/pexels-photo-31746297.jpeg",
    "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
    "https://images.pexels.com/photos/3225515/pexels-photo-3225515.jpeg",
    "https://images.pexels.com/photos/34273316/pexels-photo-34273316.jpeg",
  ];


  return (<div className="w-full">
    <div className="w-full h-screen bg-black flex justify-center items-center relative m-0 p-0 overflow-hidden">
      <img src="https://images.pexels.com/photos/31746297/pexels-photo-31746297.jpeg" alt="hero image" className="absolute w-full h-full object-cover overflow-hidden m-0 p-0 block blur-xs"/>
      <div className="flex flex-col z-10 text-white">
        <h1 className="font-doris text-[89px]">Welcome to My Page</h1>
        <p className="text-center font-doris text-4xl">Full Stack Developer</p>
      </div>
    </div>
    <div className="w-full h-screen bg-amber-900 relative m-0 p-0 overflow-hidden flex justify-center items-center">
      <img src={`${currentPicture}`} alt="" className="absolute w-full h-full object-cover overflow-hidden blur-xs animate-fadeIn"/>
      // container for pictures
      <div className="flex gap-5 absolute bottom-20">
        {pictureArray.map((picture, index) => <img key={index} src={picture} alt={`picture-${index}`} className="w-32 h-20 object-cover hover:scale-110 transition-transform cursor-pointer" onMouseOver={() => setCurrentPicture(picture)}/>)}
      </div>
    </div>
  </div>
  )
}

export default App;