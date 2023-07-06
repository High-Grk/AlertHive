FROM alpine:latest

RUN apk add --update curl && rm -rf /var/cache/apk/*
COPY script.sh /etc/periodic/15min/script
RUN chmod +x /etc/periodic/15min/script

RUN echo "*/15 * * * * run-parts /etc/periodic/15min" > /etc/crontabs/root

CMD crond -l 2 -f