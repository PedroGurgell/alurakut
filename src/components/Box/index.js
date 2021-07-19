import styled from "styled-components";
const Box = styled.div`
  background:white;
  border-radius:8px;
  padding:16px;
  margin-bottom:10px;
  box-shadow: 1px 1px 48px -14px rgba(0,0,0,0.25);
    &:hover {
    box-shadow: 1px 1px 48px -14px rgba(64, 35, 111, 0.45);
    }
  .boxLink {
    font-size: 14px;
    color: rgba(75, 75, 200, 1);
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color:#555;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color:#555;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color:#454545;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F5F5F5;
    color: #555555;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #999999;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background: rgba(80, 65, 160, 1);
  }



`;

export default Box;