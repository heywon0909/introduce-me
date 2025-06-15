import{n as t,j as e,r as p,p as x}from"../index-4uFidZoJ.js";import{u as o,C as a}from"./CareerDetail-2mSQ39Re.js";const m=t.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 700px) {
        flex-direction: column;
        width: unset;
    }
`,h=t.div`
    width: 300px;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`,y=t.div`
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
`,u=t.img`
    width: 160px;
    height: 160px;
    clip-path: circle(80px);
    ${i=>i.src&&`
    src:${i.src};
  `};
`,g=t.h2`
    font-family: NotoSansKR-Bold;
    color: rgb(182 182 182);
    font-size: 1.5rem;
`,j=t.div`
    font-family: Poppins-black;
    color: #fff;
`,w=t.div`
    font-family: NotoSansKR-Light;
    color: #fff;
`,v=t.div`
    border-bottom: 1px solid #fff;
`,C=t.div`
    font-family: NotoSansKR-Light;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    width: 100%;
`,s=({data:i,children:n})=>{const{companyName:c,workPeriod:d,companyDesc:l,companyLogo:f}=i;return e.jsxs(m,{children:[e.jsx(h,{children:e.jsx(u,{src:f})}),e.jsxs(y,{children:[e.jsx(g,{children:c}),e.jsx(j,{children:d}),e.jsx(w,{dangerouslySetInnerHTML:{__html:l}}),e.jsx(v,{}),e.jsx(C,{children:n})]})]})},b=t.div`
    width: calc(100vw - 20px);
    height: calc(100% - 70px);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
    margin-top: 10%;
`,S=t.div`
    font-family: Poppins-black;
    color: rgb(182 182 182);
    font-size: 1.5rem;
`,R=t.div`
    width: 60%;
    height: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
`,K=t.div`
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
`;const r=async i=>await fetch(`/introduce-me/assets/data/${i}.json`).then(n=>n.text()).then(n=>JSON.parse(n));function k(){const{data:i}=o({queryKey:["prevCareer"],queryFn:r("tmax")}),{data:n}=o({queryKey:["curCareer"],queryFn:r("eco")});return e.jsx(b,{children:e.jsxs(R,{children:[e.jsx(S,{children:"Career"}),e.jsx(K,{children:e.jsxs(p.Suspense,{fallback:e.jsx(x,{}),children:[e.jsx(s,{data:i,children:e.jsx(a,{fetchUrl:"/introduce-me/assets/md/tmax.md"})}),e.jsx(s,{data:n,children:e.jsx(a,{fetchUrl:"/introduce-me/assets/md/eco.md"})})]})})]})})}export{k as default};
