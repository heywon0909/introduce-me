import{n as t,B as b,j as i,r as c,g as x,F as y,E as n,S as j,p as w,R as v,_ as k,x as g,T as z,w as $,O as h,L as p,C,a as E}from"../index-DDVf4iof.js";t.div`
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
`;t.div`
    width: 300px;
    height: 300px;
    position: relative;
    background-image: url(${e=>e.url});
    background-size: contain;
    background-repeat: no-repeat;
    flex-shrink: 1;
`;t.div`
    display: flex;
    flex-direction: column;
`;t.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;t.span`
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
`;t.div`
    color: #fff;
    line-height: 20px;
    font-size: 30px;
`;t.img`
    position: absolute;
    top: 22%;
    left: 27%;
`;t.div`
    color: #fff;
    font-size: 30px;
    font-family: 'Noto Sans KR';
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;t.div`
    color: rgb(255, 252, 225);
    width: 280px;
    font-size: 1.8rem;
    font-family: Poppins-black;
    font-weight: 100;
`;t.div`
    color: rgb(84 32 181);
    font-size: 1.5rem;
    font-family: Kanit-medium;
    font-weight: 100;
`;t.div`
    position: absolute;
    display: flex;

    ${e=>e.left&&`
    left:${e.left}%;
  `};
    ${e=>e.right&&`
    right:${e.right}%;
  `};
    flex-direction: column;
    @media (min-width: 768px) {
        ${e=>e.left&&`
    left:${e.left+10}%;
  `};
        ${e=>e.right&&`
    right:${e.right+10}%;
  `};
    }
`;t.span`
    color: rgb(157 157 157);
    font-family: NotoSansKR-Bold;
    font-weight: 800;
`;const S=t.div`
    display: flex;
    flex-direction: ${({dir:e})=>e||"column"};
    align-items: center;
    justify-content: center;
    width: 100%;
`;t.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    gap: 10px;
    width: 85%;
    height: 700px;
    background-image: url(${e=>e.url});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10%;
    }
    @media (min-width: 768px) {
        width: 70%;
    }
`;t(b)``;t.div`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
`;t.footer`
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
`;t.p`
    // font-family: Kanit-medium;
    color: #c3c3c3;
    font-size: 1rem;
`;t.h3`
    font-family: Kanit-medium;
    color: #737373;
    font-size: 1.7rem;
    font-weight: 500;
    margin: ${({margin:e})=>e&&`${e}px`};
`;t.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 2px 2px;
    justify-content: center;
    align-items: center;
`;const R=t.div`
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
`,K=t.div`
    color: rgb(84 32 181);
    font-size: 1.5rem;
    font-family: Kanit-medium;
    font-weight: 100;
`,F=t.div`
    display: flex;
    flex-direction: column;
`,d=t.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`,f=t.span`
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
`,m=t.div`
    position: absolute;
    display: flex;

    ${e=>e.left&&`
    left:${e.left}%;
  `};
    ${e=>e.right&&`
    right:${e.right}%;
  `};
    flex-direction: column;
    @media (min-width: 768px) {
        ${e=>e.left&&`
    left:${e.left+10}%;
  `};
        ${e=>e.right&&`
    right:${e.right+10}%;
  `};
    }
`,u=t.span`
    color: rgb(157 157 157);
    font-family: NotoSansKR-Bold;
    font-weight: 800;
`,P=t.div`
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
`,I=t.div`
    width: 300px;
    height: auto;
    position: relative;
    flex-shrink: 1;
`;t.img`
    position: absolute;
    top: 22%;
    left: 27%;
`;const T=({leftFrameText:e,rightFrameText:o})=>{const r=e==null?void 0:e.split("").map((l,a)=>({key:a,value:l})),s=o==null?void 0:o.split("").map((l,a)=>({key:a,value:l}));return i.jsxs(i.Fragment,{children:[r&&i.jsx(m,{left:3,children:r.map(({key:l,value:a})=>i.jsx(u,{children:a},l))}),s&&i.jsx(m,{right:3,children:s.map(({key:l,value:a})=>i.jsx(u,{children:a},l))})]})},B=({children:e})=>{const o=c.useRef(null),r=c.useRef(null),s=c.useRef(null);return c.useEffect(()=>{x.timeline({repeat:0}).fromTo(o.current,{yPercent:-50,opacity:.3},{yPercent:0,opacity:1,duration:1}).fromTo(s.current,{opacity:.3},{duration:1,yPercent:0,rotateY:30,rotateZ:30,opacity:1}).fromTo(r.current,{opacity:0},{opacity:1,duration:2})},[]),c.useEffect(()=>{x.utils.toArray(document.querySelectorAll("#text")).forEach(a=>{x.to(a,{backgroundSize:"100%",ease:"none"})})},[]),i.jsx(P,{children:i.jsxs(R,{children:[i.jsxs(F,{children:[i.jsxs(d,{ref:o,children:[i.jsx(f,{id:"text",children:"HELLO "}),i.jsx(f,{ref:s,children:i.jsx(y,{id:"hand",size:60,color:"rgb(67 92 221)"})})]}),i.jsx(d,{ref:r,children:i.jsx(f,{id:"text",children:"I'm "})}),i.jsx(d,{ref:r,children:i.jsx(f,{id:"text",children:"Heywon"})}),i.jsx(d,{ref:r,children:i.jsx(K,{children:"Frontend Developer"})})]}),e]})})},N=({children:e})=>i.jsx(I,{children:e}),O=({size:e,color:o})=>n.jsx(j,{size:e,children:n.jsx(w,{size:e?e/7:1.35,color:o||"linear-gradient(#ff001f 19%,#e511aa 52%,#c03eed 98%)"})}),W=({color:e,earColor:o,eyeColor:r})=>n.jsxs(v,{children:[n.jsxs(k,{children:[n.jsx(g,{dir:"left",earColor:o}),n.jsx(g,{dir:"right",earColor:o})]}),n.jsx(z,{color:e,children:n.jsxs($,{children:[n.jsx(h,{eyeColor:r,children:n.jsx(p,{})}),n.jsx(h,{eyeColor:r,children:n.jsx(p,{})})]})})]}),D=t.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
`,H=t.div`
    position: absolute;
    top: 69%;
`,L=({size:e,color:o,earColor:r,eyeColor:s})=>n.jsxs(D,{children:[n.jsx(W,{color:o,earColor:r,eyeColor:s}),n.jsx(H,{children:n.jsx(O,{size:e})})]}),A=()=>i.jsx(L,{});function _(){const e=()=>window.scroll({top:1e3,behavior:"smooth"});return i.jsxs(C,{otherProps:{height:"100vh"},children:[i.jsx(T,{leftFrameText:"DEVELOPER",rightFrameText:"FRONT-END"}),i.jsxs(S,{children:[i.jsx(B,{children:i.jsx(N,{children:i.jsx(A,{})})}),i.jsx(E,{text:"More Info",props:{id:"more"},onClick:e})]})]})}export{_ as default};
