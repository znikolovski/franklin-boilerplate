import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

    const cfPersistedQuery = block.textContent;
    console.log(cfPersistedQuery.trim());
    const cfReq = fetch(cfPersistedQuery, {
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors"
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
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
                    console.log(imageUrl)
                }
                const cfElem = document.createElement('li', {"class": "adventure-item"});
                cfElem.setAttribute("class", "adventure-item");
                cfElem.setAttribute("itemscope", "");
                cfElem.setAttribute("itemid", "urn:aemconnection:" + cf["_path"] + "/jcr:content/data/master");
                cfElem.setAttribute("itemtype", "reference");
                cfElem.setAttribute("itemfilter", "cf");
                const offer = '<a href="'+ctaUrl+'"><img class="adventure-item-image" src="'+imageUrl+'" alt="'+cf.headline+'" itemprop="primaryImage" itemtype="image"></a><div class="adventure-item-title" itemprop="headline" itemtype="text">'+cf.headline+'</div>';
                cfElem.innerHTML = offer;
                cfListBlock.appendChild(cfElem);
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