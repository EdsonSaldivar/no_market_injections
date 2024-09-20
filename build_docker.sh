#!/bin/bash

sudo docker rm -f no_market_injections

sudo docker build --tag=no_market_injections . && \

sudo docker run --name=no_market_injections --rm -p 3000:3000 -it no_market_injections
