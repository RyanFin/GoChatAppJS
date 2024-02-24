.PHONY: run
run:
	go run main.go

.PHONY: docker-build
docker-build:
	docker build -t backend .
# -t represents the tag for the image name

.PHONY: run-docker-img
run-docker-img:
	docker run -it -p 8080:8080 backend