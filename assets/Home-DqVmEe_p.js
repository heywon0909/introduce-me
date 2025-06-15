const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProfileImg-BA-45epN.js","index-4uFidZoJ.js","index-XJqBUM4z.css","assets/TechBunney-AVn2h30S.js"])))=>i.map(i=>d[i]);
import{n as e,j as i,r as l,B as h,_ as m}from"../index-4uFidZoJ.js";import{g as f,F as u}from"./index-B3GdpdRb.js";const b=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    padding: 0px 5px;
    gap: 3%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`,y=e.div`
    color: rgb(84 32 181);
    font-size: 1.5rem;
    font-family: Kanit-medium;
    font-weight: 100;
`,w=e.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`,d=e.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`,s=e.span`
    font-size: 6rem;
    letter-spacing: -0.01em;
    line-height: 100%;
    margin: 0;
    font-family: Kanit-extrabold;
    width: 100%;
    color: #000;
    // background: linear-gradient(to right, #fdbbbb, #001c95) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0%;
    transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    @media (max-width: 600px) {
        font-size: 10vw;
    }
    background-image: linear-gradient(120deg, #ffc4f7, #725bdc);
    -webkit-background-clip: text;
    color: transparent;
`,g=e.div`
    position: absolute;
    display: flex;

    ${t=>t.left&&`
    left:${String(t.left)}%;
  `};
    ${t=>t.right&&`
    right:${String(t.right)}%;
  `};
    flex-direction: column;
    @media (min-width: 768px) {
        ${t=>t.left&&`
    left:${String(t.left+10)}%;
  `};
        ${t=>t.right&&`
    right:${String(t.right+10)}%;
  `};
    }
`,p=e.span`
    color: rgb(157 157 157);
    font-family: NotoSansKR-Bold;
    font-weight: 800;
`,j=e.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 85%;
    height: 500px;
    border-radius: 2%;
    // background: linear-gradient(120deg, #ffc4f7, #725bdc);
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`,v=e.div`
    width: 300px;
    height: auto;
    position: relative;
    flex-shrink: 1;
`;e.img`
    position: absolute;
    top: 22%;
    left: 27%;
`;const k=({leftFrameText:t,rightFrameText:a})=>{const o=t==null?void 0:t.split("").map((n,r)=>({key:r,value:n})),c=a==null?void 0:a.split("").map((n,r)=>({key:r,value:n}));return i.jsxs(i.Fragment,{children:[o&&i.jsx(g,{left:3,children:o.map(({key:n,value:r})=>i.jsx(p,{children:r},n))}),c&&i.jsx(g,{right:3,children:c.map(({key:n,value:r})=>i.jsx(p,{children:r},n))})]})},$=({children:t})=>{const a=l.useRef(null),o=l.useRef(null),c=l.useRef(null);return l.useEffect(()=>{f.timeline({repeat:0}).fromTo(a.current,{yPercent:-50,opacity:.3},{yPercent:0,opacity:1,duration:1}).fromTo(c.current,{opacity:.3},{duration:1,yPercent:0,rotateY:30,rotateZ:30,opacity:1}).fromTo(o.current,{opacity:0},{opacity:1,duration:2})},[]),l.useEffect(()=>{f.utils.toArray(document.querySelectorAll("#text")).forEach(r=>{f.to(r,{backgroundSize:"100%",ease:"none"})})},[]),i.jsx(j,{children:i.jsxs(b,{children:[i.jsxs(w,{children:[i.jsxs(d,{ref:a,children:[i.jsx(s,{id:"text",children:"HELLO "}),i.jsx(s,{ref:c,children:i.jsx(u,{id:"hand",size:60,color:"rgb(67 92 221)"})})]}),i.jsx(d,{ref:o,children:i.jsx(s,{id:"text",children:"I'm "})}),i.jsx(d,{ref:o,children:i.jsx(s,{id:"text",children:"Heywon"})}),i.jsx(d,{ref:o,children:i.jsx(y,{children:"Frontend Developer"})})]}),t]})})},z=({children:t})=>i.jsx(v,{children:t}),S=e.div`
    display: flex;
    flex-direction: ${({dir:t})=>t??"column"};
    align-items: center;
    justify-content: center;
    width: 100%;
`,x=l.forwardRef(function(a,o){const{children:c,otherProps:n,dir:r}=a;return i.jsx(S,{style:{...n},dir:r,ref:o,className:o?"colored":"",children:c})});x.displayName="ContentWrapper";e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    padding: 0px 5px;
    @media screen {
        gap: 3%;
    }

    @media (min-width: 768px) {
        flex-direction: column;
        gap: 8%;
    }
`;e.div`
    width: 300px;
    height: 300px;
    position: relative;
    background-image: url(${t=>t.url});
    background-size: contain;
    background-repeat: no-repeat;
    flex-shrink: 1;
`;e.div`
    display: flex;
    flex-direction: column;
`;e.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;e.span`
    font-size: 3.2rem;
    letter-spacing: -0.01em;
    line-height: 100%;
    margin: 0;
    font-family: Kanit-extrabold;
    width: 100%;
    color: rgb(182, 182, 182, 0.2);
    background: linear-gradient(to right, #fdbbbb, #001c95) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0%;
    transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    @media (max-width: 600px) {
        font-size: 10vw;
    }
`;e.div`
    color: #fff;
    line-height: 20px;
    font-size: 30px;
`;e.img`
    position: absolute;
    top: 22%;
    left: 27%;
`;e.div`
    color: #fff;
    font-size: 30px;
    font-family: 'Noto Sans KR';
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;e.div`
    color: rgb(255, 252, 225);
    width: 280px;
    font-size: 1.8rem;
    font-family: Poppins-black;
    font-weight: 100;
`;e.div`
    color: rgb(84 32 181);
    font-size: 1.5rem;
    font-family: Kanit-medium;
    font-weight: 100;
`;e.div`
    position: absolute;
    display: flex;

    ${t=>t.left&&`
    left:${String(t.left)}%;
  `};
    ${t=>t.right&&`
    right:${String(t.right)}%;
  `};
    flex-direction: column;
    @media (min-width: 768px) {
        ${t=>t.left&&`
    left:${String(t.left+10)}%;
  `};
        ${t=>t.right&&`
    right:${String(t.right+10)}%;
  `};
    }
`;e.span`
    color: rgb(157 157 157);
    font-family: NotoSansKR-Bold;
    font-weight: 800;
`;const E=e.div`
    display: flex;
    flex-direction: ${({dir:t})=>t??"column"};
    align-items: center;
    justify-content: center;
    width: 100%;
`;e.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    gap: 10px;
    width: 85%;
    height: 700px;
    background-image: url(${t=>t.url});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10%;
    }
    @media (min-width: 768px) {
        width: 70%;
    }
`;e(h)``;e.div`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
`;e.footer`
    position: absolute;
    width: 100%;
    background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5) 10%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 1) 30%,
        rgb(0, 0, 0)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    bottom: 0;
`;e.p`
    // font-family: Kanit-medium;
    color: #c3c3c3;
    font-size: 1rem;
`;e.h3`
    font-family: Kanit-medium;
    color: #737373;
    font-size: 1.7rem;
    font-weight: 500;
    margin: ${({margin:t})=>t&&`${String(t)}px`};
`;e.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 2px 2px;
    justify-content: center;
    align-items: center;
`;const P=l.lazy(()=>m(async()=>{const{ProfileImg:t}=await import("./ProfileImg-BA-45epN.js");return{ProfileImg:t}},__vite__mapDeps([0,1,2,3])).then(({ProfileImg:t})=>({default:t})));function K(){return i.jsxs(x,{otherProps:{height:"100vh"},children:[i.jsx(k,{leftFrameText:"DEVELOPER",rightFrameText:"FRONT-END"}),i.jsx(E,{children:i.jsx($,{children:i.jsx(z,{children:i.jsx(l.Suspense,{fallback:i.jsx("div",{}),children:i.jsx(P,{})})})})})]})}export{K as default};
