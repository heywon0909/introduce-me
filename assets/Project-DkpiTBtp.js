import{n as t,F as n,j as e,r as c,p as g,q as f}from"../index-CxCzRq8S.js";import{L as x,P as u,O as h,a as j,b as y,c as P,d as b,e as w,f as v}from"./LazyImage-CT6xEsvw.js";import{f as U}from"./TechBunney-btHKOzHN.js";import{C as I}from"./CareerDetail-Dl6-v1yt.js";const C=t.div`
    width: 100%;
    height: calc(100vh - 57px);
    display: flex;
    position: relative;
    flex-direction: column;
    position: relative;
    top: 2%;
    background-color: rgb(14, 16, 15);
`,r=t.div`
    ${n};
    flex-direction: column;
`,z=t.div`
    ${n};
    flex-direction: row;
`,E=t.div`
    ${n};
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
`,l=t.div`
    font-family: Poppins-black;
    color: #fff;
    font-size: 1.5rem;
`;t.div`
    width: 60px;
    height: 60px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e4d;
`;t.div`
    width: auto;
    height: 200px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e4d;
    gap: 20px;
    padding: 10px 10px;
`;t.div`
    color: #fff;
`;t.div`
    ${n};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;const k=t.h2`
    color: #0ebeff;
    font-family: Poppins-black;
`,O=t.div`
    color: #fff;
`,A=t.img`
    object-fit: cover;
    width: auto;
    height: auto;
    max-width: 400px;
`,a="/introduce-me/assets/image/image.png",R=({id:o,core:s,title:i,desc:d,imageUrl:m,optimizationImgUrl:p})=>e.jsxs(z,{style:{justifyContent:"center",padding:"120px 0",gap:"10px"},id:`${o}`,children:[e.jsxs(r,{style:{width:"40%"},children:[e.jsx(k,{children:s}),e.jsx(l,{children:i}),e.jsx(O,{children:e.jsx(c.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(I,{fetchUrl:d})})})]}),e.jsx(r,{style:{width:"30%",marginTop:"3%"},children:e.jsx(x,{src:p,fallbackComponent:e.jsx(A,{src:m,loading:"lazy",alt:"프로젝트이미지"})})})]});function D(){const{id:o}=f();c.useEffect(()=>{var i;o&&((i=document.getElementById(o))==null||i.scrollIntoView())},[o]),c.useEffect(()=>{const i=new Image;i.src=a},[]);const s=[{id:0,imageUrl:u,optimizationImgUrl:h,core:"Open Source library",title:"React UI 라이브러리 제작",desc:"/introduce-me/assets/md/project-bunney.md"},{id:1,imageUrl:j,optimizationImgUrl:y,title:"나만의 eslint plugin 제작",core:"ESlint plugin",desc:"/introduce-me/assets/md/project-plugin.md"},{id:2,imageUrl:P,optimizationImgUrl:b,title:"짝맞추기 게임을 React로 구현",core:"React Game Project",desc:"/introduce-me/assets/md/project-game.md"},{id:3,imageUrl:w,optimizationImgUrl:v,title:"web Audio API 활용하여 오디오 음향 효과 웹페이지",core:"web Audio API",desc:"/introduce-me/assets/md/project-audio.md"}];return e.jsxs(C,{children:[e.jsxs(E,{style:{background:`#9f9fc7 url(${a})`},children:[e.jsx(r,{children:e.jsx(l,{children:"ABOUT PROJECTS"})}),e.jsx("div",{style:{width:"150px",height:"150px"},children:e.jsx(U,{})})]}),e.jsx(r,{style:{gap:"100px",marginTop:"120px"},children:s.map(i=>e.jsx(R,{id:i.id,core:i.core,desc:i.desc,title:i.title,imageUrl:i.imageUrl,optimizationImgUrl:i.optimizationImgUrl},i.id))})]})}export{D as default};
