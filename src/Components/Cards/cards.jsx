import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './chart.module.css'
import Countup from 'react-countup'
import cx from 'classnames'
const Cards =({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    
    console.log(lastUpdate)
    if(!confirmed){
        return "Loading";
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                        <Countup start={0} end={confirmed.value} duration={2.5} seperator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">No of active cases of covid-19</Typography>

                    </CardContent>

                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                        <Countup start={0} end={recovered.value} duration={2.5} seperator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">No of recover cases of covid-19</Typography>

                    </CardContent>

                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.deaths)}SS>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">
                        <Countup start={0} end={deaths.value} duration={2.5} seperator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">No of death cases of covid-19</Typography>

                    </CardContent>

                </Grid>


            </Grid>
            
        </div>
    )
}

export default Cards;