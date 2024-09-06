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

# Run the Safari web extension converter
xcrun safari-web-extension-converter ../chrome-plugin

# Close Xcode automatically after the conversion
osascript -e 'tell application "Xcode" to quit'

# Find the Xcode project (assuming only one is created)
PROJECT_PATH=$(find . -type d -name "*.xcodeproj" | head -n 1)

# Check if the Xcode project was found
if [ -z "$PROJECT_PATH" ]; then
    echo "Error: Could not find Xcode project"
    exit 1
fi

# Define the correct directories for Info.plist files based on the screenshot
PLIST_PATHS=(
    "./kinobox-browser-extension/iOS (App)/Info.plist"
    "./kinobox-browser-extension/iOS (Extension)/Info.plist"
    "./kinobox-browser-extension/macOS (App)/Info.plist"
    "./kinobox-browser-extension/macOS (Extension)/Info.plist"
    #"./kinobox-browser-extension/Shared (App)/Info.plist"  # Update the path if needed
    #"./kinobox-browser-extension/Shared (Extension)/Info.plist"  # Update the path if needed
)

# Track whether the project should be opened after changes
PROJECT_MODIFIED=false

# Loop through and modify each found Info.plist file
for PLIST_PATH in "${PLIST_PATHS[@]}"; do
    if [ -f "$PLIST_PATH" ]; then
        echo "Modifying Info.plist at: $PLIST_PATH"

        # Skip adding entries if they already exist
        /usr/libexec/PlistBuddy -c "Print :CFBundleDisplayName" "$PLIST_PATH" >/dev/null 2>&1
        if [ $? -ne 0 ]; then
            /usr/libexec/PlistBuddy -c "Add :CFBundleDisplayName string $APP_NAME" "$PLIST_PATH"
        else
            /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName $APP_NAME" "$PLIST_PATH"
        fi

        /usr/libexec/PlistBuddy -c "Print :CFBundleIdentifier" "$PLIST_PATH" >/dev/null 2>&1
        if [ $? -ne 0 ]; then
            /usr/libexec/PlistBuddy -c "Add :CFBundleIdentifier string $BUNDLE_IDENTIFIER" "$PLIST_PATH"
        else
            /usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier $BUNDLE_IDENTIFIER" "$PLIST_PATH"
        fi

        echo "Successfully updated $PLIST_PATH with:"
        echo "App Name: $APP_NAME"
        echo "Bundle Identifier: $BUNDLE_IDENTIFIER"

        PROJECT_MODIFIED=true
    else
        echo "Warning: No Info.plist found at $PLIST_PATH"
    fi
done

# Move the project to the safari-extension folder (optional based on your previous logic)
mv "$PROJECT_PATH" ../safari-extension/

# Update the project path for opening in Xcode
PROJECT_PATH="../safari-extension/$(basename "$PROJECT_PATH")"

# Only open the project once if modifications were made
if [ "$PROJECT_MODIFIED" = true ]; then
    echo "Opening Xcode project at: $PROJECT_PATH"
    open "$PROJECT_PATH"
else
    echo "No changes were made to the project."
fi