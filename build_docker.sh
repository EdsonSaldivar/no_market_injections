#!/bin/bash

docker rm -f no_market_injections

docker build --tag=no_market_injections . && \

docker run --name=no_market_injections --rm -p 3000:3000 -it no_market_injections
