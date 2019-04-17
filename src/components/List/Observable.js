import React, { useRef, useEffect, useContext } from 'react'
import AppContext from '../../AppContext';

export default function Observable() {
  const observableRef = useRef();
  const context = useContext(AppContext);

  useEffect(() => {
    const options = { root: null, rootMargin: '0px 0px 200px 0px', threshold: 1 }
    const observableObserver = new IntersectionObserver(([entry]) => {
        const { isIntersecting } = entry
        if (isIntersecting) context.fetchGIFs();
    }, options)
    observableObserver.observe(observableRef.current);

    // cleanup
    return () => { observableObserver.unobserve(observableRef.current) }
  })

  return (
    <div ref={observableRef}>
    </div>
  )
}

