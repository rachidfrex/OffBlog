import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const Catego = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla  w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container  ">
          {slides.map((index) => (
            <div className="embla__slide " key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catego
