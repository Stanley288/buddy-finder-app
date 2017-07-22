serve:
	docker build . -t buddy-finder-api
	docker run -d -p 8080:8080 buddy-finder-api

up:
	docker build . -t buddy-finder-api
	-docker rm buddy-finder-api --force
	docker run -d -p 8080:8080 --name buddy-finder-api buddy-finder-api

up-old:
	docker-compose up -d

down:
	docker-compose down

ps:
	docker ps

logs:
	@docker logs --follow server_buddy-finder-api_1 | ./node_modules/.bin/bunyan
