# FROM nginx:latest

# COPY nginx.conf /etc/nginx/nginx.conf

# WORKDIR /usr/share/nginx/html

# COPY index.html .
# COPY react.html .
# COPY python.html .
# COPY utils ./utils

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


FROM nginx:latest

# Установка PHP (в зависимости от вашего проекта)
RUN apt-get update && apt-get install -y php-cli

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY react.html .
COPY python.html .
COPY utils ./utils

# Добавьте следующие строки для новых файлов PHP и папки phpmailer
COPY sendmail.php .
COPY phpmailer ./phpmailer

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
