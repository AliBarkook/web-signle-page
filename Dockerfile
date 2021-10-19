FROM nginx
RUN apt update
RUN apt install sudo
RUN apt install curl

COPY ./web-single-page/ /etc/nginx/html/