import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import {BotonAgregar, ContenedorPrincipal } from '../styles/Carousel.elements';
import { FaPlay } from 'react-icons/fa';

export const CarouselMovies = () => {

    return (
      <div>
      
            <ContenedorPrincipal>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1639181415/Im%C3%A1genes%20para%20proyectos/SPRING%202/Dise%C3%B1o_sin_t%C3%ADtulo_4_ladz0p.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <BotonAgregar data-bs-toggle="modal" data-bs-target="#exampleModal"><FaPlay/> VER TRAILER</BotonAgregar>
    </Carousel.Caption>
          </Carousel.Item>
          
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1639181411/Im%C3%A1genes%20para%20proyectos/SPRING%202/Dise%C3%B1o_sin_t%C3%ADtulo_2_xqctga.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <BotonAgregar data-bs-toggle="modal" data-bs-target="#Modal2"><FaPlay/> VER TRAILER</BotonAgregar>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1639181419/Im%C3%A1genes%20para%20proyectos/SPRING%202/Dise%C3%B1o_sin_t%C3%ADtulo_hmdyt3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <BotonAgregar data-bs-toggle="modal" data-bs-target="#Modal3"><FaPlay/> VER TRAILER</BotonAgregar>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1639181475/Im%C3%A1genes%20para%20proyectos/SPRING%202/Dise%C3%B1o_sin_t%C3%ADtulo_1_psthct.png"
      alt="Cuarto slide"
    />

    <Carousel.Caption>
      <BotonAgregar data-bs-toggle="modal" data-bs-target="#Modal4"><FaPlay/> VER TRAILER</BotonAgregar>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1639181479/Im%C3%A1genes%20para%20proyectos/SPRING%202/Dise%C3%B1o_sin_t%C3%ADtulo_3_utg4vu.png"
      alt="Quinto slide"
    />

    <Carousel.Caption>
      <BotonAgregar data-bs-toggle="modal" data-bs-target="#Modal5"><FaPlay/> VER TRAILER</BotonAgregar>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        {/* Codigo del Modal 1*/}
        
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog bg-black">
                    <div class="modal-content bg-black">
                            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/nafr1kZfaEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <button type="button" class="btn-close white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    </div>
              </div>

              {/* Codigo del Modal 2*/}
        
                <div class="modal fade" id="Modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog bg-black">
                    <div class="modal-content bg-black">
                            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ip_CYHdyUBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    </div>
          </div>
          
          {/* Codigo del Modal 3*/}
        
                <div class="modal fade" id="Modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog bg-black">
                    <div class="modal-content bg-black">
                            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/YoHD9XEInc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    </div>
          </div>
          
          {/* Codigo del Modal 4*/}
        
                <div class="modal fade" id="Modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog bg-black">
                    <div class="modal-content bg-black">
                            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    </div>
              </div>

          {/* Codigo del Modal 5*/}
        
                <div class="modal fade" id="Modal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog bg-black">
                    <div class="modal-content bg-black">
                            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/g8evyE9TuYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    </div>
              </div>
              </ContenedorPrincipal>
        </div>
    )
}