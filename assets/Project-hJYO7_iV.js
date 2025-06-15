import{n as t,F as c,j as e,r as s,p as g,q as f}from"../index-4uFidZoJ.js";import{L as x,P as u,O as h,a as j,b as y,c as b,d as w,e as P,f as v}from"./LazyImage-mXX1KeEO.js";import{f as I}from"./TechBunney-AVn2h30S.js";import{C as U}from"./CareerDetail-2mSQ39Re.js";const l="/introduce-me/assets/image/image.png",C="/introduce-me/assets/image/image.webp",E=t.div`
    width: 100%;
    height: calc(100vh - 57px);
    display: flex;
    position: relative;
    flex-direction: column;
    position: relative;
    top: 2%;
    background-color: rgb(14, 16, 15);
`,r=t.div`
    ${c};
    flex-direction: column;
`,z=t.div`
    ${c};
    flex-direction: row;
`,O=t.img`
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
`,k=t.div`
    ${c};
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
    position: absolute;
`,d=t.div`
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
    ${c};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;const A=t.h2`
    color: #0ebeff;
    font-family: Poppins-black;
`,R=t.div`
    color: #fff;
    width: auto;
    height: 700px;
`,S=t.img`
    object-fit: cover;
    width: auto;
    height: auto;
    max-width: 400px;
`,B=({id:o,core:n,title:a,desc:i,imageUrl:m,optimizationImgUrl:p})=>e.jsxs(z,{style:{justifyContent:"center",padding:"120px 0",gap:"10px"},id:String(o),children:[e.jsxs(r,{style:{width:"40%"},children:[e.jsx(A,{children:n}),e.jsx(d,{children:a}),e.jsx(R,{children:e.jsx(s.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(U,{fetchUrl:i})})})]}),e.jsx(r,{style:{width:"30%",marginTop:"3%"},children:e.jsx(x,{src:p,fallbackComponent:e.jsx(S,{src:m,loading:"lazy",alt:"프로젝트이미지"})})})]});function G(){const{id:o}=f(),n=s.useRef(null);s.useEffect(()=>{n.current&&(n.current.style.display="block")},[]),s.useEffect(()=>{if(o){const i=document.getElementById(o);i&&i.scrollIntoView({behavior:"auto"})}},[o]),s.useEffect(()=>{const i=new Image;i.src=l},[]);const a=[{id:0,imageUrl:u,optimizationImgUrl:h,core:"Open Source library",title:"React UI 라이브러리 제작",desc:"/introduce-me/assets/md/project-bunney.md"},{id:1,imageUrl:j,optimizationImgUrl:y,title:"나만의 eslint plugin 제작",core:"ESlint plugin",desc:"/introduce-me/assets/md/project-plugin.md"},{id:2,imageUrl:b,optimizationImgUrl:w,title:"짝맞추기 게임을 React로 구현",core:"React Game Project",desc:"/introduce-me/assets/md/project-game.md"},{id:3,imageUrl:P,optimizationImgUrl:v,title:"web Audio API 활용하여 오디오 음향 효과 웹페이지",core:"web Audio API",desc:"/introduce-me/assets/md/project-audio.md"}];return e.jsxs(E,{children:[e.jsxs("picture",{children:[e.jsx("source",{srcSet:C,type:"image/webp"}),e.jsx(O,{src:l})]}),e.jsxs(k,{children:[e.jsx(r,{children:e.jsx(d,{children:"ABOUT PROJECTS"})}),e.jsx("div",{style:{width:"150px",height:"150px"},children:e.jsx(I,{})})]}),e.jsx(r,{style:{gap:"100px",marginTop:"120px",display:"none"},ref:n,children:a.map(i=>e.jsx(B,{id:i.id,core:i.core,desc:i.desc,title:i.title,imageUrl:i.imageUrl,optimizationImgUrl:i.optimizationImgUrl},i.id))})]})}export{G as default};
