document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  const currentPage = window.location.pathname;
  const lessonPages = ["/lessons/lesson1/", "/lessons/lesson2/"];
  if (!lessonPages.includes(currentPage)) return;

  const content = document.querySelector(".content");
  if (!content) return;

  const sections = content.querySelectorAll("h2, h3, h4, h5, h6");
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
