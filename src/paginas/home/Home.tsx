import React, { useEffect } from 'react';
import {Typography, Grid, Button, Link} from '@material-ui/core';
import {Box} from '@mui/material';
import TabPostagens from '../../componentes/postagens/tabPostagens/TabPostagens';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                         
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                   
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src="https://i.imgur.com/7EhqwbF.jpeg" alt="" width="600px" height="600px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagens />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;