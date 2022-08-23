let readContainer = document.querySelector(".container");

let getRequest = new XMLHttpRequest();
getRequest.open("GET", "./data.json");
getRequest.send();
getRequest.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    console.log("Data Loaded");
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      let createDivBox = document.createElement("div");
      createDivBox.className = "box";
      readContainer.append(createDivBox);

      let createDivPhoto = document.createElement("div");
      createDivPhoto.className = "photo";
      createDivBox.append(createDivPhoto);

      let createImagePersonal = document.createElement("img");
      createImagePersonal.className = "personal";
      createImagePersonal.src = mainData[i].logo;
      createDivPhoto.append(createImagePersonal);

      let createDivCenter = document.createElement("div");
      createDivCenter.className = "center";
      createDivPhoto.append(createDivCenter);

      let createDivInfo = document.createElement("div");
      createDivInfo.className = "info";
      createDivCenter.append(createDivInfo);

      let createDivCompany = document.createElement("div");
      createDivCompany.className = "company";
      createDivInfo.append(createDivCompany);

      let createDivCompanyH3 = document.createElement("h3");
      createDivCompanyH3.textContent = mainData[i].company;
      createDivCompany.append(createDivCompanyH3);
      if (mainData[i].new === true) {
        let createDivCompanySpanNew = document.createElement("span");
        createDivCompanySpanNew.className = "new";
        createDivCompanySpanNew.textContent = "NEW!";
        createDivCompany.append(createDivCompanySpanNew);
      }

      if (mainData[i].featured === true) {
        createDivBox.classList.add("top");
        let createDivCompanySpanfeatured = document.createElement("span");
        createDivCompanySpanfeatured.className = "featured";
        createDivCompanySpanfeatured.textContent = "FEATURED";
        createDivCompany.append(createDivCompanySpanfeatured);
      }

      let createDivposition = document.createElement("div");
      createDivposition.className = "position";
      createDivInfo.append(createDivposition);

      let createDivPositionH3 = document.createElement("h3");
      createDivPositionH3.textContent = mainData[i].position;
      createDivposition.append(createDivPositionH3);

      let createDivDay = document.createElement("div");
      createDivDay.className = "day";
      createDivInfo.append(createDivDay);

      if (mainData[i].postedAt) {
        let createDivDaySpan = document.createElement("span");
        createDivDaySpan.textContent = `${mainData[i].postedAt}`;
        createDivDay.append(createDivDaySpan);
        let createDivDaySpanDot = document.createElement("span");
        createDivDaySpanDot.textContent = `.`;
        createDivDay.append(createDivDaySpanDot);
      }

      if (mainData[i].contract) {
        let createDivDaySpanTwo = document.createElement("span");
        createDivDaySpanTwo.textContent = ` ${mainData[i].contract}`;
        createDivDay.append(createDivDaySpanTwo);
        let createDivDaySpanDot = document.createElement("span");
        createDivDaySpanDot.textContent = `.`;
        createDivDay.append(createDivDaySpanDot);
      }

      if (mainData[i].location) {
        let createDivDaySpanThree = document.createElement("span");
        createDivDaySpanThree.textContent = `${mainData[i].location}`;
        createDivDay.append(createDivDaySpanThree);
      }

      let createDivSkills = document.createElement("div");
      createDivSkills.className = "skills";
      createDivCenter.append(createDivSkills);

      if (mainData[i].role) {
        let createDivSkillsDivRole = document.createElement("div");
        createDivSkillsDivRole.textContent = mainData[i].role;
        createDivSkillsDivRole.className = `${mainData[i].role}`;

        createDivSkills.append(createDivSkillsDivRole);
      }
      if (mainData[i].level) {
        let createDivSkillsDivLevel = document.createElement("div");
        createDivSkillsDivLevel.textContent = mainData[i].level;
        createDivSkillsDivLevel.className = `${mainData[i].level}`;
        createDivSkills.append(createDivSkillsDivLevel);
      }

      for (let j = 0; j < mainData[i].languages.length; j++) {
        if (mainData[i].languages) {
          let createDivSkillsDiv = document.createElement("div");
          if (mainData[i].languages[j]) {
            createDivSkillsDiv.textContent = mainData[i].languages[j];
            createDivSkillsDiv.className = `${mainData[i].languages[j]}`;
            createDivSkills.append(createDivSkillsDiv);
          }
        }
      }

      for (let j = 0; j < mainData[i].tools.length; j++) {
        if (mainData[i].tools) {
          let createDivSkillsDivTools = document.createElement("div");
          if (mainData[i].tools[j]) {
            createDivSkillsDivTools.textContent = mainData[i].tools[j];
            createDivSkillsDivTools.className = `${mainData[i].tools[j]}`;
            createDivSkills.append(createDivSkillsDivTools);
          }
        }
      }
    }
  }
  let classClick = document.querySelector(".click");
  let divskills = document.querySelectorAll(".skills div");
  let appear = document.querySelector(".space");
  let check = document.querySelector(".click");
  let clearAll = document.querySelector(".clear");

  divskills.forEach((element) => {
    element.addEventListener("click", function (e) {
      let ownDiv = e.currentTarget;

      let createFilterDiv = document.createElement("div");
      createFilterDiv.className = "filter";
      classClick.append(createFilterDiv);
      let createFilterDivAdd = document.createElement("div");
      createFilterDivAdd.textContent = ownDiv.textContent;
      createFilterDivAdd.setAttribute("data-cont", `.${ownDiv.textContent}`);
      createFilterDiv.append(createFilterDivAdd);

      let createDivFilterAdd = document.createElement("span");
      createDivFilterAdd.textContent = "X";
      createFilterDiv.append(createDivFilterAdd);
      appear.style.display = "flex";

      let listOfFilter = [];
      let boxes = document.querySelectorAll(".box");
      let boxesFilter = document.querySelectorAll(".filter");

      listOfFilter.push(boxesFilter);
      boxesFilter.forEach((ele) => {
        boxes.forEach((ele) => {
          ele.style.display = "none";
        });

        let nowFilter = [];
        nowFilter.push(ele.children[0].dataset.cont);
        console.log(nowFilter);
        document
          .querySelectorAll(ele.children[0].dataset.cont)
          .forEach((el) => {
            el.parentElement.parentElement.parentElement.parentElement.style.display =
              "block";
          });
      });

      clearAll.addEventListener("click", function () {
        createFilterDiv.parentElement.parentElement.style.display = "none";
        boxes.forEach((ele) => {
          ele.style.display = "block";
        });
        createFilterDiv.remove();
      });

      createDivFilterAdd.addEventListener("click", function (e) {
        if (check.children.length === 1) {
          createFilterDiv.parentElement.parentElement.style.display = "none";
          boxes.forEach((ele) => {
            ele.style.display = "block";
          });
        }
        createFilterDiv.remove();
      });
    });
  });
};
