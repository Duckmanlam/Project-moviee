
# Stage 1: Build
FROM node:18.17.0 as build

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

# COPY ./src/router/Backend.jsx ./src/router/Backend.jsx

# RUN npm install react-router-dom --save && npm i @types/react-router-dom --save

# RUN cd ./src/page/auth/ && ls -l && sleep 10

COPY ./ ./

RUN yarn build

# Stage 2: Production
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
