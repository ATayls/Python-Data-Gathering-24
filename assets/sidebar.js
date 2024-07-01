document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  const baseurl = document.querySelector('meta[name="baseurl"]').getAttribute('content');
  const currentPage = window.location.pathname.replace(baseurl, '');
  const lessonPages = [
      `${baseurl}/lessons/lesson1/`, `${baseurl}/lessons/lesson2/`, `${baseurl}/lessons/lesson2/`, `${baseurl}/lessons/lesson3/`,
      `${baseurl}/lessons/lesson4/`, `${baseurl}/lessons/lesson5/`, `${baseurl}/lessons/lesson6/`, `${baseurl}/lessons/lesson7/`,
      `${baseurl}/lessons/lesson8/`, `${baseurl}/lessons/lesson9/`, `${baseurl}/lessons/lesson10/`
  ];
  if (!lessonPages.includes(currentPage)) return;

  const content = document.querySelector(".content");
  if (!content) return;

  const sections = content.querySelectorAll("h2");
  if (sections.length === 0) return;

  const lessonList = sidebar.querySelector("ul");

  let lessonLink;
  lessonList.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      lessonLink = link;
    }
  });

  if (!lessonLink) return;

  let lastInsertedLink = lessonLink.parentNode;

  sections.forEach(section => {
    const sectionId = section.id;
    const sectionTitle = section.innerText;
    const sectionLink = document.createElement("li");
    sectionLink.innerHTML = `<a href="#${sectionId}" class="section-link">${sectionTitle}</a>`;
    lastInsertedLink.insertAdjacentElement('afterend', sectionLink);
    lastInsertedLink = sectionLink;
  });
});
