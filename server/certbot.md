certbot certonly \
 --webroot \
 --webroot-path /home/jchavez/server/dist \
 --renew-by-default \
 --email rex891@gmail.com \
 --text \
 --agree-tos \
 -d jchavez.info \
 -d www.jchavez.info

certbot certonly --dns-digitalocean --dns-digitalocean-credentials ~/certbot-creds. ini -d jchavez.info -d www.jchavez.info
