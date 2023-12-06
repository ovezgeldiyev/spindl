// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
  scrollFunc();
};

const discoverBtn = document.getElementById("discoverBtn");
const discover = document.getElementById("discover");
const infoBtn = document.getElementById("infoBtn");
const info = document.getElementById("info");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const closeBtns = document.querySelectorAll(".dropClose");
closeBtns.forEach((closeBtn) => {
  closeBtn.onclick = () => {
    if (discover.classList.contains("active")) {
      discover.classList.remove("active");
    }
    if (info.classList.contains("active")) {
      info.classList.remove("active");
    }
    if (search.classList.contains("active")) {
      search.classList.remove("active");
    }
  };
});
if (discoverBtn) {
  discoverBtn.onclick = () => {
    discoverBtn.classList.toggle("active");
    discover.classList.toggle("active");
    infoBtn.classList.remove("active");
    info.classList.remove("active");
    searchBtn.classList.remove("active");
    search.classList.remove("active");

    if (!header.classList.contains("active")) {
      header.classList.add("active");
    } else {
      if (
        !discover.classList.contains("active") &&
        !info.classList.contains("active") &&
        !search.classList.contains("active")
      ) {
        header.classList.remove("active");
      }
    }
  };
}
if (infoBtn) {
  infoBtn.onclick = () => {
    infoBtn.classList.toggle("active");
    info.classList.toggle("active");

    searchBtn.classList.remove("active");
    search.classList.remove("active");
    discoverBtn.classList.remove("active");
    discover.classList.remove("active");

    if (!header.classList.contains("active")) {
      header.classList.add("active");
    } else {
      if (
        !discover.classList.contains("active") &&
        !info.classList.contains("active") &&
        !search.classList.contains("active")
      ) {
        header.classList.remove("active");
      }
    }
  };
}
if (searchBtn) {
  searchBtn.onclick = () => {
    searchBtn.classList.toggle("active");
    search.classList.toggle("active");
    infoBtn.classList.remove("active");
    info.classList.remove("active");
    discoverBtn.classList.remove("active");
    discover.classList.remove("active");

    if (!header.classList.contains("active")) {
      header.classList.add("active");
    } else {
      if (
        !discover.classList.contains("active") &&
        !info.classList.contains("active") &&
        !search.classList.contains("active")
      ) {
        header.classList.remove("active");
      }
    }
  };
}

// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      // tabBtns.forEach(function (item) {
      //   item.classList.remove("active");
      // });

      // tabItems.forEach(function (item) {
      //   item.classList.remove("active");
      // });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// slider start
var $status = $(".pagingInfo");
$(".reference__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
  });
});
var $status = $(".pagingInfo");
$(".offer__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
var $status = $(".pagingInfo");
$(".event__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// slider end
// lang start
const lang = document.getElementById("lang");
const selectFunc = () => {
  const selected = lang.querySelector(".lang__btn");
  const selectOptions = lang.querySelector(".lang__dropdown");
  const listItems = selectOptions.querySelectorAll("li");
  const input = lang.querySelector("input[type='hidden']");

  selected.onclick = () => {
    lang.classList.toggle("active");
    eventHandler();
  };
  listItems.forEach((listItem) => {
    listItem.onclick = () => {
      selected.innerHTML = listItem.innerHTML;
      lang.classList.remove("active");
      input.value = listItem.getAttribute("data-value");
      eventHandler();
    };
  });
  const eventHandler = () => {
    window.addEventListener("click", (e) => {
      if (!lang.contains(e.target)) {
        lang.classList.remove("active");
      }
    });
  };
};

if (lang) {
  selectFunc();
}
// lang end

// showMore start
const showMoreBtns = document.querySelectorAll(".showMoreBtn");
showMoreBtns.forEach((showMoreBtn) => {
  showMoreBtn.onclick = () => {
    const parentElement = showMoreBtn.parentNode.parentNode.parentNode;
    const showMore = parentElement.querySelector(".showMore");
    showMore.classList.toggle("active");
    showMoreBtn.classList.toggle("active");
  };
});
// showMore end

// video start
const playBtn = document.getElementById("playBtn");
if (playBtn) {
  const banner = document.getElementById("videoWrapper");
  const video = document.getElementById("video");

  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  };
}
// video end

const distance = document.getElementById("distance");
if (distance) {
  const dst = document.querySelector(".dst");
  const distanceItems = dst.querySelectorAll(".distance__item");
  distanceItems.forEach((distanceItem) => {
    const input = distanceItem.querySelector("input");
    input.onchange = (e) => {
      for (let i = 0; i < distanceItems.length; i++) {
        let item = distanceItems[i];
        if (i <= parseInt(input.value)) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    };
  });

  const dif = document.querySelector(".dif");
  const difItems = dif.querySelectorAll(".distance__item");
  difItems.forEach((difItem) => {
    const input = difItem.querySelector("input");
    input.onchange = (e) => {
      for (let i = 0; i < difItems.length; i++) {
        let item = difItems[i];
        if (i <= parseInt(input.value)) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    };
  });
}

const filterBtn = document.getElementById("filterBtn");
if (filterBtn) {
  const filterArea = document.getElementById("filterArea");
  const filterWrapper = document.getElementById("filterWrapper");

  window.addEventListener("scroll", function (e) {
    if (
      window.scrollY >
      filterWrapper.offsetTop + filterArea.offsetHeight + 300
    ) {
      filterBtn.classList.add("active");
    } else {
      filterBtn.classList.remove("active");
    }
  });
}

const message = document.getElementById("message");
const footer = document.getElementById("footer");

if (message) {
  window.addEventListener("scroll", function (e) {
    if (window.scrollY + window.innerHeight > footer.offsetTop + 80) {
      message.classList.add("active");
    } else {
      message.classList.remove("active");
    }
  });
}
