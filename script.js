let flag=1;
let content=document.querySelector("#content");
let cinpt=document.querySelector("#inpt input");
let ctgList=document.querySelector("#ctgList");

//chalo mouseover bhi lag gya
// let overlay=document.querySelectorAll(".ovly");
content.addEventListener("mouseover",function(e){

    // console.log(e.target.id);
    if(e.target.className==="cimg"){
        document.querySelectorAll(".ovly")[e.target.id].style.opacity=1;
        document.querySelectorAll(".ovly")[e.target.id].style.pointerEvents="initial";
    }
})
content.addEventListener("mouseout",function(e){
    
    if(e.target.className==="ovly"){
    let index=e.target.id;
    document.querySelectorAll(".ovly")[e.target.id].style.opacity=0;
    document.querySelectorAll(".ovly")[e.target.id].style.pointerEvents="none";
    }  

})

// button to show all categories
document.querySelector("#cbtn").addEventListener("click",function(){
    if(flag===1){
        document.querySelector("#showClip").style.width="30%";
        document.querySelector("#show").style.display="flex"
        flag=0;
    }
    else{
        document.querySelector("#showClip").style.width="0%";
        document.querySelector("#show").style.display="none"
        flag=1;

    }
})

//mouseover on search bar inside the navbar
document.querySelector("#srch").addEventListener("mouseover",function(){
   this.style.border="none";
   this.style.boxShadow="0 0 5px rgba(0, 0, 0, 0.185)";
})
document.querySelector("#srch").addEventListener("mouseout",function(){
    this.style.border="1px solid rgba(245, 178, 190, 0.678)";
    this.style.boxShadow="none";
 })



// Array of data to store whole data 
let baseData=[
    { img:"https://images.unsplash.com/photo-1632924192284-9163f3d88a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Gift Packages",saved:false},
    { img:"https://images.unsplash.com/photo-1542318332-034f3136b62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",name:"Flowers n Beauty",saved:false},
    { img:"https://images.unsplash.com/photo-1607092683781-a3146e0a1d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Chocolate Chip Cookies",saved:false},
    { img:"https://images.unsplash.com/photo-1608473430561-df11ffde8b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",name:"Puppy in the house",saved:false},
    { img:"https://images.unsplash.com/photo-1483201811930-882b8be091e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"The best way to start",saved:false},
    { img:"https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",name:"Athletics | Snow",saved:false},
    { img:"https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80",name:"Cycling is Love",saved:false},
    { img:"https://images.unsplash.com/photo-1579710759212-d869a36773ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",name:"Winter Peace",saved:false},
    { img:"https://images.unsplash.com/photo-1622277695245-c1694a6c0b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",name:"Mount Everest",saved:false},
    { img:"https://images.unsplash.com/photo-1561001070-ce11eea271b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"Kuch khana bhi hai",saved:false},
    { img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Laughter | Girl",saved:false},
    { img:"https://images.unsplash.com/photo-1591153952470-8eede4a8f00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",name:"Tired af",saved:false},
    { img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",name:"Mediterranean Salad",saved:false},
    { img:"https://images.unsplash.com/photo-1508473161895-5dabcc2f59cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"View | Girl with cape",saved:false},
    { img:"https://images.unsplash.com/photo-1624589010366-365b61efb41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Beautiful site | Mountain",saved:false},
    { img:"https://images.unsplash.com/photo-1639501838991-215ffc3cf280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Beautiful candel | Xmas",saved:false},
    { img:"https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"Burger | fast food",saved:false},
    { img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",name:"Honey | Pancakes",saved:false},
    { img:"https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",name:"Model | Pose",saved:false},
    { img:"https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",name:"Architecture",saved:false},
]
// Array to store info about the categories 
let ctgData={
    Favorite:[],
    Food:[],
    Sports:[]
}
//Setting data to the local storage
let local=window.localStorage;
setLocal=(arr,key)=>{
    local.setItem(key,JSON.stringify(arr));
}
//retrieve the data
retrieve=(key)=>{
    return JSON.parse(local.getItem(key));
}
// function to show all the image cards
function showCards(arr){
    let t="";
    arr.forEach(function(elm,i){
        t+=`<div class="card">
        <div class="ovly" id="${i}">
            <button class="sbtn cursor" id="${i}">
            ${elm.saved?"saved":"save"}
            </button>
            <div class="ctg">
                <h5>${elm.ctg?elm.ctg:"save if you like"}</h5>
                <i class="ri-arrow-drop-down-line cursor sctg" ></i>
            </div>
            
            <h3>${elm.name}
               
             </h3>
             <a download href="./github.png"><i class="ri-download-cloud-2-line"></i></a></a>
        </div>
        <img src="${elm.img}" id="${i}" class="cimg" alt="">

        
    </div>`;
    })
    content.innerHTML=t;
}
function showCtg(ctg){
    let t="";
    for(let i in ctg){
        t+=` <div class="cctg">
        <a download href="./github.png">${i}</a>
        <i class="ri-close-circle-fill"></i>
    </div>`
    }
    // console.log(t);
    ctgList.innerHTML=t;
}

//Main event
content.addEventListener("click",function(dets){
    console.log(dets);
    if(dets.target.classList[0]==="sbtn"){
        console.log("hello");
    }
})




//Initial work
if(local.getItem("mainData")===null){
    setLocal(baseData,"mainData");
}
if(local.getItem("category")===null){
    setLocal(ctgData,"category");
}
// setLocal(baseData,"mainData");
// setLocal(ctgData,"category");
showCards(retrieve("mainData"));
showCtg(retrieve("category"));

