# Dockerfile do Frontend - Versão Final DEV
FROM node:18-alpine

WORKDIR /app

# Adicionando a variável de ambiente para resolver o erro de crypto
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000
CMD ["npm", "run", "dev"]