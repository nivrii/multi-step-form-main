const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btns = document.getElementsByClassName("btn");
const arrBtns = Array.from(btns);
const nextBtns = document.getElementsByClassName("btnf");
const arrNextBtns = Array.from(nextBtns);

const wrap = document.getElementsByClassName("wrap");
const arrWrap = Array.from(wrap);
arrWrap.forEach((element) => (element.style.display = "none"));
arrWrap[0].style.display = "block";

const back0 = document.querySelector("back0");
const back1 = document.querySelector(".back1");
const back2 = document.querySelector(".back2");
const back3 = document.querySelector(".back3");

const div1 = document.querySelector(".personal-info");
const div2 = document.querySelector(".plan");
const div3 = document.querySelector(".add-ons");
const div4 = document.querySelector(".finishing");
const div5 = document.querySelector(".thank-you");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");

const toggleMon = document.querySelector(".toggleM");
const toggleYr = document.querySelector(".toggleY");
const switch1 = document.querySelector(".mon");
const switch2 = document.querySelector(".year");

const perYear = document.getElementsByClassName("per-yr");
const perMon = document.getElementsByClassName("per-mon");
const arrPerMon = Array.from(perMon);
const arrPerYear = Array.from(perYear);

const allSelect = document.getElementsByClassName("select");
const arrAllSelect = Array.from(allSelect);

const checkBox = document.getElementsByClassName("checkbox");
const arrCheckBox = Array.from(checkBox);
const check = document.getElementsByClassName("check");
const arrCheck = Array.from(check);

const link = document.querySelector(".link");
const arcadia = document.querySelector(".arcadia");
const arcDisplay = document.querySelector(".arc-display");

const serv = document.getElementsByClassName("serv");
const arrServ = Array.from(serv);
const display = document.querySelector(".display");
const disp = document.getElementsByClassName("disp");
const arrDisp = Array.from(disp);
const dispDiv = document.getElementsByClassName("disp-div");
const arrDispDiv = Array.from(dispDiv);
const dispInfo = document.getElementsByClassName("disp-info");
const arrDispInfo = Array.from(dispInfo);
const totalInfo = document.querySelector(".total-info");

const sumTotal = document.querySelector(".total-price");

const allDivs = document.getElementsByClassName("right");
const arrAllDivs = Array.from(allDivs);
arrAllDivs[0].style.display = "inherit";
arrAllDivs[0].style.flexDirection = "column";
c1.style.backgroundColor = "hsl(206, 94%, 87%)";
c1.style.color = "hsl(213, 96%, 18%)";
c1.style.border = "1.5px solid hsl(206, 94%, 87%)";

let clickedElement = null;
let indexed = null;
let indexCheck = null;
let sum = 0;
let price = 0;

btn1.addEventListener(
  "click",
  (page1 = () => {
    let userName = document.querySelector("#name").value;
    let emailText = document.querySelector("#email").value;
    let phone = document.querySelector("#number").value;
    let email = emailText.trim();
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex =
      /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const warning = document.getElementsByClassName("warning");
    const arrWarnings = Array.from(warning);

    if (userName.length == 0) {
      arrWarnings[0].style.display = "flex";
      arrWarnings[0].textContent = "Enter Your Name";
      return false;
    } else {
      arrWarnings[0].style.display = "none";
    }
    if (!regex.test(email)) {
      arrWarnings[1].style.display = "flex";
      arrWarnings[1].textContent = "Valid Email Required";
      return false;
    } else {
      arrWarnings[1].style.display = "none";
    }
    if (!phoneRegex.test(phone)) {
      arrWarnings[2].style.display = "flex";
      arrWarnings[2].textContent = "Enter Valid Phone Number";
      return false;
    } else{
      arrWarnings[2].style.display = "none";
    }
      if(true) {
      c1.style.backgroundColor = "inherit";
      c1.style.color = "hsl(0, 0%, 100%)";
      c1.style.border = "1.5px solid hsl(0, 0%, 100%)";

      c2.style.backgroundColor = "hsl(206, 94%, 87%)";
      c2.style.color = "hsl(213, 96%, 18%)";
      c2.style.border = "1.5px solid hsl(206, 94%, 87%)";

      arrWrap.forEach((element) => (element.style.display = "none"));
      arrWrap[1].style.display = "block";
      return true;
    }
  })
);

btn2.addEventListener(
  "click",
  (page2 = () => {
    if (clickedElement != null) {
      calcPrice(indexed, toggle);
      service(toggle);
      c2.style.backgroundColor = "inherit";
      c2.style.color = "hsl(0, 0%, 100%)";
      c2.style.border = "1.5px solid hsl(0, 0%, 100%)";

      c3.style.backgroundColor = "hsl(206, 94%, 87%)";
      c3.style.color = "hsl(213, 96%, 18%)";
      c3.style.border = "1.5px solid hsl(206, 94%, 87%)";

      arrWrap.forEach((element) => (element.style.display = "none"));
      arrWrap[2].style.display = "block";
    } else {
      alert("Please Select Your Plan!");
    }
  })
);

btn3.addEventListener(
  "click",
  (page3 = () => {
    total(toggle, price);
    c3.style.backgroundColor = "inherit";
    c3.style.color = "hsl(0, 0%, 100%)";
    c3.style.border = "1.5px solid hsl(0, 0%, 100%)";

    c4.style.backgroundColor = "hsl(206, 94%, 87%)";
    c4.style.color = "hsl(213, 96%, 18%)";
    c4.style.border = "1.5px solid hsl(206, 94%, 87%)";

    arrWrap.forEach((element) => (element.style.display = "none"));
    arrWrap[3].style.display = "block";
  })
);

btn4.addEventListener(
  "click",
  (page4 = () => {
    arrWrap.forEach((element) => (element.style.display = "none"));
    arrWrap[4].style.display = "block";
  })
);

back1.addEventListener("click", function () {
  c1.style.backgroundColor = "hsl(206, 94%, 87%)";
  c1.style.color = "hsl(213, 96%, 18%)";
  c1.style.border = "1.5px solid hsl(206, 94%, 87%)";

  c2.style.backgroundColor = "inherit";
  c2.style.color = "hsl(0, 0%, 100%)";
  c2.style.border = "1.5px solid hsl(0, 0%, 100%)";

  arrWrap.forEach((element) => (element.style.display = "none"));
  arrWrap[0].style.display = "block";
});

back2.addEventListener("click", function () {
  page1();
  c3.style.backgroundColor = "inherit";
  c3.style.color = "hsl(0, 0%, 100%)";
  c3.style.border = "1.5px solid hsl(0, 0%, 100%)";

  arrWrap.forEach((element) => (element.style.display = "none"));
  arrWrap[1].style.display = "block";
});
back3.addEventListener("click", () => {
  page2();
  c4.style.backgroundColor = "inherit";
  c4.style.color = "hsl(0, 0%, 100%)";
  c4.style.border = "1.5px solid hsl(0, 0%, 100%)";

  arrWrap.forEach((element) => (element.style.display = "none"));
  arrWrap[2].style.display = "block";
  reset();
});

switch2.style.visibility = "hidden";

let toggle = 1;
const toggleMonth = () => {
  clickedElement = null;
  toggle = 1;
  switch2.style.visibility = "hidden";
  switch1.style.visibility = "visible";
  toggleMon.style.color = "hsl(213, 96%, 18%)";
  toggleYr.style.color = "hsl(231, 11%, 63%)";

  for (let i = 0; i < arrPerMon.length; i++) {
    arrPerMon[i].style.display = "inherit";
    arrPerYear[i].style.display = "none";
  }
  arrAllSelect.forEach((element) => {
    element.style.border = "1px solid hsl(229, 24%, 87%)";
    element.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  reset();
  return toggle;
};

const toggleYear = () => {
  clickedElement = null;
  toggle = 2;
  switch1.style.visibility = "hidden";
  switch2.style.visibility = "visible";
  toggleYr.style.color = "hsl(213, 96%, 18%)";
  toggleMon.style.color = "hsl(231, 11%, 63%)";

  for (let j = 0; j < arrPerYear.length; j++) {
    arrPerYear[j].style.display = "inherit";
    arrPerMon[j].style.display = "none";
  }
  arrAllSelect.forEach((element) => {
    element.style.border = "1px solid hsl(229, 24%, 87%)";
    element.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  reset();
  return toggle;
};

for (let m = 0; m < arrCheckBox.length; m++) {
  arrCheckBox[m].addEventListener("click", () => {
    if (arrCheckBox[m].checked) {
      indexCheck = m;
      addons(m, toggle);
      arrCheck[m].style.backgroundColor = "hsl(217, 100%, 97%)";
      arrCheck[m].style.border = "1px solid hsl(243, 100%, 62%)";
    } else if (!arrCheckBox[m].checked) {
      arrCheck[m].style.backgroundColor = "hsl(0, 0%, 100%)";
      arrCheck[m].style.border = "1px solid hsl(229, 24%, 87%)";
      unadd(m);
    }
    return indexCheck;
  });
}

for (let k = 0; k < arrAllSelect.length; k++) {
  arrAllSelect[k].addEventListener("click", () => {
    if (clickedElement !== null) {
      clickedElement.style.border = "1px solid hsl(229, 24%, 87%)";
      clickedElement.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
    if (arrAllSelect[k] !== clickedElement) {
      arrAllSelect[k].style.border = "1.7px solid hsl(213, 96%, 18%)";
      arrAllSelect[k].style.backgroundColor = "hsl(231, 100%, 99%)";
      clickedElement = arrAllSelect[k];
      indexed = k;
    } else {
      arrAllSelect[k].style.border = "1px solid hsl(229, 24%, 87%)";
      arrAllSelect[k].style.backgroundColor = "hsl(0, 0%, 100%)";
      clickedElement = null;
    }
    return indexed;
  });

  arrAllSelect[k].addEventListener("mouseover", () => {
    if (arrAllSelect[k] !== clickedElement) {
      arrAllSelect[k].style.border = "1.7px solid hsl(213, 96%, 18%)";
    }
  });

  arrAllSelect[k].addEventListener("mouseout", () => {
    if (arrAllSelect[k] !== clickedElement) {
      arrAllSelect[k].style.border = "1px solid hsl(229, 24%, 87%)";
    }
  });
}

link.addEventListener("click", () => {
  page1();
  c4.style.backgroundColor = "inherit";
  c4.style.color = "hsl(0, 0%, 100%)";
  c4.style.border = "1.5px solid hsl(0, 0%, 100%)";
  reset();
});

const calcPrice = (index, tog) => {
  if (tog == 1) {
    arcadia.textContent = "Arcade(Monthly)";
    switch (index) {
      case 0:
        price = 9;
        break;
      case 1:
        price = 12;
        break;
      case 2:
        price = 15;
        break;
    }
    arcDisplay.textContent = "$" + price + "/mo";
  } else if (tog == 2) {
    arcadia.textContent = "Arcade(Yearly)";
    switch (index) {
      case 0:
        price = 90;
        break;
      case 1:
        price = 120;
        break;
      case 2:
        price = 150;
        break;
    }
    arcDisplay.textContent = "$" + price + "/yr";
  }
  return price;
};

const service = (tog) => {
  if (tog == 1) {
    arrServ[0].textContent = "+$1/mo";
    arrServ[1].textContent = "+$2/mo";
    arrServ[2].textContent = "+$2/mo";
  } else if (tog == 2) {
    arrServ[0].textContent = "+$10/yr";
    arrServ[1].textContent = "+$20/yr";
    arrServ[2].textContent = "+$20/yr";
  }
};

const addons = (index, tog) => {
  if (tog == 1) {
    totalInfo.textContent = "Total (Per Month)";
    switch (index) {
      case 0:
        arrDispDiv[index].style.display = "inherit";
        arrDispDiv[index].style.justifyContent = "space-between";
        arrDispInfo[index].textContent = "Online Service";
        arrDisp[index].textContent = "+$1/mo";
        break;
      case 1:
        arrDispDiv[index].style.display = "inherit";
        arrDispDiv[index].style.justifyContent = "space-between";
        arrDispInfo[index].textContent = "Larger Storage";
        arrDisp[index].textContent = "+$2/mo";
        break;
      case 2:
        arrDispDiv[index].style.display = "inherit";
        arrDispDiv[index].style.justifyContent = "space-between";
        arrDispInfo[index].textContent = "Customizable profile";
        arrDisp[index].textContent = "+$2/mo";
        break;
    }
  } else if (tog == 2) {
    totalInfo.textContent = "Total (Per Year)";
    switch (index) {
      case 0:
        arrDispDiv[index].style.display = "inherit";
        arrDispDiv[index].style.justifyContent = "space-between";
        arrDispInfo[index].textContent = "Online Service";
        arrDisp[index].textContent = "+$10/yr";
        break;
      case 1:
        arrDispDiv[index].style.display = "inherit";
        arrDispDiv[index].style.justifyContent = "space-between";
        arrDispInfo[index].textContent = "Larger Storage";
        arrDisp[index].textContent = "+$20/yr";
        break;
      case 2:
        arrDispDiv[index].style.display = "inherit";
        arrDispDiv[index].style.justifyContent = "space-between";
        arrDispInfo[index].textContent = "Customizable profile";
        arrDisp[index].textContent = "+$20/yr";
        break;
    }
  }
};
const unadd = (index) => {
  arrDispDiv[index].style.display = "none";
  arrCheckBox[index].checked = false;
  arrCheck[index].style.backgroundColor = "hsl(0, 0%, 100%)";
  arrCheck[index].style.border = "1px solid hsl(229, 24%, 87%)";
};

const reset = () => {
  arrCheckBox.forEach((element) => {
    element.checked = false;
  });
  arrDispDiv.forEach((element) => {
    element.style.display = "none";
  });
  arrCheck.forEach((element) => {
    element.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  arrCheck.forEach((element) => {
    element.style.border = "1px solid hsl(229, 24%, 87%)";
  });
  sum = 0;
};

const total = (tog, price) => {
  if (tog == 1) {
    sum += price;
    if (arrCheckBox[0].checked) {
      sum += 1;
    }
    if (arrCheckBox[1].checked) {
      sum += 2;
    }
    if (arrCheckBox[2].checked) {
      sum += 2;
    }
    sumTotal.textContent = "+$" + sum + "/mo";
  } else if (tog == 2) {
    sum += price;
    if (arrCheckBox[0].checked) {
      sum += 10;
    }
    if (arrCheckBox[1].checked) {
      sum += 20;
    }
    if (arrCheckBox[2].checked) {
      sum += 20;
    }
    sumTotal.textContent = "+$" + sum + "/yr";
  }
  return sum;
};
