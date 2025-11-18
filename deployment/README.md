# Brivaro VPS Deployment Guide

Komplette Anleitung für das Deployment auf deinem VPS.

---

## 📋 **Was du bekommst**

Nach dem Setup hast du:
- ✅ **Docker** - Alle Services in Containern
- ✅ **Nginx** - Reverse Proxy mit SSL
- ✅ **PostgreSQL** - Datenbank
- ✅ **Redis** - Cache & Queue System
- ✅ **Firewall** - UFW konfiguriert (nur 22, 80, 443 offen)
- ✅ **Fail2Ban** - Schutz vor Brute-Force
- ✅ **Auto-Updates** - Security Updates automatisch
- ✅ **Auto-Renewal** - SSL-Zertifikate erneuern sich selbst
- ✅ **Monitoring** - Health Checks für alle Services

---

## 🚀 **Quick Start (5 Minuten)**

### 1. Verbinde dich mit deinem VPS
```bash
ssh root@DEINE_VPS_IP
```

### 2. Führe Setup-Script aus
```bash
# Download Setup Script
wget https://raw.githubusercontent.com/DEIN_REPO/brivaro-websites/main/deployment/setup-vps.sh

# Oder: Upload via SCP
# Lokal: scp deployment/setup-vps.sh root@DEINE_VPS_IP:/root/

# Executable machen
chmod +x setup-vps.sh

# Ausführen (dauert ~5 Minuten)
./setup-vps.sh
```

### 3. Passwörter ändern
```bash
nano /opt/brivaro/.env

# Ändere:
POSTGRES_PASSWORD=DEIN_STARKES_PASSWORT
REDIS_PASSWORD=DEIN_STARKES_PASSWORT
```

### 4. Code hochladen

**Option A: Git (Empfohlen)**
```bash
cd /opt/brivaro/app
git clone https://github.com/DEIN_USERNAME/brivaro-websites.git .
```

**Option B: SCP (von deinem Rechner)**
```bash
# Lokal ausführen:
scp -r /home/kaan/brivaro-websites/* root@DEINE_VPS_IP:/opt/brivaro/app/
```

### 5. Starten!
```bash
cd /opt/brivaro
docker compose up -d
```

### 6. Check ob alles läuft
```bash
docker compose ps

# Sollte zeigen:
# brivaro-app       Up
# brivaro-nginx     Up
# brivaro-postgres  Up
# brivaro-redis     Up
```

### 7. DNS konfigurieren
Gehe zu deinem Domain-Provider (z.B. Cloudflare, Namecheap):

```
A Record:     brivaro.de      → DEINE_VPS_IP
A Record:     www.brivaro.de  → DEINE_VPS_IP
```

Warte 5-10 Minuten bis DNS propagiert.

### 8. SSL aktivieren
```bash
cd /opt/brivaro
chmod +x setup-ssl.sh
./setup-ssl.sh brivaro.de
```

**Done!** 🎉 Deine Website ist jetzt live auf https://brivaro.de

---

## 📦 **Was ist installiert?**

### Docker Container

| Container | Port | Beschreibung |
|-----------|------|--------------|
| `brivaro-app` | 3000 | Next.js Application |
| `brivaro-nginx` | 80, 443 | Reverse Proxy + SSL |
| `brivaro-postgres` | 5432 | PostgreSQL Database |
| `brivaro-redis` | 6379 | Redis Cache |
| `brivaro-watchtower` | - | Auto-Updates für Images |

### Verzeichnis-Struktur

```
/opt/brivaro/
├── app/                    # Dein Next.js Code
├── nginx/
│   ├── nginx.conf         # Main Nginx Config
│   ├── conf.d/            # Site Configs
│   └── ssl/               # SSL Zertifikate
├── data/
│   ├── postgres/          # DB Data (persistent)
│   └── redis/             # Cache Data (persistent)
├── logs/
│   └── nginx/             # Nginx Logs
├── backups/               # Automatische Backups
├── docker-compose.yml     # Docker Setup
├── .env                   # Environment Variables
├── setup-ssl.sh           # SSL Setup Script
└── deploy.sh              # Deployment Script
```

---

## 🔧 **Nützliche Befehle**

### Docker Compose

```bash
# Alle Logs ansehen
docker compose logs -f

# Nur App Logs
docker compose logs -f app

# Container neu starten
docker compose restart app

# Alle Container neu starten
docker compose restart

# Container stoppen
docker compose down

# Container starten
docker compose up -d

# Status checken
docker compose ps

# Resource Usage
docker stats
```

### Nginx

```bash
# Nginx Logs
docker compose logs nginx

# Nginx Config testen
docker compose exec nginx nginx -t

# Nginx neu laden (ohne Downtime)
docker compose exec nginx nginx -s reload
```

### Database

```bash
# PostgreSQL Console
docker compose exec postgres psql -U brivaro -d brivaro

# Backup erstellen
docker compose exec postgres pg_dump -U brivaro brivaro > backup.sql

# Backup wiederherstellen
docker compose exec -T postgres psql -U brivaro brivaro < backup.sql
```

### Redis

```bash
# Redis Console
docker compose exec redis redis-cli -a DEIN_REDIS_PASSWORD

# Cache löschen
docker compose exec redis redis-cli -a DEIN_REDIS_PASSWORD FLUSHALL
```

### System

```bash
# Firewall Status
ufw status

# Fail2Ban Status
fail2ban-client status

# Fail2Ban SSH Bans
fail2ban-client status sshd

# Disk Usage
df -h

# Memory Usage
free -h

# Top Processes
htop
```

---

## 🔄 **Updates deployen**

### Option 1: Git Update (Quick)

Nur Code aktualisieren ohne Build:

```bash
cd /opt/brivaro
./git-update.sh
```

Das Script:
1. ✅ Zeigt verfügbare Updates
2. ✅ Pullt neuen Code (via Git)
3. ✅ Erkennt ob Dependencies geändert wurden
4. ✅ Fragt ob Services neu gestartet werden sollen
5. ✅ Zeigt Logs nach Restart

**Wann verwenden:** Für kleine Änderungen (Text, Styles, Config)

### Option 2: Full Deployment (Empfohlen)

Komplettes Deployment mit Build:

```bash
cd /opt/brivaro
./deploy.sh
```

Das Script:
1. ✅ Erstellt Backup
2. ✅ Pullt neuen Code (via Git)
3. ✅ Buildet neue Version
4. ✅ Startet Services neu
5. ✅ Macht Health Check
6. ✅ Rollback bei Fehler

**Wann verwenden:** Für größere Updates, neue Features, Dependency-Änderungen

### Option 3: Manuell

```bash
cd /opt/brivaro/app
git pull origin main

cd /opt/brivaro
docker compose build app
docker compose up -d app

# Check Logs
docker compose logs -f app
```

---

## 🔒 **SSL/HTTPS**

### SSL-Zertifikat erneuern (manuell)
```bash
certbot renew
cp /etc/letsencrypt/live/brivaro.de/*.pem /opt/brivaro/nginx/ssl/
docker compose restart nginx
```

### SSL-Zertifikat checken
```bash
openssl x509 -in /opt/brivaro/nginx/ssl/fullchain.pem -text -noout | grep "Not After"
```

### Auto-Renewal prüfen
```bash
cat /etc/cron.d/certbot-renew
systemctl status cron
```

---

## 🔥 **Firewall Management**

### Ports öffnen/schließen

```bash
# Port öffnen
ufw allow 8080/tcp comment 'Custom App'

# Port schließen
ufw delete allow 8080/tcp

# Status
ufw status numbered

# Rule löschen (by number)
ufw delete 3
```

### Fail2Ban

```bash
# Gebannte IPs anzeigen
fail2ban-client status sshd

# IP entbannen
fail2ban-client set sshd unbanip 1.2.3.4

# Logs
tail -f /var/log/fail2ban.log
```

---

## 📊 **Monitoring**

### Health Checks

Alle Container haben Health Checks:

```bash
# Status aller Container
docker compose ps

# Details zu einem Container
docker inspect brivaro-app | grep -A 10 Health
```

### Logs

```bash
# Live Logs (alle Services)
docker compose logs -f

# Letzte 100 Zeilen
docker compose logs --tail=100

# Nur Errors
docker compose logs | grep -i error

# Nginx Access Logs
tail -f /opt/brivaro/logs/nginx/access.log

# Nginx Error Logs
tail -f /opt/brivaro/logs/nginx/error.log
```

### Disk Space

```bash
# Disk Usage
df -h

# Docker Cleanup (Vorsicht!)
docker system prune -a --volumes

# Nur Images cleanup
docker image prune -a

# Logs rotieren
truncate -s 0 /opt/brivaro/logs/nginx/*.log
```

---

## 🆘 **Troubleshooting**

### Website lädt nicht

```bash
# 1. Check ob Container laufen
docker compose ps

# 2. Check App Logs
docker compose logs app

# 3. Check Nginx Logs
docker compose logs nginx

# 4. Check Firewall
ufw status

# 5. Test Nginx Config
docker compose exec nginx nginx -t

# 6. Restart everything
docker compose restart
```

### SSL Fehler

```bash
# Check Zertifikat
openssl s_client -connect brivaro.de:443 -servername brivaro.de

# Neu erstellen
./setup-ssl.sh brivaro.de
```

### Database Connection Error

```bash
# Check ob Postgres läuft
docker compose ps postgres

# Check Logs
docker compose logs postgres

# Restart
docker compose restart postgres

# Console testen
docker compose exec postgres psql -U brivaro -d brivaro
```

### Out of Memory

```bash
# Check Memory
free -h

# Check welcher Container Memory frisst
docker stats

# Restart App (freed memory)
docker compose restart app
```

### Container crasht sofort

```bash
# Logs anschauen
docker compose logs app

# Interaktiv starten (Debug)
docker compose run --rm app sh

# Environment Variables checken
docker compose config
```

---

## 🔐 **Security Best Practices**

### 1. SSH Key statt Password

```bash
# Auf deinem Rechner:
ssh-keygen -t ed25519 -C "brivaro-vps"

# Public Key auf VPS kopieren
ssh-copy-id root@DEINE_VPS_IP

# Dann: Password-Login deaktivieren
nano /etc/ssh/sshd_config
# Setze: PasswordAuthentication no
systemctl restart sshd
```

### 2. Non-Root User erstellen

```bash
# User erstellen
adduser brivaro

# Sudo Rechte geben
usermod -aG sudo brivaro

# SSH Key kopieren
cp -r /root/.ssh /home/brivaro/
chown -R brivaro:brivaro /home/brivaro/.ssh

# Als brivaro einloggen
su - brivaro
```

### 3. Passwörter regelmäßig ändern

```bash
nano /opt/brivaro/.env
# Ändere POSTGRES_PASSWORD und REDIS_PASSWORD

docker compose down
docker compose up -d
```

### 4. Backups

```bash
# Manuelles Backup
cd /opt/brivaro
tar -czf backup-$(date +%Y%m%d).tar.gz app/ data/ .env

# Backup runterladen (auf deinem Rechner)
scp root@DEINE_VPS_IP:/opt/brivaro/backup-*.tar.gz ./
```

### 5. Updates

```bash
# System Updates
apt update && apt upgrade -y

# Docker Updates
docker compose pull
docker compose up -d
```

---

## 📈 **Performance Tuning**

### Nginx Caching

```nginx
# In /opt/brivaro/nginx/conf.d/brivaro.conf hinzufügen:
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;
proxy_cache my_cache;
proxy_cache_valid 200 60m;
```

### Redis Memory Limit

```bash
# In docker-compose.yml unter redis:
command: redis-server --maxmemory 256mb --maxmemory-policy allkeys-lru
```

### PostgreSQL Tuning

```bash
# In docker-compose.yml unter postgres environment:
POSTGRES_INITDB_ARGS="-c shared_buffers=256MB -c max_connections=100"
```

---

## 🎯 **Next Steps**

Nach dem Setup:

1. ✅ **Monitoring**: Plausible Analytics installieren
2. ✅ **Backups**: Automatische Backups einrichten (Cronjob)
3. ✅ **CDN**: Cloudflare vor Nginx schalten (optional)
4. ✅ **Email**: SMTP für Transactional Emails (Resend)
5. ✅ **Auto-Blogger**: Entwickeln & deployen
6. ✅ **Lead-Qualifier**: Entwickeln & deployen

---

## 📞 **Hilfe**

Bei Problemen:
1. Check Logs: `docker compose logs -f`
2. Check Status: `docker compose ps`
3. Restart: `docker compose restart`
4. Letzte Option: `docker compose down && docker compose up -d`

**Server-Info:**
- VPS Provider: [Dein Provider]
- IP: `curl ifconfig.me`
- Region: [Deine Region]
- Plan: VC 2-4 (2 vCores, 4 GB RAM)

---

## 🚀 **Ready to Deploy!**

```bash
# Quick Command Reference
ssh root@VPS_IP              # Connect
./setup-vps.sh               # Initial setup
cd /opt/brivaro              # Go to app dir
docker compose up -d         # Start
docker compose logs -f app   # View logs
./setup-ssl.sh brivaro.de    # Setup SSL
./git-update.sh              # Quick update (nur Code)
./deploy.sh                  # Full deployment (mit Build)
```

**Happy Deploying! 🎉**
