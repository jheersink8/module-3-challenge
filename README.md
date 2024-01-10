# Module 3 Challenge: Random Password Generator 

## Description: 
Deployed webpage: https://jheersink8.github.io/module-3-challenge/ 

This is a tool which will randomly generate a password for users depending on their preference of complexity. 

As the developer, my biggest motivation in building this was to get more exposure to JavaScript functionality. Additionally, I wanted exposure to how HTML can dictate JavaScript functions and how JavaScript can in turn impact the HTML. I treated this challenge as close as I could to a real-world scenario where a customer asked me to build a random password generator for them. Emulating that experience forced me to stay within the acceptance criteria scope and not add unwanted features that I may have incorporated. 

At the end of this challenge, some of the things I learned are (but not limited to):
- Building functions one time that can be used multiple times later. 
- Thinking through and creating an algorithm that will solve the user’s problem before typing a single line of code. 
- Using JavaScript features like functions, if/else statements, objects, and for loops. 
- Using external resources (the Internet) to research new tools that I have not been exposed to before. 

## Usage
Once at the webpage, the user will click the “Generate Password” button to expand the list of complexity criteria. From here, the user will define (1) how long they want their password to be (between 8 and 128 characters per the acceptance criteria) and (2) what characters should be incorporated (lower case, upper case, numeric, and/or special characters). After the criteria has been defined, they will hit the “Confirm and Generate” button to have a password generated that meets the criteria above (see screenshot below). 

If the user inputs a number less than 8, greater than 128, or a NaN value, a message will prompt them to enter a correct value and the script won’t run. Additionally, if they don’t check at least one checkbox, they will get a message asking them to select at least one box and then the script won’t run until they fix this and click the button again. 

To guarantee that the password complexity is met, I defined the algorithm below (this is in plain English; the algorithm parts are mentioned in the notes of the actual JavaScript). The algorithm works in three parts.
1. Pick ONE random character from each CHECKED character type and put in an array (which will be a part of the final PW). This ensures (per the acceptance criteria) that at least one desired character WILL get used in the password.

2. Subtract the number of boxes checked from the length of the password the user defined (call this "modUserLength"). This is how many more characters need to be added to the PW array. 

3. Put all the checked box objects in an array (i.e. if “lower characters” is checked, put all the lower characters from the object inside a random password generator array). Randomly pick the number of "modUserLength" characters from that array and place them in the final PW array. For good security measures, randomize the position of the newly inserted characters in the text box for the user. This way, the first checked box item is not always [predictably] first.

![Screenshot of 90 character password with lower case and numbers selected](/Assets/deploy_screenshot.png)


## Credits 
The original scenario was presented by Denver University in the Bootcamp course ID DU-VIRT-FSF-PT-12-2023-U-LOLC-MWTH under Module 3 Challenge. The starter HTML and JavaScript code was presented by Du and all remaining code was generated and submitted by Jordan R. Heersink. 

## License
MIT License
Copyright (c) 2024 Jordan Heersink
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

