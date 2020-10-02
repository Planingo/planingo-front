FROM node

COPY . /usr/app
WORKDIR /usr/app

RUN yarn global add serve
RUN yarn
RUN yarn build

ENTRYPOINT [ "serve", "-s", "-p", "3000", "build" ]
EXPOSE 3000