

var arry =[
    {name:"abdullah",img:"https://i.pinimg.com/236x/86/9a/bd/869abd703f5957318fe760bfe85b14f8.jpg" , status:"stranger"},
    {name:"uzair",img:"https://i.pinimg.com/236x/b8/0f/4f/b80f4f83f5b9c6b66130bc901e92ba2f.jpg" , status:"stranger"},
    {name:"sajid",img:"https://i.pinimg.com/236x/76/ac/c2/76acc29fc9d6553235de8f6261fea52e.jpg" , status:"stranger"},
];


function print(){
    var clutter= "";

arry.forEach(function(val, index){
   clutter += `. <div id="card">
            <div id="img">
        <img src="${val.img}">
            </div>
            <h1>${val.name}</h1>
            <h5>${val.status}</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, voluptas.</p>
            <button id="${index}">Add Friend</button>
        </div>`;
});

document.querySelector("#main").innerHTML = clutter;
}
print();


document.querySelector("#main")
 .addEventListener("click",function(detail){
     arry(detail.target.id).status="friend";
     print();
 })
