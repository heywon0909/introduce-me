import{n as t,F as n,j as e,r as c,p as g,q as x}from"../index-Cl3J9x73.js";import{L as f,P as u,O as h,a as j,b as y,c as b,d as w,e as P,f as I}from"./LazyImage-CrD-Wf_t.js";import{f as v}from"./TechBunney-C8yyFxZf.js";import{C as U}from"./CareerDetail-8N1-kzFG.js";const C=t.div`
    width: 100%;
    height: calc(100vh - 57px);
    display: flex;
    position: relative;
    flex-direction: column;
    position: relative;
    top: 2%;
    background-color: rgb(14, 16, 15);
`,s=t.div`
    ${n};
    flex-direction: column;
`,z=t.div`
    ${n};
    flex-direction: row;
`,E=t.img`
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
`,O=t.div`
    ${n};
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
    position: absolute;
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
`,A=t.div`
    color: #fff;
`,R=t.img`
    object-fit: cover;
    width: auto;
    height: auto;
    max-width: 400px;
`,a="/introduce-me/assets/image/image.png",S="/introduce-me/assets/image/image.webp",B=({id:o,core:r,title:i,desc:d,imageUrl:m,optimizationImgUrl:p})=>e.jsxs(z,{style:{justifyContent:"center",padding:"120px 0",gap:"10px"},id:`${o}`,children:[e.jsxs(s,{style:{width:"40%"},children:[e.jsx(k,{children:r}),e.jsx(l,{children:i}),e.jsx(A,{children:e.jsx(c.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(U,{fetchUrl:d})})})]}),e.jsx(s,{style:{width:"30%",marginTop:"3%"},children:e.jsx(f,{src:p,fallbackComponent:e.jsx(R,{src:m,loading:"lazy",alt:"프로젝트이미지"})})})]});function G(){const{id:o}=x();c.useEffect(()=>{var i;o&&((i=document.getElementById(o))==null||i.scrollIntoView())},[o]),c.useEffect(()=>{const i=new Image;i.src=a},[]);const r=[{id:0,imageUrl:u,optimizationImgUrl:h,core:"Open Source library",title:"React UI 라이브러리 제작",desc:"/introduce-me/assets/md/project-bunney.md"},{id:1,imageUrl:j,optimizationImgUrl:y,title:"나만의 eslint plugin 제작",core:"ESlint plugin",desc:"/introduce-me/assets/md/project-plugin.md"},{id:2,imageUrl:b,optimizationImgUrl:w,title:"짝맞추기 게임을 React로 구현",core:"React Game Project",desc:"/introduce-me/assets/md/project-game.md"},{id:3,imageUrl:P,optimizationImgUrl:I,title:"web Audio API 활용하여 오디오 음향 효과 웹페이지",core:"web Audio API",desc:"/introduce-me/assets/md/project-audio.md"}];return e.jsxs(C,{children:[e.jsxs("picture",{children:[e.jsx("source",{srcSet:S,type:"image/webp"}),e.jsx(E,{src:a})]}),e.jsxs(O,{children:[e.jsx(s,{children:e.jsx(l,{children:"ABOUT PROJECTS"})}),e.jsx("div",{style:{width:"150px",height:"150px"},children:e.jsx(v,{})})]}),e.jsx(s,{style:{gap:"100px",marginTop:"120px"},children:r.map(i=>e.jsx(B,{id:i.id,core:i.core,desc:i.desc,title:i.title,imageUrl:i.imageUrl,optimizationImgUrl:i.optimizationImgUrl},i.id))})]})}export{G as default};
