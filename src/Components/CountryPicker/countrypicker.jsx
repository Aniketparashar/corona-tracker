import React ,{useState,useEffect}from 'react';
import {NativeSelect,FormControl} from  '@material-ui/core'
import {fetchCountries} from '../../Api'
import styles from './countrypicker.module.css'
const Countrypicker =({handleCountryChange})=>{
    const [fetchedCountries,setfetchedCountries]=useState([]);
    useEffect(() => {
        const fetchAPI=async()=>{
            setfetchedCountries(await fetchCountries());
        }
        fetchAPI();
      
    }, [setfetchedCountries])

    console.log(fetchedCountries);
    return(
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect default="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                    
                </NativeSelect>

            </FormControl>
            
        </div>
    )
}

export default Countrypicker;