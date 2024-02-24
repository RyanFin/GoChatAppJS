FROM golang:1.22.0-alpine3.19
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build -o main
CMD [ "/app/main" ]