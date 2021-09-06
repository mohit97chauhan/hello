import axios from 'axios';
import React, {useState,useEffect} from 'react'

const Temp = () => {
    const [City,setCity] = useState(null);
    const [tempMax, setTempMax] = useState("-")
    const [tempMin, setTempMin] = useState("-")
    const [temp, setTemp] = useState("-")
    const [search, setsearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&unit=matric&appid=c8adc2e11020fe4632d874c57dc69c87`;
            axios.get(url).then(response => {
                const respons = response.data
               try {
                    setCity(respons.main);
                    setTemp(respons.main.temp)
                    setTempMax(respons.main.temp_max)
                    setTempMin(respons.main.temp_min)
                }
                catch {
                    console.log("Error")
                }
            }).catch(error => {
                setCity(`No city with name => ${City}`);
                setTemp("-")
                setTempMax("-")
                setTempMin("-")
            })
        }
        fetchApi();
       
    },[search, temp])

    return (
        <div>
            <div>
            <div className="serch">
                <div>
                    <input 
                    type ="search"
                    className="inputfield"
                    onChange={ (event)=>{ setsearch(event.target.value)
                    } }  />
                </div>
            <div>
            <h1>{search}</h1>
            <h2>{temp}</h2>
            <h3>{`min - ${tempMin} : Max - ${tempMax}`}</h3>
            </div>
            </div>
        </div>
    
            
        </div>
    )
}

export default Temp
