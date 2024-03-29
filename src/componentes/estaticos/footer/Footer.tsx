import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
)
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: '#3F51B5', height: '120px' }}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: 'white' }}
              >
                Siga-me nas redes sociais{' '}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.facebook.com/allan.gates1/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon style={{ fontSize: 60, color: 'white' }} />
              </a>
              <a
                href="https://www.instagram.com/allan.apires/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon style={{ fontSize: 60, color: 'white' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/allanpires95/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon style={{ fontSize: 60, color: 'white' }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: '#303F9F', height: '60px' }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: 'white' }}
              >
                © 2023 Copyright:
              </Typography>
            </Box>
            <Box>
              <a
                target="_blank"
                href="https://brasil.generation.org"
                rel="noreferrer"
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: 'white' }}
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;