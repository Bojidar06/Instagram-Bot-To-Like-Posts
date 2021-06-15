 var br = 0;
 setInterval(() => {
     var like = document.getElementsByClassName("wpO6b")[1];
     var next = document.querySelector("a.coreSpriteRightPaginationArrow");
     if (like) {
         like.click();
         console.log(`You've liked ${br} posts.`);
         br++;

     }
     next.click();
 }, 2000);