let content=document.querySelector("#content");
let inptModal=document.querySelector("#category");
let cinpt=document.querySelector("#inpt input");
let ctgList=document.querySelector("#cclip");
let flag=1;
let showBtn=document.querySelector("#showClip");
let checkCtg=document.querySelector("#show");

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
        showBtn.style.width="30%";
        document.querySelector("#show").style.display="flex"
        flag=0;
    }
    else{
        showBtn.style.width="0%";
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
let data=[
    {cid:0, img:"https://images.unsplash.com/photo-1632924192284-9163f3d88a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Gift Packages",saved:false},
    {cid:1, img:"https://images.unsplash.com/photo-1542318332-034f3136b62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",name:"Flowers n Beauty",saved:false},
    {cid:2, img:"https://images.unsplash.com/photo-1607092683781-a3146e0a1d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Chocolate Chip Cookies",saved:false},
    {cid:3, img:"https://images.unsplash.com/photo-1483201811930-882b8be091e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"The best way to start",saved:false},
    {cid:4, img:"https://images.unsplash.com/photo-1608473430561-df11ffde8b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",name:"Puppy in the house",saved:false},
    {cid:5, img:"https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",name:"Athletics | Snow",saved:false},
    {cid:6, img:"https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80",name:"Cycling is Love",saved:false},
    {cid:7, img:"https://images.unsplash.com/photo-1561001070-ce11eea271b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"Kuch khana bhi hai",saved:false},
    {cid:8, img:"https://images.unsplash.com/photo-1579710759212-d869a36773ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",name:"Winter Peace",saved:false},
    {cid:9, img:"https://images.unsplash.com/photo-1622277695245-c1694a6c0b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",name:"Mount Everest",saved:false},
    {cid:10, img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Laughter | Girl",saved:false},
    {cid:11, img:"https://images.unsplash.com/photo-1591153952470-8eede4a8f00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",name:"Tired af",saved:false},
    {cid:12, img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",name:"Mediterranean Salad",saved:false},
    {cid:13, img:"https://images.unsplash.com/photo-1508473161895-5dabcc2f59cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",name:"View | Girl with cape",saved:false},
    {cid:14, img:"https://images.unsplash.com/photo-1624589010366-365b61efb41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"Beautiful site | Mountain",saved:false}
]
// Array to store info about the categories 
let ctgData=[
    {name:"Favorite"},
]



//Setting data to the local storage
let local=window.localStorage;
setLocal=(arr,ctg)=>{
    local.setItem(ctg,JSON.stringify(arr));
}
//retrieve the data
retrieve=(ctg)=>{
    return JSON.parse(local.getItem(ctg));
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
//function of delete the category from the array
delCtg=(index)=>{
    let arr=retrieve("category");
    arr.splice(index,1);
    console.log(arr)
    return arr;
    }
    //refresh the main data after the category is removed 
    delCtgFromData=(ctg)=>{
        let arr=retrieve("mainData");
        arr.forEach(function(e,i){
            if(e.ctg===ctg){
                e.saved=false;
                delete e.ctg;
            }
        })
        console.log(arr);
        return arr;
    }

// Pinning the images 
// #main event
content.addEventListener("click",function(e){
    let tempArr=retrieve("mainData");
    // let idd=(e.target.id).split('');
    // let index=tempArr[idd[0]][idd[1]];
    let index=e.target.id;   
    if(e.target.classList[0]==="sbtn"){
        tempArr[index].saved=!tempArr[index].saved
        setLocal(tempArr,"mainData");
        tempArr=retrieve("mainData");
        showCards(tempArr);

        inptModal.addEventListener("click",function(dets){
            //If User wants to close the window
            // console.log(dets.target);
             if(dets.target.id==="cls"){
                            tempArr[index].saved=!tempArr[index].saved
        
                            setLocal(tempArr,"mainData");
                            tempArr=retrieve("mainData");
                            inptModal.style.display="none";
                            showCards(tempArr);
                        }
        })
        if(tempArr[index].saved){
            inptModal.style.display="initial";
            cinpt.disabled=false;
            cinpt.focus();
            ctgList.addEventListener("click",function(d){
                // let ctg=clips[d.target.id].querySelector("a").textContent;
                let tempCtg=retrieve("category");
                showCtg(tempCtg);
                // console.log(d.target.id);
                tempArr[index].ctg=tempCtg[d.target.id].name;
                setLocal(tempArr,"mainData");

                tempArr=retrieve("mainData");
                showCards(tempArr);
                inptModal.style.display="none";
            })

            // showCtg("mainData");
        }
        else{
            delete tempArr[index].ctg;
            setLocal(tempArr,"mainData");
            tempArr=retrieve("mainData");
            showCards(tempArr)
        }
    }
    if(e.target.classList[2]==="sctg"){
        console.log("hello");
        inptModal.style.display="initial";
        cinpt.disabled=true;
        inptModal.addEventListener("click",function(dets){
            if(dets.target.id==="cls"){
                inptModal.style.display="none";
            }

        })
//Event to rmove the any Existing Categories
        ctgList.addEventListener("click",function(e){
            // console.log(e.target.classList);
            if(e.target.classList[2]==="close"){
                let tCtg=retrieve("category");
                // console.log(tCtg[e.target.id].name);
                setLocal(delCtgFromData(tCtg[e.target.id].name),"mainData");
                // let arrrr=retrieve("mainData");
                // console.log(arrrr);
                showCards(retrieve("mainData"));
                setLocal(delCtg(e.target.id),"category");
                showCtg(retrieve("category"));
                showCheck(retrieve("category"));
                cinpt.focus();
                inptModal.style.display="none";
                showCards(retrieve("mainData"));
        
            }
        })

    }

})

//Showing the data category wise
filter=(ctg)=>{
    let arr=retrieve("mainData");
    // console.log(arr);
    let arr2=[];
    arr.forEach(function(elm,i){
            if(elm.ctg===ctg){
               arr2.push(elm);
            }
        
        
        })
    // console.log(arr2);
    return arr2;
}
checkCtg.addEventListener("change",function(d){
    if(d.target.className==="cursor"){
        if(this.querySelectorAll("input")[d.target.id].checked){
            // console.log("hello")
            showCards(filter(document.querySelectorAll("label")[d.target.id].textContent));
            content.style.flexDirection="row";
        }
        else{
            content.style.flexDirection="column";
            let dt=retrieve("mainData")
            showCards(dt);
        }
    }
})




// Categorising the data related to the user INput 
// getting input value
function getCtg(){
    return cinpt.value.trim();
}
function showCtg(ctgArr){
    // let d1=document.createElement("div");
    // d1.classList.add("cctg");
    // let a=document.createElement("a");
    // a.textContent=ctg;
    // d1.append(a);
    // ctgList.append(d1);
    let t="";
    ctgArr.forEach(function(e,i){
        t+=`<div class="cctg" id="${i}">
        <i class="ri-close-circle-fill cursor close" id="${i}"></i>
        <a href="#" id="${i}">${e.name}</a>
    </div>`
    })
    ctgList.innerHTML=t;

    
}
//to show categories as checkbox
function showCheck(ctgArr){
    let t="";
    ctgArr.forEach(function(e,i){
        t+=`
        <input type="checkbox" id="${i}" class="cursor">
        <label for="${i}" class="cursor">${e.name}</label>
        `
    })
    checkCtg.innerHTML=t;
}

// In this way the user can make there own category
cinpt.addEventListener("keydown",function(e){
    if(e.keyCode===13){
        let tempCtg=retrieve("category");
        tempCtg.push({name:getCtg()});
        setLocal(tempCtg,"category");
        showCtg(retrieve("category"));
        showCheck(retrieve("category"));
        cinpt.value="";
        cinpt.blur();
    }
    
})






//Initial work
if(local.getItem("mainData")===null){
    setLocal(data,"mainData");
}
if(local.getItem("category")===null){
    setLocal(ctgData,"category");
}
// setLocal(data,"mainData");
// setLocal(ctgData,"category");


let main=retrieve("mainData");
let ctgArr=retrieve("category");
showCtg(ctgArr);
showCheck(ctgArr);
showCards(main);


// create array (not used yet)
function getElement(elem,ctg){
    let arr2=retrieve(ctg);
    if(arr2===null){
        let ar=[];
        ar.push(elem);
        setLocal(ar,ctg);
        return ar;
        
    }
    else{
        arr2.push(elem);
    }
    console.log(arr2);
    arr2.push(elem);
    return arr2;

}
