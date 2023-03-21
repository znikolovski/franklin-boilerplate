import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

    let cfPersistedQuery = block.textContent;
    let token = "";
    let options = {};
    console.log(window.location.ancestorOrigins.length);
    if(window.location.ancestorOrigins.length > 0) {
        console.log("I'm here");
        cfPersistedQuery = cfPersistedQuery.replace("publish", "author");
        token = "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NzkzNjk4NTYzODFfMDdiYzhmMjgtNjBkOC00NTM1LTk1OTMtZmE3OGIyMWI1MTVkX3V3MiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJkZXYtY29uc29sZS1wcm9kIiwidXNlcl9pZCI6IjgyOTExRjU3NjMxQzA0QjEwQTQ5NUZERUA3ZDUyMWY1NzYzMWMwNGIwNDk1ZWNiLmUiLCJzdGF0ZSI6ImhlN1h4RzJaanU1VmdtdmhqQkVaYlc0YSIsImFzIjoiaW1zLW5hMSIsImFhX2lkIjoiMzkzRTVBQjI1OTE5NzE2NzBBNDk1REVGQGFkb2JlLmNvbSIsImN0cCI6MCwiZmciOiJYSktOU09UWFhQTjc0UDYyR09RVjNYUUFXND09PT09PSIsInNpZCI6IjE2NzkyNjA3MTgzNjdfZTZhNGZjZWEtYzk1Ni00MjZhLWE2NzQtOTUxNDBkYzY1OWY1X3VlMSIsInJ0aWQiOiIxNjc5MzY5ODU2MzgyXzI5Yjc2OGI3LWQwNGUtNDQxYS04OGRhLWMzMGU4Y2FlOTk3Ml91dzIiLCJtb2kiOiIyYzlkZmVkZCIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwicnRlYSI6IjE2ODA1Nzk0NTYzODIiLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJzY29wZSI6IkFkb2JlSUQsb3BlbmlkLHJlYWRfb3JnYW5pemF0aW9ucyxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQiLCJjcmVhdGVkX2F0IjoiMTY3OTM2OTg1NjM4MSJ9.N8880K76BX21KgjWPjgJ3bSEQqGsZIFL6aBc049dsfFvsc4ZDCXEpggE9qx-jJiZzix2R7m_mSTy86c1_fwuDykjE6lqCXUpVG7NTBssgc_ufoUOImPuSVVZFM-0yVADJ-QnOgPgvqB_1NcqMB76vTgmvQMFKV1gAdJeon9zxppEpUa2_8JzNu7x-OzOXuCA5Fu4W8uLoXC15bEbA-QTB7pGjT2I-tIO3ed1KN-STXwVHhQhqZNFLwUdwN4-cP_U-JcMH6BkmeFV4sOcRsJSn837vtS-jKYo9HZ9pFbhC14h_5lb_Gh2bsqJr0RBJeydvt8fB6fGmZjh2PbTS4K9kQ";
        options = {headers: {
            "authorization": token
        }};
    }

    console.log(cfPersistedQuery.trim()+"?ts="+Math.random()*1000);

    const cfReq = fetch(cfPersistedQuery.trim()+"?ts="+Math.random()*1000, options)
    .then((response) => response.json())
    .then((data) => {
        if(data.data) {
            const cfList = data.data.adventureList.items;
            const cfListBlock = document.createElement('ul');
            cfListBlock.setAttribute("class", "adventure-items");
            cfList.forEach(cf => {
                let ctaUrl = '';
                let imageUrl = ''
                if(cf.adventurePrimaryImage !== null) {
                    imageUrl = cf.adventurePrimaryImage["_publishUrl"];
                    console.log(cf.adventurePrimaryImage)
                
                    const cfElem = document.createElement('li', {"class": "adventure-item"});
                    cfElem.setAttribute("class", "adventure-item");
                    cfElem.setAttribute("itemscope", "");
                    cfElem.setAttribute("itemid", "urn:aemconnection:" + cf["_path"] + "/jcr:content/data/master");
                    cfElem.setAttribute("itemtype", "reference");
                    cfElem.setAttribute("itemfilter", "cf");
                    const offer = '<a href="#"><img class="adventure-item-image" src="'+imageUrl+'" alt="'+cf.adventureTitle+'" itemprop="adventurePrimaryImage" itemtype="image"></a><div class="adventure-item-title" itemprop="adventureTitle" itemtype="text">'+cf.adventureTitle+'</div>';
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