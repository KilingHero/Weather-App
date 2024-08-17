import React, {useState, useEffect } from 'react'

const PickCity = ({fetchWeatherData,setSelectedTown}) => {
    const [userChoice, setUserChoice] = useState("");
    const [showList, setShowList] = useState([]);
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
      
    //   ulozeni vstup uzivatele
      const showListOfCities = (e) => {
        const value = e.target.value.toLowerCase();
        setUserChoice(value);
    // porovnani vstupu uzivatele s nazvem města
        if (value.length > 2) {
          const filteredResult = cities.filter((city) => city.name.toLowerCase().includes(value));
          setShowList(filteredResult.slice(0, 5));
        } else {
          setShowList([]);
        }
      };

      //  funkce pro zpracování výsledku a aktualizaci stavu
      const handleUserClick = (select) => {
        setUserChoice(select.name.toLowerCase());
        setShowList([]);
        setSelectedTown(select.name)
        
      
        fetchWeatherData(select);
        setUserChoice('')
      }
    

    return <>
    <form action="">
      <input
        onChange={showListOfCities}
        value={userChoice}
        type="text"
        placeholder="Vyber město"
      />
     



      <div className="renderList"> 
{/* vypis vysledku */}
      {showList.length > 0 && (
        <ul >
          {showList.map((city) => (
            <li className="list" onClick={()=> handleUserClick(city)}    key={city.id}> {city.name} </li>
          ))}
        </ul>
      )}
</div>
   
    </form>
  </>;
}

export default PickCity