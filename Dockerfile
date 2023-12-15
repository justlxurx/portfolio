FROM nginx:latest

COPY index.html /usr/share/nginx/html/
COPY python.html /usr/share/nginx/html/
COPY react.html /usr/share/nginx/html/

COPY utils/images /usr/share/nginx/html/images
COPY utils/styles /usr/share/nginx/html/styles
COPY utils/scripts /usr/share/nginx/html/scripts

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]

