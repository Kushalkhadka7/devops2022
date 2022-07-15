SHELL :=/bin/bash

IMAGE := react_app
BUILD_PATH := $(shell 'pwd')
TAG := crkushal7/$(IMAGE):2.0.0
DOCKER_FILE := $(BUILD_PATH)/Dockerfile

run:
	@docker build -t $(IMAGE):main .
	@docker run -d --name $(IMAGE) --network=host $(IMAGE):main

stop:
	@docker stop $(IMAGE)

build: 
	@docker build -t $(IMAGE) -f $(DOCKER_FILE) $(BUILD_PATH)

tag-image:
	@docker tag $(IMAGE) $(TAG)

docker-login:
	@docker login -u crkushal7 -p 7f676bce-0f61-4ee3-a228-5165fdf3d0f6

docker-push:
	@docker push $(TAG)