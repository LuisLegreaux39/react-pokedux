ARG NODE_VERSION="25.0.0"
ARG NGINX_PORT="443"

FROM node:${NODE_VERSION}-alpine as builder

ARG NODE_VERSION
ARG NGINX_PORT

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN echo "=== ENVIRONMENT VARIABLES IN BUILDER ===" && env | sort

# Bundle static production build
FROM nginx:alpine AS production

# Expose port
EXPOSE 3000

# Copy built assets from builder image
COPY --from=builder /app/dist /usr/share/nginx/html/fe/
COPY nginx.conf /etc/nginx/conf.d/default.conf
