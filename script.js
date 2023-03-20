let instaPosts = [
    {
        "userPic": src = "img/olivia.jpg",
        "name": "Olivia Parker",
        "username": "olivia.p35",
        "location": "",
        "image": src = "img/postImg/oliviaPost.jpg",
        "likes": 293 ,
        "description": "Discovering the past and unlocking the secrets of ancient civilizations - that's what a visit to the museum is all about!👩‍🎨📸 #museum #history #culture #explore #education",
        "comments": []
    },
    {
        "userPic": src = "img/ethan.jpg",
        "name": "Ethan Reynolds",
        "username": "reynolds93",
        "location": "",
        "image": src = "img/postImg/ethanPost.jpg",
        "likes": 152,
        "description": "Whether it's the warm glow of candles or the twinkling of fairy lights, there's something truly enchanting about the way lights can illuminate our world. #lights #magic #illumination #transformation",
        "comments": []
    },
    {
        "userPic": src = "img/ava.jpg",
        "name": "Ava Johnson",
        "username": "ava2924",
        "location": "",
        "image": src = "img/postImg/avaPost.jpg",
        "likes": 265,
        "description": "The sound of waves crashing against the shore, the feeling of sand between your toes, and the warmth of the sun on your skin - there's nothing quite like a day at the beach! #beach #ocean #paradise #relaxation #nature ",
        "comments": []
    },
    {
        "userPic": src = "img/liam.jpg",
        "name": "Liam Anderson",
        "username": "liam.x89",
        "location": "Jordan",
        "image": src = "img/postImg/liamPost.jpg",
        "likes": 189,
        "description": "From the ancient city of Petra to the breathtaking desert landscapes, Jordan is a land of wonder and adventure! #Jordan #MiddleEast #Travel #Adventure #History #Culture",
        "comments": []
    },
    {
        "userPic": src = "img/charlotte.jpg",
        "name": "Charlotte Thompson",
        "username": "lotti.392",
        "location": "Miami",
        "image": src = "img/postImg/charlottePost.jpg",
        "likes": 401,
        "description": "Watching a sunset is a moment of pure magic, a reminder of the beauty that surrounds us. #sunset #beauty #nature #peace #wonder #gratitude",
        "comments": []
    },
    {
        "userPic": src = "img/william.jpg",
        "name": "William Davis",
        "username": "will.dav",
        "location": "Thailand",
        "image": src = "img/postImg/willPost.jpg",
        "likes": 276,
        "description": "Whether you're exploring ancient temples, indulging in delicious street food, or soaking up the sun on pristine beaches, Thailand offers a rich tapestry of sights, sounds, and experiences. So rev up your engine, hit the open road, and let the adventure begin! #Thailand #RoadTrip #Travel #Adventure #Culture #Foodie",
        "comments": []
    },
    {
        "userPic": src = "img/yvonne.jpg",
        "name": "Yvonne Carter",
        "username": "yvi.x21",
        "location": "",
        "image": src = "img/postImg/yvonne.post.jpg",
        "likes": 312,
        "description": "Join me as we explore the diverse cafe scene and discover the best spots to indulge in the city's coffee culture. ☕️🇫🇷 #ParisCafes #CoffeeLovers #ParisianLife #CafeCulture",
        "comments": []
    }
];


loadPosts();


function addStorys() {
    let storyBar = document.getElementById('storys');
    storyBar.innerHTML = '';

    for (let i = 0; i < instaPosts.length; i++) {
        let posts = instaPosts[i];
        const userPic = posts['userPic'];
        const username = posts['username'];

        storyBar.innerHTML += `
    <div class="scroll-item">
        <img src="${userPic}" class="story-img">
    </div>
    `;
    }

    render();
}


function render() {
    const article = document.getElementById('article');
    article.innerHTML = '';


    for (let i = 0; i < instaPosts.length; i++) {
        const posts = instaPosts[i];

        const username = posts['username'];
        const location = posts['location'];
        const userPic = posts['userPic'];
        const postImage = posts['image'];
        const likes = posts['likes'];
        const description = posts['description'];

        article.innerHTML += /*html*/ `
        <div class="post-a">
            <div class="post-b">
                <img src="${userPic}" id="post-profil">
                <div id="post-c">
                    <h2>${username}</h2>
                    <p>${location}</p>
                </div>
            </div>
            <img src="img/more.png" id="more-img">
        </div>
        <div id="post-image">
            <img src="${postImage}" id="post-img">
        </div>

        <div id="comments">
            <div id="post-icons">
                <div>
                    <img src="img/heart.png" id="heart${i}" class="heart" onclick="redHeart(${i})">
                    <img src="img/red.heart.png" id="redheart${i}" class="heart d-none" onclick="heart(${i})">
                    <img src="img/comment.png" id="comments-img">
                    <img src="img/send.png" id="comments-img">
                </div>
                <img src="img/save.png" id="comments-img">
            </div>

            <h2 class="likes">Gefällt <span id="like-number${i}">${likes}</span>Mal</h2>
            <p id="description"><span class="post-name">${username} </span>${description}</p>
            <div class="show-comments" id="show-comments${i}"></div>
            <input id="input${i}" onkeydown="enter(event, ${i})" placeholder="Kommentieren ...">
            <hr>
        </div>
        `;

        let commentsSection = document.getElementById(`show-comments${i}`);

        for (let c = 0; c < posts['comments'].length; c++) {
            const comment = posts['comments'][c];

            commentsSection.innerHTML += /*html*/ `
            <div class="post-comment">
                <p id="comment"><span id="commentArray" class="post-name">mary.dvs </span>${comment}</p>
                <img id="close-img" src="img/close.img.png" onclick="deleteComment(${i}, ${c})">
            </div>
            `;
        }

    }

}


function enter(event, i) {
    if (event.keyCode === 13) {

        let input = document.getElementById(`input${i}`);

        instaPosts[i]['comments'].push(input.value);

        savePosts();
        render();
    }
}


function savePosts() {
    let postsArray = JSON.stringify(instaPosts);

    localStorage.setItem(`Posts`, postsArray);

    render();
}


function loadPosts() {
    let postsArray = localStorage.getItem('Posts');

    if (postsArray) {
        instaPosts = JSON.parse(postsArray);
    }
}


function deleteComment(position, comment) {
    instaPosts[position]['comments'].splice(comment, 1);

    render();
}


function redHeart(i) {
    let heart = document.getElementById(`heart${i}`);
    heart.classList.add('d-none');
    document.getElementById(`redheart${i}`).classList.remove('d-none');

    if (heart.classList.contains('d-none')) {

        const likeNumber = instaPosts[i]['likes'];
        document.getElementById(`like-number${i}`).innerHTML = +likeNumber + 1 ;
    }
}

function heart(i) {
    document.getElementById(`heart${i}`).classList.remove('d-none');
    document.getElementById(`redheart${i}`).classList.add('d-none');
    let redheart = document.getElementById(`redheart${i}`);
    
    if (redheart.classList.contains('d-none')) {

        const likeNumber = instaPosts[i]['likes'];
        document.getElementById(`like-number${i}`).innerHTML = +likeNumber ;
    }
}


