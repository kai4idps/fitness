import React, { useEffect } from "react"
import { Carousel } from "react-materialize"

const Button = () => {
  return (
    <div>
      <Carousel
        carouselId="Carousel-2"
        images={[
          "https://picsum.photos/250/250?image=0",
          "https://picsum.photos/250/250?image=1",
          "https://picsum.photos/250/250?image=2",
          "https://picsum.photos/250/250?image=3",
          "https://picsum.photos/250/250?image=4",
        ]}
        options={{
          fullWidth: true,
          indicators: true,
          dist: -100,
          height: 500,
          interval: 4000,
          duration: 500,
          centerImages: true,
        }}
      />
    </div>
  )
}

export default Button
