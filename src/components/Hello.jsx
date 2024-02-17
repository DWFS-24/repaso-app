import { useEffect } from "react";


const Hello = ({name}) => {

  useEffect(() => {
    console.log('cambia prop:', name)
  }, [name]);


  return (
    <section>
      <h1>
        Hola {name} Bienvenido a mi App
      </h1>
    </section>
  )
}

export default Hello