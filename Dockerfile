FROM php:8.2-fpm

RUN apt-get update -y \
    && apt-get install -y nginx

ENV PHP_CPPFLAGS="$PHP_CPPFLAGS -std=c++11"

COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh /etc/entrypoint.sh
RUN chmod +x /etc/entrypoint.sh

WORKDIR /usr/share/nginx/html

COPY --chown=www-data:www-data index.html .
COPY --chown=www-data:www-data react.html .
COPY --chown=www-data:www-data python.html .
COPY --chown=www-data:www-data utils ./utils
COPY --chown=www-data:www-data sendmail.php .

EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["/etc/entrypoint.sh"]