import styled from "styled-components";
const MainGrid = styled.main`
  width:100vw;
  padding:16px;
  grid-gap:10px;
  margin: 0 auto;
  max-width:500px;
  .profileArea{
    display:none;
    @media(min-width:860px){
      display:block;
    }
  }

  @media(min-width:860px){
    display:grid;
    max-width:1110px;
    grid-template-areas:
    "profileArea welcomeArea profileRelations";
    grid-template-columns:160px 1fr 312px;
  }
 `;

 export default MainGrid;