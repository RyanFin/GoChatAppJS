.PHONY: run
run:
	go run backend/main.go

.PHONY: create-react-app
create-react-app:
	cd frontend
	npm install -g create-react-app
	npx create-react-app .

