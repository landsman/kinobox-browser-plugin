#!/bin/bash

# Check if the required arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <app_name> <bundle_identifier>"
    exit 1
fi

# Get the arguments
APP_NAME=$1
BUNDLE_IDENTIFIER=$2

# Debug: Print the provided arguments
echo "App Name: $APP_NAME"
echo "Bundle Identifier: $BUNDLE_IDENTIFIER"

# Remove previous build if it exists
if [ -d "build/safari-extension" ]; then
    echo "Removing previous build..."
    rm -rf build/safari-extension
    echo "Previous build removed."
fi

# Navigate to the build directory
cd build || exit 1

# Prepare safari-extension folder
mkdir -p safari-extension
cd safari-extension || exit 1

# Run the Safari web extension converter with the --app-name and --bundle-identifier flags
# https://developer.apple.com/documentation/safariservices/converting-a-web-extension-for-safari
xcrun safari-web-extension-converter ../chrome-plugin --app-name "$APP_NAME" --bundle-identifier "$BUNDLE_IDENTIFIER" --macos-only

# Find the Xcode project (assuming only one is created)
PROJECT_PATH=$(find . -type d -name "*.xcodeproj" | head -n 1)

# Check if the Xcode project was found
if [ -z "$PROJECT_PATH" ]; then
    echo "Error: Could not find Xcode project"
    exit 1
fi

# Move the project if needed
if [[ "$PROJECT_PATH" == *"$APP_NAME"* ]]; then
    echo "Project already in the correct folder: $PROJECT_PATH"
else
    mv "$PROJECT_PATH" ../safari-extension/
    PROJECT_PATH="../safari-extension/$(basename "$PROJECT_PATH")"
fi

# Open the project in Xcode
echo "Opening Xcode project at: $PROJECT_PATH"
open "$PROJECT_PATH"