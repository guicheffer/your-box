PKG:=yarn #❤️

help:
	@echo "✍🏽  Please use 'make <target>' where <target> is one of the commands below:"
	@echo "  🎉  clean		=> 	clean all built files from package.json"
	@echo "  🎉  install		=> 	install dependencies from package.json"
	@echo "  🎉  start		=> 	start the project cleaning pre generated files"
	@echo "  🎉  deploy		=> 	deploy it, bitch!"
	@echo "  🎉  watch		=> 	watch the project"
	@echo "  🎉  run		=> 	run the project locally"
	@echo "  🎉  build		=> 	build files in dev mode"
	@echo "  🎉  build-prod		=> 	build files for prod environment"
	@echo "  🎉  gource		=> 	see animated history for project"
	@echo "  🎉  change-version		=> 	create a updated version for project"
	@echo "  🎉  pack		=> 	pack the project when assessment is done!"

clean:
	$(PKG) clean-files

install:
	$(PKG)

start:
	$(PKG) start

deploy:
	$(PKG) deploy

watch:
	$(PKG) watch

run:
	$(PKG) run-local

build:
	$(PKG) build

build-prod:
	$(PKG) build:prod

change-version:
	$(PKG) version

pack:
	$(PKG) pack

gource:
	@echo "No 'gource' task was settled up"
