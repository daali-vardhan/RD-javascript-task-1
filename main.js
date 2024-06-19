const posts = [
  {
      id: "A001",
      title: "The Evolution of Java",
      url:"vite.svg",
      date: "2023-01-15",
      category: "Java",
      description: "The article provides a deep dive into the evolution of Java, from its inception to its current significant role in enterprise applications.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "B002",
      title: "The Power of Python in Data Science",
      url:"javascript.svg",
      date: "2023-02-28",
      category: "Python",
      description: "Explore how Python has become the preferred language for Data Science and Machine learning, and understand its growing influence in these fields. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "C003",
      title: "Building Interactive Websites with JavaScript",
      url:"javascript.svg",
      date: "2023-04-10",
      category: "JavaScript",
      description: "This article covers how JavaScript makes websites interactive and dynamic and explores the most recent trends and libraries in JavaScript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "D004",
      title: "Exploring Cloud Computing With AWS",
      url:"vite.svg",
      date: "2023-03-05",
      category: "Cloud Computing",
      description: "A comprehensive guide to understanding cloud computing using Amazon Web Services (AWS), including its services, advantages, and potential career paths. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "E005",
      title: "Cyber Security in the Digital Age",
      url:"vite.svg",
      date: "2023-05-25",
      category: "Cyber Security",
      description: "Understand the essentials of Cyber security, its significance in the digital age, and how to protect sensitive information from cyber threats. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "F006",
      title: "Understanding Data Structures and Algorithms",
      url:"vite.svg",
      date: "2023-04-20",
      category: "Data structures and algorithms",
      description: "A beginner's guide to getting started with data structures and algorithms, key components of efficient programming and problem-solving.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "G007",
      title: "Diving Deeper Into Machine Learning",
      url:"vite.svg",
      date: "2023-02-14",
      category: "Machine Learning",
      description: "This article illustrates the basic concepts of Machine Learning, its applications, various algorithms, and the future of Machine Learning. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "H008",
      title: "A Guide to Natural Language Processing",
      url:"vite.svg",
      date: "2023-06-22",
      category: "Artificial Intelligence",
      description: "Discover the world of Natural Language Processing (NLP) - a fascinating aspect of AI that allows machines to understand and respond to human language. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "I009",
      title: "The Impact of Blockchain Technology",
      url:"javascript.svg",
      date: "2023-03-30",
      category: "Blockchain",
      description: "In this article, we explore the influence and potential of blockchain technology beyond cryptocurrency, its use cases, and future implications. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  },
  {
      id: "J010",
      title: "UX/UI Design for Successful Apps",
      url:"javascript.svg",
      date: "2023-07-01",
      category: "UI/UX Design",
      description: "Explore the importance of UX/UI design in the success of mobile and web apps, and understand the practical principles of good design. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates, voluptate placeat pariatur commodi quia, inventore alias ipsa cupiditate, quo eveniet ipsum? Consectetur adipisci id labore dolorum nihil maiores ullam quia iure nesciunt voluptates! Et quos, debitis ipsum natus officiis consequatur aut labore. Odio asperiores molestiae veniam perspiciatis aliquid sapiente facere minima accusantium nostrum accusamus. Ad cupiditate minus placeat cumque minima, mollitia a totam! Assumenda nihil ipsa velit a ut perferendis, dignissimos veritatis libero adipisci dicta blanditiis deserunt magnam magni at autem, aperiam est. Animi tempora libero aliquam sit ea! Consectetur nihil quidem tenetur est quisquam eos nobis cum commodi impedit, dolorum odit sequi cumque distinctio natus repellat voluptatum! Quibusdam, delectus? Quae et voluptatum soluta. Voluptatum ipsa sed optio excepturi eaque aliquid assumenda quia molestiae autem soluta minus voluptate numquam quidem in, odio, facilis provident illum. In rerum, amet accusamus velit nemo reiciendis neque quidem vitae? Provident nemo dignissimos odit animi perspiciatis earum error, ipsam corporis molestias atque accusantium! Laudantium sint iure quod eligendi quas praesentium? Ipsa non eligendi sit inventore tempora quidem placeat omnis ut optio alias voluptatem error quos ipsam aliquid velit necessitatibus, explicabo ipsum accusamus sunt exercitationem. Veritatis itaque eius earum officiis ut eveniet labore. Maiores, aliquam?"
  }
]

function expand(e){
  const id = e.target.getAttribute("data-controls")
  const description = document.querySelector(`[data-desc="${id}"]`)
  description.classList.toggle("active");
}


document.querySelector(".post-container").innerHTML = renderPosts(posts)
document.querySelectorAll(".post-btn-cta").forEach(item=>item.addEventListener("click",(e)=>expand(e)))
document.querySelector(".subscribe-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    alert("subscribed")
})



document.querySelector("select").addEventListener("change",(e)=>{
  // document.querySelectorAll(".post-btn-cta").forEach(item=>item.removeEventListener("click"))
  document.querySelector(".post-container").innerHTML = renderPosts(posts.filter((post)=>post.category.toLowerCase().includes(e.target.value.toLowerCase()) || post.description.toLowerCase().includes(e.target.value.toLowerCase())))
  document.querySelectorAll(".post-btn-cta").forEach(item=>item.addEventListener("click",(e)=>expand(e)))

})