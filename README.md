# text-recogniton
Extract text from screenshots during your meetings to later use them in your notes, presentations and documents

## Demo
https://text-snip.web.app  

## Usage
- Tap the shutter to select the screenshot
- Select the screenshot to start execution
- Time taken is directly proportional to factors like :
  * Internet connectivity
  * Device processing power
  * Browser variants and in-browser optimizations  
- After processing, you will get the results with an option to copy them to clipboard

## Note
Under ideal conditions, it processes the image in around **15** seconds which is more or less satisfactory if you don't want to do text recognition of any critical data online since the processing completely happens on the device itself.

## Caution
- Not recommended to use this application on very-high resolution images
- Not recommended to use on low-tier smartphone / tablet due to processing power requirements
- Text will not be completely accurate if contrast ratio is low  
( Hence, ideal usecase is for screenshots or black-white page photos )

## Prequisites
Make sure you have below development dependencies installed on your CLI environment:
- npm
- node

## Deployment
If you want to deploy this project on your hosting provider, follow the steps below:
- Clone the Repository
  ```bash
    git clone https://github.com/Accelerator-One/text-recogniton.git
    cd text-recognition
  ```
- Install the project's main dependencies:
  ```bash
    npm install
  ```
- Make necessary amendments *( if required )* and then upload to your preferred hosting provider after generating the build.
  ```bash
    npm run build
  ```
- You can also run this project locally on your browser as shown below:  
  ```bash
    npm start
  ```

\* In case of any problems faced, please file them under **Issues** section of this repository.