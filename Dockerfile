FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY react.html .
COPY python.html .
COPY utils ./utils

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
