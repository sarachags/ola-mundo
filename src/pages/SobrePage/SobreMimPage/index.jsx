import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import './styles.css';

const SobreMimPage = () => {
  return (
    <Container className="sobre-mim-container">
      
      <Grid container spacing={5}>
        <Grid item xs={4.5} className="perfil">
          <Card elevation={3}>
            <CardContent>
              <Avatar
                alt="Sara Chagas"
                src="Eu.jpg"  
              />
              <Typography variant="h4">Sara Chagas</Typography>
              <Typography variant="subtitle1">Desenvolvedora Front-End</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={7.5} className="contatos"> 
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">Contatos</Typography>
              <Typography variant="body1">
                <ul>
                  <br />
                  <li>Fone/Whatsapp: (81)999340839</li>
                  <li>Email: saraschagass@gmail.com</li> 
                  <li>LinkedIn: Sara Chagas</li>
                  <li>GitHub: Sara Chagas</li>              
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
       
        <Grid item xs={16} className="sobreMim"> 
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">Sobre Mim</Typography>
              <Typography variant="body1">
                Dedicada e comunicativa, busco me manter atualizada sobre assuntos da tecnologia, 
                me comprometendo com projetos desafiadores e buscando aperfeiçoamento por meio de 
                cursos e pesquisas relacionados a área.              
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={16} className="habilidades"> 
          <Card elevation={18}>
            <CardContent>
              <Typography variant="h5">Habilidades</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={3} className="bloco-1">
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">HTML</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={3} className="bloco-2">
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">CSS</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={3} className="bloco-3">
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">Java Script</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={3} className="bloco-4">
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">React</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default SobreMimPage;
