import styled from "styled-components";

export const VotosMovie = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 34px;
  letter-spacing: 0.01em;
  display: flex;
  border: solid 2px #000000;
  border-radius: 0px 50px 50px 0px;
  background: rgba(10, 10, 10, 0.4);
  width: 100px;
  height: 40px;
  justify-content: center;
  z-index: 20;
  position: absolute;
  margin-top: -320px;
  margin-left: -14px;
`

export const ImagenMovie = styled.img`
  border-radius: 10px;
  background-color: #352E6C;
  width: 230px;
  height: auto;
  z-index: 10;
  margin-bottom: 20px;

  &:hover {
    transform:scale(1.1);
    opacity: 0.8;
    transition: 0.3s all ease;
    cursor: pointer;
  }
`

export const ContainerIcon = styled.p`
  color: yellow;
  margin-right: 10px;
`

export const ImagenMovieAgre = styled.img`
  border-radius: 10px;
  background-color: #352E6C;
  width: 230px;
  height: auto;
  z-index: 10;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  gap: 25px;

  &:hover {
    transform:scale(1.1);
    opacity: 0.8;
    transition: 0.3s all ease;
    cursor: pointer;
  }
`