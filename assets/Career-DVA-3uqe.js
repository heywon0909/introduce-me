import{n as t,j as e,r as f,p}from"../index-DE6XfWtO.js";import{u as s,C as a}from"./CareerDetail-DvquCDdz.js";const x=t.div`
    width: calc(100vw - 20px);
    height: calc(100% - 70px);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
    margin-top: 10%;
`,m=t.div`
    font-family: Poppins-black;
    color: rgb(182 182 182);
    font-size: 1.5rem;
`,h=t.div`
    width: 60%;
    height: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
`,y=t.div`
    height: auto;
    display: flex;
    gap: 5%;
    flex-direction: column;
    @media (max-width: 600px) {
        width: unset;
    }
`;t.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 700px) {
        flex-direction: column;
        width: unset;
    }
`;t.div`
    width: 300px;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;t.div`
    padding: 2px 15px;
    border-left: 0.1rem solid #7c7c7c;
    display: flex;
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 600px) {
        width: unset;
    }
`;t.img`
    width: 160px;
    height: 160px;
    clip-path: circle(80px);
    ${i=>i.src&&`
    src:${i.src};
  `};
`;t.h2`
    font-family: NotoSansKR-Bold;
    color: rgb(182 182 182);
    font-size: 1.5rem;
`;t.div`
    font-family: Poppins-black;
    color: #fff;
`;t.div`
    font-family: NotoSansKR-Light;
    color: #fff;
`;t.div`
    border-b: 1px solid #fff;
`;t.div`
    font-family: NotoSansKR-Light;
    font-size: 0.9rem;
`;t.div`
    color: #9660fc;
    height: 64px;
    display: flex;
    padding-left: 10px;
    justify-content: center;
    align-items: center;
    font-family: NotoSansKR-Regular;
    font-size: 1rem;
`;t.ul`
    color: #fff;
`;t.li`
    color: #fff;
`;const u=t.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 700px) {
        flex-direction: column;
        width: unset;
    }
`,g=t.div`
    width: 300px;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`,j=t.div`
    padding: 2px 15px;
    border-left: 0.1rem solid #7c7c7c;
    display: flex;
    width: 60%;
    gap: 15px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 600px) {
        width: unset;
    }
`,w=t.img`
    width: 160px;
    height: 160px;
    clip-path: circle(80px);
    ${i=>i.src&&`
    src:${i.src};
  `};
`,v=t.h2`
    font-family: NotoSansKR-Bold;
    color: rgb(182 182 182);
    font-size: 1.5rem;
`,C=t.div`
    font-family: Poppins-black;
    color: #fff;
`,b=t.div`
    font-family: NotoSansKR-Light;
    color: #fff;
`,S=t.div`
    border-bottom: 1px solid #fff;
`,N=t.div`
    font-family: NotoSansKR-Light;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    width: 100%;
`,r=({data:i,children:o})=>{const{companyName:n,workPeriod:c,companyDesc:d,companyLogo:l}=i;return e.jsxs(u,{children:[e.jsx(g,{children:e.jsx(w,{src:l})}),e.jsxs(j,{children:[e.jsx(v,{children:n}),e.jsx(C,{children:c}),e.jsx(b,{dangerouslySetInnerHTML:{__html:d}}),e.jsx(S,{}),e.jsx(N,{children:o})]})]})};function L(){const{data:i}=s({queryKey:["prevCareer"],queryFn:fetch("/introduce-me/assets/data/tmax.json").then(n=>n.text()).then(n=>JSON.parse(n))}),{data:o}=s({queryKey:["curCareer"],queryFn:fetch("/introduce-me/assets/data/eco.json").then(n=>n.text()).then(n=>JSON.parse(n))});return e.jsx(x,{children:e.jsxs(h,{children:[e.jsx(m,{children:"Career"}),e.jsx(y,{children:e.jsxs(f.Suspense,{fallback:e.jsx(p,{}),children:[e.jsx(r,{data:i,children:e.jsx(a,{fetchUrl:"/introduce-me/assets/md/tmax.md"})}),e.jsx(r,{data:o,children:e.jsx(a,{fetchUrl:"/introduce-me/assets/md/eco.md"})})]})})]})})}export{L as default};
