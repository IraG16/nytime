async function e(e){let t=await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${e}&api-key=Q2VVzVea4LFVCHhmlfvqeiIWVWVQXqOm`);return(await t.json()).response.docs}e("all").then(e=>a(e));let t=document.querySelector(".mobile");function a(e){let t="";for(let a=0;a<e.length;a++)if(e[a].multimedia.length>0){let n=`https://static01.nyt.com/${e[a].multimedia[0].url}`;t+=`
                <div class="card">
                    <a href="${e[a].web_url}" target="_blank">
                        <img src="${n}" loading="lazy" />
                        <h4>${e[a].headline.main}</h4>
                        <div class="publishbyDate">
                            <p>${e[a].source}</p>
                            <span>\u{2022}</span>
                            <p>${new Date(e[a].pub_date).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                            ${e[a].abstract}
                        </div>
                    </a>
                </div>`}document.querySelector("main").innerHTML=t}document.querySelector(".menuBtn").addEventListener("click",()=>{t.classList.toggle("hidden")});const n=document.getElementById("searchForm"),i=document.getElementById("searchFormMobile"),c=document.getElementById("searchInputMobile"),l=document.getElementById("searchInput");n.addEventListener("submit",async t=>{t.preventDefault(),a(await e(l.value))}),i.addEventListener("submit",async t=>{t.preventDefault(),a(await e(c.value))});
//# sourceMappingURL=index.76322a4c.js.map
