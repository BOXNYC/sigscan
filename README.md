# SigScan
## Application that displays new image files, in a directory.

 1. [Download the zip](https://github.com/BOXNYC/sigscan/archive/refs/heads/main.zip) and install on your computer. Take note where you extract it.
 2. Install [Node.js](https://nodejs.org/en/download/prebuilt-installer) from the installer App. __If this doesn't work, LMK and I'll help.__ In terminal, run `node -v` to verify that it's installed. It will say the node.js version if installed.
 3. 
 4. On the scanner app, choose the output directory to be where you extracted this directory in step 1, but choose the directory `[EXTRACTED_DIRECTORY]/public/signatures` If the `signatures` directory doesn't exist, add it to the `public` directory.
 5. Adjustments: Edit the code here: /sigscan/components/ImageWatch.tsx to adjust the constants varables at the top. The cropping vars are percentage floats, for example 20% = 0.2, and how much delay between checking for new images in miliseconds. For example, 2000 will check the signatures directory every 2 seconds.