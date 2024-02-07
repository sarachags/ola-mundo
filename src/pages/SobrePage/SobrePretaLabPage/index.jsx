import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './styles.css';

const itemData = [
  {
    img: 'https://mundonegro.inf.br/wp-content/uploads/2018/08/1_MnIyRTEJnl5yiGdvQoa3Qw-768x504.jpeg',
    title: 'pretalab mulheres',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://assets-global.website-files.com/5b05e2e1bfcfaa4f92e2ac3a/5b18443f683265761b42a5ad_pretalab-24.jpg',
    title: 'professora',
  },
  {
    img: 'https://www.rbsdirect.com.br/imagesrc/24845502.jpg?w=1024&h=1024&a=c',
    title: 'mulher',
  },
  {
    img: 'https://noticiapreta.com.br/wp-content/uploads/2020/12/Foto_divulgacao_lideres-de-impacto.-Instituto-Ekloos.jpeg',
    title: 'mulher 2',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/474x/5a/f8/49/5af849939245630ad2918df4d1afacf2.jpg',
    title: 'mulher 3',
  },
  {
    img: 'https://mercadoeconsumo.com.br/wp-content/uploads/2022/11/shutterstock_1405194650-1024x566.jpg',
    title: 'mulher 4',
  },
];

const srcset = (image) => ({
  src: `${image}?fit=crop&auto=format`,
  srcSet: `${image}?fit=crop&auto=format&dpr=2 2x`,
});

const SobrePretaLabPage = () => {
  return (
    <Container>

      <Typography variant="h2" component="h3" gutterBottom>
        Página dedicada a PretaLab
      </Typography>
      
      <Typography variant="body1" paragraph>
      Navegue e conheça mais sobre a PretaLab       
      </Typography>
      
      <Button variant="contained" color="primary" href="https://www.pretalab.com/" target="_blank">
      Vá para o site da PretaLab!      
      </Button>

      <div className="sobrePretaLabContainer">

        <img
        className="sobrePretaLabTopImage"
        src="https://opoderdofuturo.pretalab.com/wp-content/uploads/2023/07/FOTO-DOBRA-3-1024x946.png"
        alt="Descrição da Imagem"
        />     
           
        <p>
        <h2>Junte-se a nós</h2> Vem fazer parte dessa jornada emocionante e descubra como a PretaLab 
        está moldando o cenário tecnológico de maneira inovadora e inclusiva. Navegue por nossos projetos,
        inspire-se nas histórias de sucesso e conecte-se com uma comunidade vibrante comprometida com a 
        igualdade de oportunidades. Seja parte dessa revolução tecnológica!
        </p>

        <p>
        <h2>PretaLab</h2> é uma plataforma que conecta mulheres negras que são ou gostariam de ser da tecnologia, 
        por meio dos nossos ciclos formativos, rede de profissionais, mercado de trabalho, 
        consultorias e estudos. 
        </p>

        <p>A PretaLab, acredita que a tecnologia tem o poder de transformar vidas e comunidades.
        Seus programas e iniciativas visam eliminar barreiras para o acesso feminino na tecnologia, 
        capacitando talentos diversos a alcançançando todo o seu potencial. 
        Dedicada a construir um futuro onde a tecnologia seja verdadeiramente inclusiva.
        </p>
        <p>
          <h2>Galeria Visual</h2> ao lado representa a diversidade e a criatividade que celebramos diariamente. 
          Cada imagem conta uma história única, capturando momentos que ilustram a riqueza de experiências
          que a tecnologia e a comunidade PretaLab oferecem. <b>Explore conosco!</b>
        </p>

        <ImageList
          className="sobrePretaLabImageList"
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                className="sobrePretaLabImage"
                {...srcset(item.img)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      
      </div>
    </Container>
  );
};

export default SobrePretaLabPage;
