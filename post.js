

function getFormatedDate(date){
  const formatDate = new Date(date)
  return formatDate.toLocaleDateString()
}


function articleTemplate(article){
  return `
  <article class="post" data-id="${article.id}">
        <picture>
        <img src="${article.url ?? "vite.svg"}" alt="post-banner">
        </picture>
      
      <aside>
        <h3 class="post-title">${article.title}</h3>
        <p class="post-details">Posted on <span class="post-published-date">${getFormatedDate(article.date)}</span>, Category: <span class="post-category">${article.category}</span></p>
        <p class="post-description" data-desc="${article.id}">
          ${article.description}
        </p>
        <button class="post-btn-cta" data-controls="${article.id}" >
          Continue Reading
        </button>
      </aside>
    </article>
  `
}


function renderPosts(articles){
  if(!(articles instanceof Array)) throw new Error("Illegal argument");
  return articles.map((article)=>articleTemplate(article)).join("\n")
}

