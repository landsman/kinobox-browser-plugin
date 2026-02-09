.PHONY: init dev qa safari

init:
	npm install
	npm run build

dev:
	npm install
	npm run watch

qa:
	npm run lint-fix
	npm run format
	npm run lint
	npm run test

safari:
	bash tools/safari.sh "Kinobox" "com.kinobox.browser-plugin"