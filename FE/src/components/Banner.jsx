import { useState } from 'react';
import './Banner.css'


function Banner() {
  const slideMap = [
    {
      pic: 'https://vapa.vn/wp-content/uploads/2022/12/hinh-nen-hoa-tulip-001.jpg',
      url: ''
    },
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s',
      url: ''
    },
    {
      pic: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
      url: ''
    }
  ]

  const [curr, setCurr] = useState(0)

  const prevBtn = () => {
    console.log(curr);
    setCurr((curr===0) ? slideMap.length-1 : curr-1)
  }
  const nextBtn = () => {
    console.log(curr);
    setCurr((curr===slideMap.length-1) ? 0 : curr+1)
  }
  // setInterval(nextBtn, 5000)

  return (
    <div className="slideContainer">
      <div className="slideBox">
            <img src={slideMap[curr].pic} alt=""/>
      </div>
      <div className="groupBtn">
        <button className='prevBtn btnSlide' onClick={prevBtn}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className='nextBtn btnSlide' onClick={nextBtn}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}


export default Banner
