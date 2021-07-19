import { useEffect, useRef, useState } from 'react';

export const useNearScreen = ({ distance = '100px', externalRef, once = true } = {}) => {
   const [isNearScreen, setShow] = useState(false);
   const fromRef = useRef();

   useEffect(() => {
      let observer = '';

      const fromElement = externalRef ? externalRef.current : fromRef.current;
      if (!fromElement) return;

      const onChange = (entries, observer) => {
         const el = entries[0];

         if (el.isIntersecting) {
            setShow(true);
            once && observer.disconnect(); //una ves que se hace la interseccion se desconecta
         } else {
            !once && setShow(false);
         }
      };

      Promise.resolve(typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')).then(() => {
         const observer = new IntersectionObserver(onChange, {
            rootMargin: distance,
         });

         observer.observe(fromElement);
      });

      return () => observer && observer.disconnect(); //cuando el componente se deje de utilizar no se muestre y limpie el elemento cuando no esta disponible
   });

   return { isNearScreen, fromRef };
};
