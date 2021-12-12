import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000000;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const ContenedorDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  @media screen and (max-width: 875px) {
    margin-left: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Poster = styled.img`
  color: #fff;
  width: 300px;
  height: auto;
  border-radius: 10px;
`

export const DetallesMovie = styled.div`
  justify-content: flex-start;
  text-align: start;
  align-items: center;
  color: #fff;
  width: 600px;
  margin-left: 40px;
  border: solid 1px #ffc107;
  padding: 20px;
  border-radius: 8px;
  @media screen and (max-width: 375px) {
    margin-left: 0px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  color: #fff;
`

export const InglesTitle = styled.p`
  color: #9D9D9D;
  font-size: 16px;
`

export const NumerosMovie = styled.p`
  display: flex;
  justify-content: start;
  align-items: center;
`


export const Votos = styled.p`
  color: #fff;
  margin-right: 20px;
`

export const Popularidad = styled.p`
  color: #fff;
`

export const Genero = styled.p`
  color: #fff;
`

export const Sinopsis = styled.p`
  color: #fff;
`

export const Duracion = styled.p`
  color: #fff;
`
