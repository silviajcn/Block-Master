import React, { useState } from 'react';
import { fileUpload } from '../helpers/fileUpload';
import { url } from '../helpers/urlApi';
import { BotonAgregar, ContainerBoton, ContainerDate, ContainerInputs, ContainerSeleccionar, ContainerSelect, ContanedorAgregar, InputForm, InputPoster, InputSelect, InputSinopsis, Select, TituloForm } from '../styles/Agregar.elements';
import axios from 'axios';

export const FormAgregar = () => {
    
    const [movie, setMovies] = useState({
        title: "",
        original_title: "",
        runtime: "",
        overview: "",
        genre: "",
        release_date: "",
        poster_path: "",
    })

    const { title, original_title, runtime, overview, genre, release_date, poster_path } = movie

    const handleChange = ({ target }) => {
        setMovies({
            ...movie,
            [target.name] : target.value
        })
        console.log(movie);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleFile = (e) => {
        const file =e.target.files[0]
        fileUpload(file)
            .then(response => {
               movie.poster_path = response
            }).catch(error => {
                console.log(error);
           })
    }

    const postData = () => {
        axios.post(url, movie)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
        <ContanedorAgregar>
            <form id="formAgregarMovie" onSubmit={handleSubmit}>
                <TituloForm>Agregar película</TituloForm>
                <div>

                    <ContainerInputs>
                        <InputForm id="inputName" name="title" type="text" placeholder="Nombre de la película" value={title} onChange={handleChange}/>
                    </ContainerInputs>

                    <ContainerInputs>
                        <InputForm id="inputNameOriginal" name="original_title" type="text" placeholder="Nombre original de la película" value={original_title} onChange={handleChange}/>
                    </ContainerInputs>

                    <ContainerInputs>
                        <InputForm id="inputRuntime" name="runtime" type="number" placeholder="Minutos de duracion de la película" value={runtime} onChange={handleChange}/>
                    </ContainerInputs>

                    <ContainerInputs>
                        <InputSinopsis id="inputSinopsis" name="overview" placeholder="Sinopsis de la película" value={overview} onChange={handleChange}>
                        </InputSinopsis>
                    </ContainerInputs>

                    <ContainerSeleccionar>
                        <ContainerSelect>
                        <label>Genero de la película</label>
                        
                        <Select id="selectTipo" name="genre" value={genre} onChange={handleChange}>
                        <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                        <option name="accion">Acción</option>
                        <option name="drama">Ciencia ficción</option>
                        <option name="horror">Horror</option>
                        <option name="drama">Suspenso</option>
                        <option name="drama">Drama</option>
                        <option name="drama">Comedia</option>
                        <option name="drama">Fantasía</option>
                        <option name="drama">Musical</option>
                        <option name="drama">Animación</option>
                        <option name="drama">Anime</option>
                        <option name="drama">Aventura</option>
                        <option name="drama">Corto</option>
                        <option name="drama">Documental</option>
                        </Select>
                        </ContainerSelect>


                        <ContainerDate>
                            <label>Fecha de estreno</label>
                            <InputSelect id="inputRelease_date" name="release_date" type="date" value={release_date} onChange={handleChange} />
                        </ContainerDate>
                    </ContainerSeleccionar>

                    <ContainerInputs>
                        <div>
                            <label>Poster de la película</label>
                        </div>
                        <InputPoster id="inputPoster_path" name="poster_path" type="file" value={poster_path} onChange={handleFile}/>
                    </ContainerInputs>

                    <ContainerBoton>
                    <BotonAgregar id="btnAgregar" onClick={postData}>Agregar película</BotonAgregar>
                    </ContainerBoton>

                </div>
            </form>
        </ContanedorAgregar>
    )
}
