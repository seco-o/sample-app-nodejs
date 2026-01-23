# 1. Temel imaj
FROM node:22-alpine

# 2. Çalışma dizini
WORKDIR /app

# 3. package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./
COPY .npmrc ./

# Test NPM Registry
RUN npm config get registry

# 4. Bağımlılıkları yükle
RUN npm install --production

# 5. Uygulama dosyalarını kopyala
COPY . .

# 6. Port ayarla
EXPOSE 3000

# 7. Uygulamayı çalıştır
CMD ["npm", "start"]
