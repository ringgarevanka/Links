//main
import {
   main
} from "./index.js";

const mainContainer = document.getElementById("main");

function addmain(profilepicture, name, username, description, hashtag) {
   return `
    <a id="profilePicture">
      <img src="${profilepicture}">
    </a>
    <div id="name">
      ${name}
    </div>
    <div id="username">
      ${username}
    </div>
    <-- <div id="description">
      ${description}
    </div> -->
    <div class="links" id="links"></div>
    <div id="hashtag">
      ${hashtag}
    </div>
  `;
}

let allmain = "";

main.forEach((ele) => {
   let profilepicture = ele.profilepicture;
   let name = ele.name;
   let username = ele.username;
   let description= ele.description
   let hashtag = ele.hashtag;

   allmain += addmain(profilepicture, name, username, description, hashtag);
});

mainContainer.innerHTML = allmain;


//links
import {
   links
} from "./index.js";

const linkContainer = document.getElementById("links");

function addLink(socialmedianame, socialmedialink, socialmediaicon) {
   return `
  <a class="link" href="${socialmedialink}" target="_blank">
    <i class="${socialmediaicon}"></i> ${socialmedianame}
  </a>
  `;
}

let allLinks = "";

links.forEach((ele) => {
   let socialmedialink = ele.socialmedialink;
   let socialmedianame = ele.socialmedianame;
   let socialmediaicon = ele.socialmediaicon;

   allLinks += addLink(socialmedianame, socialmedialink, socialmediaicon);
});

linkContainer.innerHTML = allLinks;