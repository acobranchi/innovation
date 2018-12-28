FROM node:10.13-alpine as builder

# Environment

WORKDIR /home/app
ENV NODE_ENV=production

# Dependencies

COPY package.json /home/app/
COPY yarn.lock /home/app/

RUN npm i yarn
RUN yarn install --ignore-scripts --production --no-optional --frozen-lockfile
RUN npx lerna bootstrap --hoist --ignore-scripts -- --production --no-optional

# Build

COPY . /home/app/
RUN cd apps/app-foo && npm run build

# Serve

FROM nginx:1.15-alpine
COPY --from=builder /home/app/apps/app-foo/build /usr/share/nginx/html