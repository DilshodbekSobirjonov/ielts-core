let toggle = document.querySelector(".toggle")
let showlink = document.querySelector(".showlink")
let body = document.querySelector(".body")

toggle.addEventListener('click', function() {
    toggle.classList.toggle('toggle-active')
    showlink.classList.toggle('showlink-active')
    body.classList.toggle('body-active')
})


let GaleryBox = document.querySelector('.gallery_box');

class Box {
    constructor(header, paragraph) {
        this.header = header;
        this.paragraph = paragraph;
    }
}

let GalleryObjects = [
    new Box('This is Content Box 1', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.'),
    new Box('This is Content Box 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.'),
    new Box('This is Content Box 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.'),
    new Box('This is Content Box 2', 'Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.'),
    new Box('This is Content Box 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.'),
    new Box('This is Content Box 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.'),
    new Box('This is Content Box 2', 'Lorem ipsum dolor sit,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi. amet consectetur adipisicing elit. Veniam quas inventore, dolor. Unde beatae aut, numquam commodi.'),
]


CreateObject();

function CreateObject() {
    for (let i = 0; i < GalleryObjects.length; i++) {
        GaleryBox.innerHTML += `
        <div class="text-block gallery__item"
            <h2 style="font-size: 30px;" class="text-block__h">${GalleryObjects[i].header}</h2>
            <p style="font-size: 20px;" class="text-block__p">${GalleryObjects[i].paragraph}</p>
        </div>`;
    }

}