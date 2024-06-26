import styled from '@emotion/styled';

export const SelectedMoviesList = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
margin-top:130px;
padding-bottom:50px;

img {  
  border-radius:10px;   
  width: 250px;
  } 
   @media (max-width: 1210px) {    
    img {  
  border-radius:10px;   
  width: 230px;
  }
   @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    img {  
  border-radius:10px;   
  width: 300px;
  }
  } 
   @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    img {  
  border-radius:10px;   
   width: 280px;
  }
  } 
`;
