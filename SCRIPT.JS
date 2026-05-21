let posts = [];

function showPage(pageId){

document.querySelectorAll(
'.page'
).forEach(page=>{

page.classList.remove(
'active'
);

});

document.getElementById(
pageId
).classList.add(
'active'
);

}

/* POSTS */

function createPost(){

const username =
document.getElementById(
'username'
).value;

const text =
document.getElementById(
'postText'
).value;

const mood =
document.getElementById(
'mood'
).value;

if(
username === '' ||
text === ''
){
return;
}

posts.unshift({

username,
text,
mood,
likes:0

});

renderPosts();

showPage('home');

}

function renderPosts(){

const feed =
document.getElementById(
'feed'
);

feed.innerHTML='';

posts.forEach((post,index)=>{

feed.innerHTML += `

<div class="post">

<h2>
${post.username}
</h2>

<p>
${post.mood}
</p>

<p>
${post.text}
</p>

<button onclick="likePost(${index})">

❤️ Curtir ${post.likes}

</button>

</div>

`;

});

}

/* LIKES */

function likePost(index){

posts[index].likes++;

renderPosts();

}

/* CHAT */

function sendMessage(){

const input =
document.getElementById(
'chatInput'
);

const messages =
document.getElementById(
'messages'
);

if(
input.value.trim()===''
)return;

messages.innerHTML += `

<div class="message">

💜 ${input.value}

</div>

`;

input.value='';

}

/* FOLLOW */

let followers = 120;

function followUser(){

followers++;

document.getElementById(
'followers'
).innerHTML =

'❤️ ' +
followers +
' seguidores';

}

/* INICIAR */

renderPosts();
