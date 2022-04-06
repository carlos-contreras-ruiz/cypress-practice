FROM cypress/base:12.1.0

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

RUN $(npm bin)/cypress verify

COPY . /app

CMD ["npm","run","cy:run"]


#se puede copiar el package 
#correr npm install
#cambiar el usuario y luego copiar el codigo y carpetas
#docker build -t cypress-image .