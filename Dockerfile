FROM nginx:1.10.1-alpine
COPY src/html /usr/share/nginx/html

EXPOSE 80/tcp

CMD [ "nginx","-g","deamon off;" 