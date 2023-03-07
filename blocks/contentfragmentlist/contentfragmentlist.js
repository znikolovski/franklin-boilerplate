import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

    const cfPersistedQuery = block.textContent;
    console.log(cfPersistedQuery.trim());
    const cfReq = fetch(cfPersistedQuery, {
        headers: {
            "Content-Type": "application/json"
        },
        authorization: "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NzgxNDkxNzc4MDBfMjhhYzEwOTktNmY0YS00NTE3LTk5NDEtZTU0NjE4NGZmYzhkX3V3MiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJkZXYtY29uc29sZS1wcm9kIiwidXNlcl9pZCI6IjgyOTExRjU3NjMxQzA0QjEwQTQ5NUZERUA3ZDUyMWY1NzYzMWMwNGIwNDk1ZWNiLmUiLCJzdGF0ZSI6Ik04Sm50ZncyMDdkTDFiSWhRSGtWQ1I3VSIsImFzIjoiaW1zLW5hMSIsImFhX2lkIjoiMzkzRTVBQjI1OTE5NzE2NzBBNDk1REVGQGFkb2JlLmNvbSIsImN0cCI6MCwiZmciOiJYSUNXQVVTV1hQRjdZUDYyR09RVjM3UUFYST09PT09PSIsInNpZCI6IjE2NzgwODU1NzE5MTBfZDUzYjEzNWItZTk4MS00MmU0LTg1MGItYTNhYjAyYWQ0MjcwX3VlMSIsInJ0aWQiOiIxNjc4MTQ5MTc3ODAxXzdiNTdhNWQwLTY1YjAtNDZmNy04YmU1LTY5YWY5ZDQ2NzU1N191dzIiLCJtb2kiOiJjMjBlY2UzZCIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwicnRlYSI6IjE2NzkzNTg3Nzc4MDEiLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJzY29wZSI6IkFkb2JlSUQsb3BlbmlkLHJlYWRfb3JnYW5pemF0aW9ucyxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQiLCJjcmVhdGVkX2F0IjoiMTY3ODE0OTE3NzgwMCJ9.CxeE_WxnzHpvr5UgRvdUHotj0H7peRjFX-lbs3yELb_xM_PlChRxk19F1VQ9OIRDtIbW566BMuh913t8nHbYGu0trCqRy4qGJtrF67L9ct89WjgTxlMII-1ZrZHjEsThFWj-zkMVvk0833C28kwgJlFS0gz8oQRKORt2QyHpahLaXjBCmu611M5AHWeWXwIeHUJYXiWQ07yBw5rU0ShdVO2h5YdlmksZ34NiCsEdsklAoXw15f2PAioPcYaVLmBuM2pn360yddcbcyTA3pBCduyq3oSc8Dbe_xMRJnZhmXk5Iij_9QZgv-H7FtgQF0_yMfE3X7Miazx_RlI8wWl5sg"
    })
    .then((response) => {
        console.log(response)
        response.json()
    })
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