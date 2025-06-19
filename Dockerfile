# Usa la imagen oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install --frozen-lockfile

# Copia el resto del código fuente
COPY . .

# Compila la aplicación (si usas TypeScript)
RUN npm run build

# Expone el puerto en el que se ejecutará Next.js
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "run", "start"]
