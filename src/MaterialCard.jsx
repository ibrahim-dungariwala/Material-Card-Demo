import React from 'react'
import { Card, CardContent, Grid } from '@mui/material'
import { Data } from './Data'

export const MaterialCard = () => {
  return (
   <div>
      <Grid container spacing={.7}>
        {Data.map((item, index) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent style={{backgroundColor:"whitesmoke"}}>
                  <img src={item.image}  alt="" width={300} height={300}/>
                </CardContent>
              </Card>
            </Grid>
          )})}
          <Grid item xs={4}>
            <Card>
               <CardContent>
                  <img src="" alt="" />
               </CardContent>
            </Card>
          </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        </Grid>
  </div>
  )}