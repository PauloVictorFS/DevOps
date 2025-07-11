# Dockerfile do frontend


FROM node:20-alpine

WORKDIR /app



ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000
CMD ["npm", "run", "dev"]