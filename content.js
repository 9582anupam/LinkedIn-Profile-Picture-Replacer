const newUrl = "https://avatars.githubusercontent.com/u/114251464?s=48&v=4"; // new image

let profileCtr = 0;

let pfps;

// function that repalace profile picture by matching class name
function replace() {
    pfps = document.querySelectorAll(
        ".ivm-image-view-model__circle-img, .ivm-image-view-model__square-img, .EntityPhoto-circle-2, .EntityPhoto-square-2, .EntityPhoto-circle-3, .EntityPhoto-square-3"
    );
    for (let i = profileCtr; i < pfps.length; i++) {
        const img = pfps[i];
        img.src = newUrl;
    }
}

replace();

// handle change
const handleChange = function (changeList, observer) {
    for (let mutation of changeList) {
        if (mutation.type === "childList") {
            // If new posts are added, call the function to replace profile pictures
            profileCtr = pfps.length - 1;

            replace();
            break; // to avoid unnecessary iteration and better efficiency
        }
    }
    console.log(changeList);
};

// mutation observer instance
const observer = new MutationObserver(handleChange);

// observing only linked feed portionn
const feed = document.querySelector(".scaffold-finite-scroll");
if (feed) {
    observer.observe(feed, { childList: true, subtree: true });
}
