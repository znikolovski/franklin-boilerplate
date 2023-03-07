import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

    let cfPersistedQuery = block.textContent;
    let token = "";
    let options = {};
    console.log(window.location.ancestorOrigins.length);
    if(window.location.ancestorOrigins.length > 0) {
        console.log("I'm here");
        cfPersistedQuery = cfPersistedQuery.replace("publish", "author");
        token = "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NzgxNjA2ODM0MjZfZjY5NjY3M2ItMGI3Yy00Y2I1LWE2ZGUtMTMzYjE1NjFjZGE3X3V3MiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJkZXYtY29uc29sZS1wcm9kIiwidXNlcl9pZCI6IjgyOTExRjU3NjMxQzA0QjEwQTQ5NUZERUA3ZDUyMWY1NzYzMWMwNGIwNDk1ZWNiLmUiLCJzdGF0ZSI6ImFQalRCcEdRc2dtZVZTbkg4dlphR0NMQSIsImFzIjoiaW1zLW5hMSIsImFhX2lkIjoiMzkzRTVBQjI1OTE5NzE2NzBBNDk1REVGQGFkb2JlLmNvbSIsImN0cCI6MCwiZmciOiJYSURDQU9UWFhQRjdZUDYyR09RVjNYUUFDUT09PT09PSIsInNpZCI6IjE2NzgwODU1NzE5MTBfZDUzYjEzNWItZTk4MS00MmU0LTg1MGItYTNhYjAyYWQ0MjcwX3VlMSIsInJ0aWQiOiIxNjc4MTYwNjgzNDI3X2FkMWMyM2NmLWYxMDAtNGUxZS1hMjQ3LTI5NTc4NWQxZDQxY191dzIiLCJtb2kiOiI4NWQyN2RjOCIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwicnRlYSI6IjE2NzkzNzAyODM0MjciLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJzY29wZSI6IkFkb2JlSUQsb3BlbmlkLHJlYWRfb3JnYW5pemF0aW9ucyxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQiLCJjcmVhdGVkX2F0IjoiMTY3ODE2MDY4MzQyNiJ9.PB2vsveMJYOstcGKW4_7XpBlxg1BQ5RDicyiQL_yf4L9Wqcl4650GVPc-AfqAwj30A4iwejh0JtrGkY1Q18X6RCR0myl2V2CL3kzvIspaXwXCdcyIn7LIBZArfvJrAyK3tIB2-LKMNnc6iDOsyRSKjLrO_OaWTTlWdFLlHErYuDC5KjJq6ItiKDb95AfARvR19rzsS94G6P0AEKMy3LE6SDutPdLhSF-9wzUtdpHMVp8aapxGBPDP2U-u4UDfM0b8U8hmlTKDjKgx7KLCRdYriiAPPiLlIlGPTbbCkcD8Ri6Rh-ijRu07kjCNuiMzVRLsQWt-OU15JMqT7P1suFJpQ";
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