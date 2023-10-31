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
    - Extensions: Azure Account, Azure Tools, Python


## Chunk 1: Building The front end
### Links
[Host a static website in Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal)

[Create an Azure CDN profile and endpoint](https://learn.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint)

[Configure HTTPS on An Azure CDN custom domain](https://learn.microsoft.com/en-us/azure/cdn/cdn-custom-ssl?tabs=option-1-default-enable-https-with-a-cdn-managed-certificate)


Begin crafting your resume in HTML. For inspiration, [check out this example](https://codepen.io/emzarts/pen/OXzmym). Feel free to tailor your resume to be as straightforward or as intricate as you desire.


Navigate to your Azure account, create a new subscription, and within that subscription, establish a resource group. Feel free to name them according to your preferences.

[![chrome-Y6-Qjhl-Xv4-E.png](https://i.postimg.cc/265ZTDfW/chrome-Y6-Qjhl-Xv4-E.png)](https://postimg.cc/1gLX5bXR)


Now, proceed to create a blob storage. Ensure that the subscription and group name match the ones you previously created.

[![chrome-OUAi-Ylb-Yak.png](https://i.postimg.cc/V6Y6mQsN/chrome-OUAi-Ylb-Yak.png)](https://postimg.cc/sBNy4LhF)

Head to your blob storage and upload your resume into the designated container named $web. Once the upload is complete, navigate to the "Capabilities" tab beneath the upload button. Locate the "Static Website" option and enable it. 
If executed correctly, the provided link should showcase your resume.

[![chrome-siy4-DKFq-JR.png](https://i.postimg.cc/63ZRSNQ1/chrome-siy4-DKFq-JR.png)](https://postimg.cc/N9g59Sm1)



To create a CDN (Content Delivery Network) go back to the "Capabilties" tab and locate Front Door and CDN profiles. Add an endpoint to that profile the Origin type - Storage Static website, Origin hostname - should point to your resume.

Adding a custom domain to your CDN you'll need to configure DNS settings from your web hosting service example: Squarespace, Wix, wordpress, and etc. It should look something like this. After that is completed only then will you be able to 
add your custom hostname be sure to enable https after its sucessfully connected.

[![chrome-z-Ud-Uj-Zkzfc.png](https://i.postimg.cc/QN2BPPLR/chrome-z-Ud-Uj-Zkzfc.png)](https://postimg.cc/qgGM61vL)


## Chunk 2: Building The back end

Create a new resource group. Within this group, create a CosmosDB NoSQL database. Generate a new container with the same name as the screenshot. Inside this container, include a file named "items." Modify the "id" to "id": 0, and add "count": 0

[![chrome-Vp2mv7-Tgx-Q.png](https://i.postimg.cc/hGX7zQHd/chrome-Vp2mv7-Tgx-Q.png)](https://postimg.cc/jWrjB2qx)

Now, in the same group, set up a Python function. Proceed to the coding phase using VSCode, ensuring you have two folders: one for the front-end (resume) and the other for the back-end (python trigger/db).

Login to your Azure account through VSCode, navigate to the workshop tab, and select Azure Function. Create a new project in the back-end folder, choosing Python as the language, Model V1, and any Python version. Opt for an HTTP trigger with a name of your choice and set Authorization level to Anonymous. Test if the function is operational by going to the back-end folder and using the command func start.

[![Code-LBv-Wn-Sj3hx.png](https://i.postimg.cc/sDC8Tpm3/Code-LBv-Wn-Sj3hx.png)](https://postimg.cc/c6TXHtPz)

