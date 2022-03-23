import React, { useEffect, useState } from 'react'

export default function CodeCheck() {

  const [codigo, setCodigo] = useState('');
  const [isShowInput, setIsShowInput] = useState(true);
  const [contador, setContador] = useState(20);

  const handleChange = e => {
    setCodigo(e.target.value);
  }

  useEffect(() => {
    console.log('useEffect se ejecuta al inicio')
  }, []) // Si el array de dependencias está vacío solo se ejecutará una
         // vez cuando se monte el componente

  useEffect(() => {
    if (codigo === '1234') {
      setIsShowInput(false);
    }
  }, [codigo]) // Este hook se ejecutará cuando cambie el valor de codigo

  useEffect(() => {
    const timer = setInterval(() => {
      if (contador > 0) {
        setContador(prevContador => prevContador - 1);
      }
    }, 1000);
    return () => clearInterval(timer); // Callback opcional de limpieza
  }, [contador])

  return (
    <>
      {isShowInput ? 
        <>
          <p>Introduzca el código recibido por SMS</p>
          <input type="text" onChange={handleChange} maxLength={4}/>
          <p className='clock'>{contador}</p>
        </>
        : 
        <p>Código correcto, bienvenid@</p>
      }
    </>
  )
}
