const filterLabel = [
  {
    type: "all",
    text: "All",
  },
  {
    type: "js",
    text: "Javascript",
  },
  {
    type: "php",
    text: "PHP",
  },
  {
    type: "html&css",
    text: "HTML&CSS",
  },
];
import { viewPortfolio, filterPortfolio } from "./data";

const renderPortfolio = () => {
  viewPortfolio()
    .then((querySnapshot) => {
      $("#project").html('');
      querySnapshot.forEach((snapshot) => {
        const apa = templatePortfolio(snapshot.data());
        $("#project").prepend(apa);
        renderStackLang(snapshot.data().stack);
      });
      hover();
    })
    .catch((err) => console.log(err));
};

const filter = filterLabel.map((value) => {
  const templateAcnhor = ` <button
    class="m-2 d-block text-decoration-none orbitron link-category" data-lang="${value.type}">${value.text}</button>`;
  return templateAcnhor;
});
const hover = () => {
  $("#project .card").on("mouseenter", function (e) {
    $($(this).children()[1]).css("z-index", 3);
    $($(this).children()[1]).css("opacity", 1);
  });
  $("#project .card").on("mouseleave", function (e) {
    $($(this).children()[1]).css("z-index", -3);
    $($(this).children()[1]).css("opacity", 0);
  });
};

$(".filter").html(filter);

$(".link-category").on("click", function (e) {
  const allFilter = $(this).data("lang");
  if (allFilter === "all") {
    renderPortfolio();
  } else {
    filterPortfolio($(this).data("lang"))
      .then((querySnapshot) => {
        $("#project").html('');
        if (!querySnapshot.empty) {
          querySnapshot.forEach((snapshot) => {
            const apa = templatePortfolio(snapshot.data());
            $("#project").prepend(apa);
            renderStackLang(snapshot.data().stack);
          });
          hover();
        } else {
          $("#project").html("<h4 class='text-center amiri'>Filter yang anda cari tidak ada</h4>");
        }
      })
      .catch((err) => console.log(err));
  }
});

const renderStackLang = (langs) => {
  langs.forEach((value) => {
    const render = `<span class="amiri stack-lang">${value}</span>`;
    $($(".stack")[0]).prepend(render);
  });
};

const templatePortfolio = (data) => {
  return `
  <div class="col-sm-6 col-md-4 projects">
  <div class="card position-relative">
    <img src="${data.url_img}" alt="" />
    <div class="nav-card">
      <a href="${data.url_apps}" target="_blank" class="preview">
        <img src="./assets/view.png" alt="prev" />
        Preview
      </a>
      <a href="${data.github}" target="_blank" class="github">
        <img src="./assets/github.png" alt="github" />
        Github
      </a>
    </div>
  </div>
  <a href="${data.url_apps}" target="_blank">
    <h4 class="fw-bold">${data.title}</h4>
  </a>
  <div class="stack">
  </div>
  <p class="card-text text-justify">
  ${data.description}
  </p>
  </div>`;
};

renderPortfolio()