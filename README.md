# Azure Cloud Resume Challenge
Hello, Welcome to my Cloud Resume Challenge for Azure.

I embarked on this project with the goal of diving into the intricacies of cloud technology and familiarizing myself with the associated tools. 
Initially, my understanding of the cloud was minimal at best. I initially experimented with Google Cloud, but soon realized it wasn't the right fit for me. Thankfully, a friend suggested giving Azure a shot.

Fast forward to today, and I've earned my first certification AZ-900 Azure Fundamentals and my learning journey continues. 
It took me approximately 40 to 50 hours to bring this project to fruition, but don't let the time investment deter you. I've documented my progress on GitHub, hoping that it can serve as a valuable resource for others facing similar challenges as I did.

**Reserve the use of this readme for those moments when you find yourself truly stuck. Embracing trial and error not only fosters a deeper understanding but also enhances your ability to retain information.**

## Prerequisites
- AZ-900 certification (can complete this at any point)
- Resume written in HTML, CSS, and JS 
- Some knowledge in Python
- Github Account
- Azure Acccount
- Visual Studio Code
    - Extensions: Azure Account, Azure Tools


## Chunk 1: Building The front end

Begin crafting your resume in HTML. For inspiration, [check out this example](https://codepen.io/emzarts/pen/OXzmym). Feel free to tailor your resume to be as straightforward or as intricate as you desire.


Navigate to your Azure account, create a new subscription, and within that subscription, establish a resource group. Feel free to name them according to your preferences.

[![chrome-Y6-Qjhl-Xv4-E.png](https://i.postimg.cc/265ZTDfW/chrome-Y6-Qjhl-Xv4-E.png)](https://postimg.cc/1gLX5bXR)


Now, proceed to create a blob storage. Ensure that the subscription and group name match the ones you previously created.
[![chrome-OUAi-Ylb-Yak.png](https://i.postimg.cc/V6Y6mQsN/chrome-OUAi-Ylb-Yak.png)](https://postimg.cc/sBNy4LhF)

Head to your blob storage and upload your resume into the designated container named $web. Once the upload is complete, navigate to the "Capabilities" tab beneath the upload button. Locate the "Static Website" option and enable it. 
If executed correctly, the provided link should showcase your resume. To create a CDN (Content Delivery Network) go back to the "Capabilties" tab and locate Front Door and CDN profiles.





  
