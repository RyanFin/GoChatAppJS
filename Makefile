.PHONY: run
run:
	go run backend/main.go

.PHONY: run-app
run-app:
	cd frontend
	npm start

.PHONY: create-react-app
create-react-app:
	cd frontend
	npm install -g create-react-app
	npx create-react-app .

