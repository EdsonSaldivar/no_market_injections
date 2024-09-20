#!/bin/bash

# Elimina cualquier contenedor existente con el mismo nombre
docker rm -f no_market_injections

# Construye la imagen usando el Dockerfile
docker build --tag=no_market_injections . && \

# Ejecuta el contenedor
docker run --name=no_market_injections --rm -p 3000:3000 -it no_market_injections
