import{n as i,F as s,j as e,q as p,r as x}from"../index-DKPBLkCp.js";import{L as f,P as g,O as u,a as h,b as j,c as y,d as P,e as U,f as b}from"./LazyImage-DoruBYhB.js";import{f as v}from"./TechBunney-iMD1iJ40.js";import{C as r}from"./CareerDetail-D3BSIU3G.js";const w=i.div`
    width: 100%;
    height: calc(100vh - 57px);
    display: flex;
    position: relative;
    flex-direction: column;
    position: relative;
    top: 2%;
    background-color: rgb(14, 16, 15);
`,n=i.div`
    ${s};
    flex-direction: column;
`,I=i.div`
    ${s};
    flex-direction: row;
`,C=i.div`
    ${s};
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
`,a=i.div`
    font-family: Poppins-black;
    color: #fff;
    font-size: 1.5rem;
`;i.div`
    width: 60px;
    height: 60px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e4d;
`;i.div`
    width: auto;
    height: 200px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e4d;
    gap: 20px;
    padding: 10px 10px;
`;i.div`
    color: #fff;
`;i.div`
    ${s};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;const z=i.h2`
    color: #0ebeff;
    font-family: Poppins-black;
`,E=i.div`
    color: #fff;
`,O=i.img`
    object-fit: cover;
    width: auto;
    height: auto;
    max-width: 400px;
`,k="/introduce-me/assets/image/image.png",A=({id:o,core:c,title:t,desc:l,imageUrl:d,optimizationImgUrl:m})=>e.jsxs(I,{style:{justifyContent:"center",padding:"120px 0",gap:"10px"},id:`${o}`,children:[e.jsxs(n,{style:{width:"40%"},children:[e.jsx(z,{children:c}),e.jsx(a,{children:t}),e.jsx(E,{children:l})]}),e.jsx(n,{style:{width:"30%",marginTop:"3%"},children:e.jsx(f,{src:m,fallbackComponent:e.jsx(O,{src:d,loading:"lazy",alt:"프로젝트이미지"})})})]});function S(){const{id:o}=p();x.useEffect(()=>{var t;o&&((t=document.getElementById(o))==null||t.scrollIntoView())},[o]);const c=[{id:0,imageUrl:g,optimizationImgUrl:u,core:"Open Source library",title:"React UI 라이브러리 제작",desc:e.jsx(r,{fetchUrl:"/introduce-me/assets/md/project-bunney.md"})},{id:1,imageUrl:h,optimizationImgUrl:j,title:"나만의 eslint plugin 제작",core:"ESlint plugin",desc:e.jsx(r,{fetchUrl:"/introduce-me/assets/md/project-plugin.md"})},{id:2,imageUrl:y,optimizationImgUrl:P,title:"짝맞추기 게임을 React로 구현",core:"React Game Project",desc:e.jsx(r,{fetchUrl:"/introduce-me/assets/md/project-game.md"})},{id:3,imageUrl:U,optimizationImgUrl:b,title:"web Audio API 활용하여 오디오 음향 효과 웹페이지",core:"web Audio API",desc:e.jsx(r,{fetchUrl:"/introduce-me/assets/md/project-audio.md"})}];return e.jsxs(w,{children:[e.jsxs(C,{style:{background:`url(${k})`},children:[e.jsx(n,{children:e.jsx(a,{children:"ABOUT PROJECTS"})}),e.jsx("div",{style:{width:"150px",height:"150px"},children:e.jsx(v,{})})]}),e.jsx(n,{style:{gap:"100px",marginTop:"120px"},children:c.map(t=>e.jsx(A,{id:t.id,core:t.core,desc:t.desc,title:t.title,imageUrl:t.imageUrl,optimizationImgUrl:t.optimizationImgUrl},t.id))})]})}export{S as default};
