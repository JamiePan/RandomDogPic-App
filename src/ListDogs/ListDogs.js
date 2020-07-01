import React from 'react';
import { Grid } from '@material-ui/core';
import { Item } from './style';

//ListDogs Component
//
const ListDogs = (props) => {
    return (
        <Grid container>
        {props.URLs.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Item>
              <img className='pic' src={item} alt='' />
            </Item>
          </Grid>
        ))}
      </Grid>
    )
}


export default ListDogs;