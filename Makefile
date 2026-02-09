.PHONY: init dev clean qa test build

init:
	-git submodule update --init
	npm ci
	npm run build

dev:
	npm install
	npm run watch

clean:
	npm run lint-fix
	npm run format

qa:
	npm run lint
	npm run test

test: qa

build:
	npm run build

APP_NAME := Kinobox
SAFARI_BUNDLE_ID := com.kinobox.extension.dev
SAFARI_BUILD_DIR := packages/browser-extension/build/safari-extension

.PHONY: safari-build
safari-build: export NODE_ENV=production
safari-build: export TARGET_BROWSER=safari
safari-build: clean

.PHONY: safari-convert
safari-convert: safari-build build
	rm -rf $(SAFARI_BUILD_DIR)
	mkdir -p $(SAFARI_BUILD_DIR)
	# https://developer.apple.com/documentation/safariservices/converting-a-web-extension-for-safari
	cd $(SAFARI_BUILD_DIR) && xcrun safari-web-extension-converter ../chrome-plugin \
		--app-name "$(APP_NAME)" \
		--bundle-identifier "$(SAFARI_BUNDLE_ID)" \
		--macos-only
	open $$(find $(SAFARI_BUILD_DIR) -type d -name "*.xcodeproj" | head -n 1)
