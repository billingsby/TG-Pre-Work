# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The client asks the server for index.html. The server receives the request and sends the document back to the client, where it is rendered in the browser.

## From start to finish how does that data reach you to be rendered in the browser?

First the browser checks the cache for a DNS record to find the corresponding IP address. It then checks the OS cache, the router cache, and finally the ISP cache. If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts techtonicgroup.com. The browser then initiates a TCP connection with the server and sends an HTTP request. The server handles the request and sends back an HTTP response. The browser then displays the HTML content.

## What code is rendered in the browser?

HTML code styled by CSS is rendered in the browser

## What is the server-side code’s main function?

To render pages to the client and process user input.

## What is the client-side code’s main function?

To process scripts in the clients browser resulting in faster response times, a more interactive applications, and less overhead on the web server.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

HTML: 1
CSS: 2
JS: 19
Images: 52
Fonts: 4

## How many instances of the server-side code are available at any given time?

I'm not sure how to determine the correct answer. I do know is there are 5 .js files from Techtonic, 1 from Google Analytics, and 13 from Google Maps.

## What is runtime?

Runtime is the period of time when a program is running

## How many instances of the the databases connected to the server application are created?

Is this referring to the Google API's being called? 1 from Google Analytics and 13 from Google Maps.
