#!/usr/bin/env bash

composer install --no-interaction --optimize-autoloader

service nginx start
php-fpm
