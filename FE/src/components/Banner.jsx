import { useState } from 'react';
import './Banner.css'


function Banner() {
  const slideMap = [
    {
      pic: 'https://hinhanh.webvua.com/images/slider/4850/resize/5426200326232.jpg',
      url: ''
    },
    {
      pic: 'https://hinhanh.webvua.com/images/slider/4850/resize/0424002456253.jpg',
      url: ''
    },
    {
      pic: 'https://hinhanh.webvua.com/images/news/4850/resize/0424220420303.jpg',
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
