import React, {useState, useEffect } from 'react'

const PickCity = () => {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Načtení seznamu měst z JSON souboru pomocí fetch
        fetch("/city.list.json")
          .then((response) => response.json())
          .then((data) => {
            setCities(data);
          })
          .catch((error) => {
            console.error("Error loading city list:", error);
          });
      }, []);

    return <>
    <form action="">
      <input
        
        type="text"
        placeholder="Vyber město"
      />
      


      
   
    </form>
  </>;
}

export default PickCity