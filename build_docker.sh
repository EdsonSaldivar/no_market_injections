#!/bin/bash

# Detener y eliminar los contenedores si ya existen
sudo docker compose down

# Construir y levantar los servicios (MongoDB y la app) definidos en docker-compose.yml
sudo docker compose up --build

