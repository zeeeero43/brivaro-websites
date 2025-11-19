# Brivaro VPS Deployment Guide

Komplette Anleitung für das Deployment auf deinem VPS - **ohne Docker, nur Node.js + nginx**.

---

## 📋 **Was du bekommst**

Nach dem Setup hast du:
- ✅ **Node.js 20 LTS** - Direktes npm Setup
- ✅ **nginx** - Reverse Proxy mit SSL
- ✅ **systemd** - Service Management
- ✅ **Firewall** - UFW konfiguriert (nur 22, 80, 443 offen)
- ✅ **Fail2Ban** - Schutz vor Brute-Force
- ✅ **Auto-Updates** - Security Updates automatisch
- ✅ **Auto-Renewal** - SSL-Zertifikate erneuern sich selbst

**Vorteile gegenüber Docker:**
- 🚀 75% weniger RAM (512MB statt 2GB)
- 💾 66% weniger Disk Space (1GB statt 3GB)
- ⚡ Schnellere Deployments (30s statt 60s)
- 🔧 Einfacheres Debugging
- 💰 Günstigerer VPS möglich

---

## 🚀 **Quick Start (5 Minuten)**

### 1. Verbinde dich mit deinem VPS
```bash
ssh root@DEINE_VPS_IP
```

### 2. Clone Repository
```bash
cd ~
git clone https://github.com/DEIN_USERNAME/brivaro-websites.git
cd brivaro-websites/deployment
```

### 3. Führe Setup-Script aus
```bash
chmod +x *.sh
./setup-vps.sh
```

Das Script:
- Installiert Node.js 20, nginx, fail2ban, ufw
- Erstellt systemd Service für die App
- Setzt Permissions für brivaro User
- Nutzt automatisch `~/brivaro-websites` als App-Root

### 4. Dependencies installieren und bauen
```bash
cd ~/brivaro-websites
npm install
npm run build
```

### 5. Service starten
```bash
systemctl start brivaro
systemctl enable brivaro
```

### 6. Check ob alles läuft
```bash
systemctl status brivaro
journalctl -u brivaro -f

# Test HTTP
curl http://localhost:3000
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
cd ~/brivaro-websites/deployment
./setup-ssl.sh brivaro.de
```

**Done!** 🎉 Deine Website ist jetzt live auf https://brivaro.de

---

## 📦 **Was ist installiert?**

### Services

| Service | Port | Beschreibung |
|---------|------|--------------|
| `brivaro.service` | 3000 | Next.js Application (systemd) |
| `nginx` | 80, 443 | Reverse Proxy + SSL |

### Verzeichnis-Struktur

```
/opt/brivaro/
├── app/                    # Dein Next.js Code
│   ├── .next/             # Build Output
│   ├── node_modules/      # Dependencies
│   └── ...
├── backups/               # Automatische Backups
└── logs/                  # Application Logs

/etc/systemd/system/
└── brivaro.service        # systemd Service File

/etc/nginx/
├── nginx.conf             # Main Config
└── sites-available/
    └── brivaro            # Site Config
```

---

## 🔧 **Nützliche Befehle**

### Application Service

```bash
# Status checken
systemctl status brivaro

# Logs ansehen (live)
journalctl -u brivaro -f

# Letzte 100 Zeilen
journalctl -u brivaro -n 100

# Service neu starten
systemctl restart brivaro

# Service stoppen
systemctl stop brivaro

# Service starten
systemctl start brivaro

# Auto-start aktivieren
systemctl enable brivaro
```

### Nginx

```bash
# Status
systemctl status nginx

# Config testen
nginx -t

# Nginx neu laden (ohne Downtime)
systemctl reload nginx

# Nginx neu starten
systemctl restart nginx

# Logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
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

# Node.js Version
node --version
npm --version
```

---

## 🔄 **Updates deployen**

### Option 1: Automatisches Deployment (Empfohlen)

```bash
cd ~/brivaro-websites/deployment
./deploy.sh
```

Das Script:
1. ✅ Erstellt Backup
2. ✅ Pullt neuen Code (via Git)
3. ✅ Installiert Dependencies (nur wenn package.json geändert)
4. ✅ Buildet neue Version
5. ✅ Startet Service neu
6. ✅ Macht Health Check
7. ✅ Rollback bei Fehler

### Option 2: Manuell

```bash
# Pull Code
cd ~/brivaro-websites
git pull origin main

# Install (nur wenn package.json geändert)
npm install

# Build
npm run build

# Service neu starten
systemctl restart brivaro

# Logs checken
journalctl -u brivaro -f
```

---

## 🔒 **SSL/HTTPS**

### SSL-Zertifikat erneuern (manuell)
```bash
certbot renew
systemctl reload nginx
```

### SSL-Zertifikat checken
```bash
certbot certificates

# Oder:
openssl x509 -in /etc/letsencrypt/live/brivaro.de/fullchain.pem -text -noout | grep "Not After"
```

### Auto-Renewal prüfen
```bash
cat /etc/cron.d/certbot-renew
systemctl status cron

# Test Renewal
certbot renew --dry-run
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

### Service Status

```bash
# Service Status
systemctl status brivaro

# Ist Service aktiv?
systemctl is-active brivaro

# Ist Service enabled?
systemctl is-enabled brivaro
```

### Logs

```bash
# Live Logs
journalctl -u brivaro -f

# Letzte 100 Zeilen
journalctl -u brivaro -n 100

# Nur Errors
journalctl -u brivaro -p err

# Logs mit Zeitstempel
journalctl -u brivaro --since "1 hour ago"

# Nginx Access Logs
tail -f /var/log/nginx/access.log

# Nginx Error Logs
tail -f /var/log/nginx/error.log
```

### Resource Usage

```bash
# Memory Usage
free -h

# Disk Usage
df -h

# Process Info
ps aux | grep node

# Real-time monitoring
htop
```

---

## 🆘 **Troubleshooting**

### Website lädt nicht

```bash
# 1. Check ob Service läuft
systemctl status brivaro

# 2. Check Logs
journalctl -u brivaro -n 50

# 3. Check Nginx
systemctl status nginx
nginx -t

# 4. Check Firewall
ufw status

# 5. Test lokaler Zugriff
curl http://localhost:3000

# 6. Restart everything
systemctl restart brivaro
systemctl restart nginx
```

### Build Fehler

```bash
# Als brivaro User
su - brivaro
cd /opt/brivaro/app

# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install

# Build
npm run build

# Exit
exit

# Service neu starten
systemctl restart brivaro
```

### SSL Fehler

```bash
# Check Zertifikat
openssl s_client -connect brivaro.de:443 -servername brivaro.de

# Nginx Config testen
nginx -t

# Neu erstellen
./deployment/setup-ssl.sh brivaro.de
```

### Out of Memory

```bash
# Check Memory
free -h

# Check Node Process
ps aux | grep node

# Restart Service
systemctl restart brivaro

# Logs checken
journalctl -u brivaro -n 100
```

### Service crasht sofort

```bash
# Logs anschauen
journalctl -u brivaro -n 100

# Manuell starten zum debuggen
su - brivaro
cd /opt/brivaro/app
npm start

# Environment checken
cat /etc/systemd/system/brivaro.service
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

### 2. Non-Root User verwenden

Der brivaro User wurde bereits erstellt und hat nur Zugriff auf `/opt/brivaro/app`.

```bash
# Als brivaro einloggen
su - brivaro

# Permissions checken
ls -la /opt/brivaro/app
```

### 3. Backups

```bash
# Manuelles Backup
cd /opt/brivaro
tar -czf backup-$(date +%Y%m%d).tar.gz app/

# Backup runterladen (auf deinem Rechner)
scp root@DEINE_VPS_IP:/opt/brivaro/backup-*.tar.gz ./

# Automatisches Backup via Cronjob
crontab -e
# Füge hinzu:
# 0 3 * * * tar -czf /opt/brivaro/backups/backup-$(date +\%Y\%m\%d).tar.gz /opt/brivaro/app
```

### 4. Updates

```bash
# System Updates
apt update && apt upgrade -y

# Node.js Update
# (Wird automatisch via unattended-upgrades gemacht)
```

---

## 📈 **Performance Tuning**

### Nginx Caching

```nginx
# In /etc/nginx/sites-available/brivaro hinzufügen:
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;

# Dann in location / block:
proxy_cache my_cache;
proxy_cache_valid 200 60m;
```

### Node.js Memory Limit

```bash
# In /etc/systemd/system/brivaro.service unter [Service]:
Environment="NODE_OPTIONS=--max-old-space-size=512"

# Reload systemd
systemctl daemon-reload
systemctl restart brivaro
```

---

## 🎯 **Next Steps**

Nach dem Setup:

1. ✅ **Monitoring**: Plausible Analytics installieren
2. ✅ **Backups**: Automatische Backups einrichten (Cronjob)
3. ✅ **CDN**: Cloudflare vor Nginx schalten (optional)
4. ✅ **Email**: SMTP für Transactional Emails (Resend)
5. ✅ **CI/CD**: GitHub Actions für automatisches Deployment

---

## 📞 **Hilfe**

Bei Problemen:
1. Check Logs: `journalctl -u brivaro -f`
2. Check Status: `systemctl status brivaro`
3. Restart: `systemctl restart brivaro`
4. Letzte Option: Vollständiger Neustart des Servers

**Server-Info:**
- VPS Provider: [Dein Provider]
- IP: `curl ifconfig.me`
- Region: [Deine Region]
- RAM: 512MB - 1GB empfohlen

---

## 🚀 **Ready to Deploy!**

```bash
# Quick Command Reference
ssh root@VPS_IP                       # Connect
cd ~
git clone https://github.com/USER/brivaro-websites.git
cd brivaro-websites/deployment
./setup-vps.sh                        # Initial setup
cd ~/brivaro-websites
npm install && npm run build          # Build
systemctl start brivaro               # Start service
journalctl -u brivaro -f              # View logs
cd ~/brivaro-websites/deployment
./setup-ssl.sh brivaro.de             # Setup SSL
./deploy.sh                           # Deploy updates
```

**Happy Deploying! 🎉**
