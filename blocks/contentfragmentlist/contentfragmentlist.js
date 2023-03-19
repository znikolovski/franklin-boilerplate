import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

    let cfPersistedQuery = block.textContent;
    let token = "";
    let options = {};
    console.log(window.location.ancestorOrigins.length);
    if(window.location.ancestorOrigins.length > 0) {
        console.log("I'm here");
        cfPersistedQuery = cfPersistedQuery.replace("publish", "author");
        token = "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NzkyNjQ0Nzk1NTNfNWY4YzZiMTctNjBiNy00ZjRjLWFkZjQtZGE0ZjEzMmFmN2JkX3V3MiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJkZXYtY29uc29sZS1wcm9kIiwidXNlcl9pZCI6IjgyOTExRjU3NjMxQzA0QjEwQTQ5NUZERUA3ZDUyMWY1NzYzMWMwNGIwNDk1ZWNiLmUiLCJzdGF0ZSI6ImM5NEpBVzREemhyNUd6aU55anlvYUNFdiIsImFzIjoiaW1zLW5hMSIsImFhX2lkIjoiMzkzRTVBQjI1OTE5NzE2NzBBNDk1REVGQGFkb2JlLmNvbSIsImN0cCI6MCwiZmciOiJYSkc3Mk9UWFhQTjc0UDYyR09RVjNYUUFXND09PT09PSIsInNpZCI6IjE2NzkyNjA3MTgzNjdfZTZhNGZjZWEtYzk1Ni00MjZhLWE2NzQtOTUxNDBkYzY1OWY1X3VlMSIsInJ0aWQiOiIxNjc5MjY0NDc5NTU0X2E1ZWJkZDdiLTdjNWMtNDExMi05YzUyLTM1YzRiZDljZjhmOF91dzIiLCJtb2kiOiI1NmY1NTQzNiIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwicnRlYSI6IjE2ODA0NzQwNzk1NTQiLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJzY29wZSI6IkFkb2JlSUQsb3BlbmlkLHJlYWRfb3JnYW5pemF0aW9ucyxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQiLCJjcmVhdGVkX2F0IjoiMTY3OTI2NDQ3OTU1MyJ9.cPcjCvzQdO2arOmQz0aOX1sZ7w4gH3nkYBiK1G6iuTYMFs289LJyh_VCdfV5-QpF6LaEpPlIDYyQEWfanD6kNZB9hTuLHD3xdAfp5Waid2dDvQxK-KLzk6A6EEfCqxR9WdIUCI1mWWw9Jp9uQ2FIBDUMoLuN1T0oVLHg-0oqH5QZrBA0hZu4EtTIDXz5UfDMEdTGFBECfnYgvfogqq-n5QqEfdzfzsgWAwsKMVtG7YN0X7SJNY06ZM2SDaUHXhziaLxIoCMDivsX4e5wGKU5BjVwrJgrXG-eWoRnCoTk_YqQULyiUMfHElDHae8pPV6E7Urn84HRXtQXyyxfX-ynhA";
        options = {headers: {
            "authorization": token
        }};
    }

    console.log(cfPersistedQuery.trim()+"?ts="+Math.random()*1000);

    const cfReq = fetch(cfPersistedQuery.trim()+"?ts="+Math.random()*1000, options)
    .then((response) => response.json())
    .then((data) => {
        if(data.data) {
            const cfList = data.data.offerList.items;
            const cfListBlock = document.createElement('ul');
            cfListBlock.setAttribute("class", "adventure-items");
            cfList.forEach(cf => {
                let ctaUrl = '';
                let imageUrl = ''
                if(cf.ctaUrl !== null) {
                    ctaUrl = cf.ctaUrl["_publishUrl"];
                }
                if(cf.heroImage !== null) {
                    imageUrl = cf.heroImage["_publishUrl"];
                    console.log(cf.heroImage)
                
                    const cfElem = document.createElement('li', {"class": "adventure-item"});
                    cfElem.setAttribute("class", "adventure-item");
                    cfElem.setAttribute("itemscope", "");
                    cfElem.setAttribute("itemid", "urn:aemconnection:" + cf["_path"] + "/jcr:content/data/master");
                    cfElem.setAttribute("itemtype", "reference");
                    cfElem.setAttribute("itemfilter", "cf");
                    const offer = '<a href="'+ctaUrl+'"><img class="adventure-item-image" src="'+imageUrl+'" alt="'+cf.headline+'" itemprop="primaryImage" itemtype="image"></a><div class="adventure-item-title" itemprop="headline" itemtype="text">'+cf.headline+'</div>';
                    cfElem.innerHTML = offer;
                    cfListBlock.appendChild(cfElem);
                }
                
            });
            block.textContent = "";
            block.append(cfListBlock);
        }
    });


//   /* change to ul, li */
//   const ul = document.createElement('ul');
//   [...block.children].forEach((row) => {
//     const li = document.createElement('li');
//     li.innerHTML = row.innerHTML;
//     [...li.children].forEach((div) => {
//       if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
//       else div.className = 'cards-card-body';
//     });
//     ul.append(li);
//   });
//   ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
//   block.textContent = '';
//   block.append(ul);
}