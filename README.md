# LinkedIn Profile Picture Replacer

A Chrome extension that replaces the profile pictures in LinkedIn posts with a specified image. This project demonstrates how to interact with a dynamic webpage and manipulate its elements using a Chrome extension.

## Features

- Injects a script into the LinkedIn homepage
- Replaces all profile pictures in posts with a specified image
- Observes for dynamically loaded content and applies changes accordingly
- Activates via a button click in the extension popup

## Installation

1. Clone this repository to your local machine:
    ```sh
    https://github.com/9582anupam/LinkedIn-Profile-Picture-Replacer
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** by clicking the toggle switch in the top right corner.

4. Click the **Load unpacked** button and select the directory where you cloned the repository.

## Usage

1. Navigate to the LinkedIn homepage.

2. Click the extension icon in the Chrome toolbar.

3. Click the **Replace** button in the popup to replace all profile pictures in the LinkedIn feed with your specified image.

## Files

- `manifest.json`: Configuration file for the Chrome extension.
- `popup.html`: HTML for the extension's popup interface.
- `popup.js`: JavaScript for handling the button click in the popup and injecting the content script.
- `content.js`: JavaScript that runs on the LinkedIn homepage, replacing profile pictures.

## Example Image

Replace the profile picture URLs in `content.js` with the image of your choice:
```javascript
const newUrl = "https://example.com/your-image.png";
```

## Contributing
1) Fork the repository.

2) Create your feature branch (git checkout -b feature/fooBar).

4) Commit your changes (git commit -am 'Add some fooBar').

5) Push to the branch (git push origin feature/fooBar).

6) Create a new Pull Request.

# License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/9582anupam/LinkedIn-Profile-Picture-Replacer?tab=MIT-1-ov-file) file for details.


## Author

- **Anupam** - [@9582anupam](https://github.com/9582anupam)
