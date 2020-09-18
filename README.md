# Text-Recogniton
Extract text from screenshots during your meetings to later use them in your notes, presentations and documents

## Live Demo  
Hosting URL: https://text-snip.web.app  

## Usage  
- Tap the shutter to select the screenshot
- Select the screenshot to start execution
- Time taken is directly proportional to factors like:
  * Internet Connectivity
  * Device Processing Power
  * Browser variants and in-browser optimizations  
- After processing you will get the results with an option to copy them to clipboard

## Note
Under ideal conditions, it processes the image in around 15 seconds which is more or less satisfactory if you don't want to do text-recognition on any critical data which you won't like to be exposed online since the processing completely happens on the device itself.

## Caution (Testing Outcomes)
- Not recommended to use this application on very-high resolution/size images
- Not recommended to use on low-tier smartphones/tablets since due to processing power required
- Text will not be completely accurate if contrast ratio is low  
(Hence, ideal usecase is for screenshots/camera (black-white page photos))

## Deployment
If you want to deploy it yourself on your hosting provider, follow the steps below:
1. Clone the Repository  
  `$ git clone https://github.com/Accelerator-One/Text-Recogniton.git`
2. Install npm (if-required) and then install the dependencies  
  `$ cd Text-Recognition`  
  `$ npm install`  
  `$ npm update`  
3. Make necessary amendments(if required) and then upload to your hosting provider.  
4. You can also run locally on your browser as shown below:  
  `$ npm start`  
  
(Open the localhost with specified port on which your application is running)  

## Feel free to drop issues (if found) under 'issues' section for this repository
