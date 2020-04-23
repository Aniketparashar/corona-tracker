import React, { Component } from 'react'
import {Cards, Chart , Countrypicker} from './Components'
import  styles from './App.module.css';
import {fetchData} from './Api'
import coronaImage from './images/images3.png'

class App extends Component {
  state={
    data:{},
    country:'',
  }

 async componentDidMount(){
    const fetcheddata=await fetchData()
    this.setState({data:fetcheddata})


  }

  handleCountryChange=async(country)=>{
    const fetcheddata=await fetchData(country)
    this.setState({data:fetcheddata,country:country})


  }
  render() {
    const {data,country}=this.state
    return (
      <div className={styles.body}>
      <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
         
         </div>
         </div>
    )
  }
}

export default App
