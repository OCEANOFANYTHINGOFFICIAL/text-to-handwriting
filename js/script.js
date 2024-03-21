// Theme Change Functionality
function toggleTheme(toggleButton) {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("fade-in-light");
    document.body.classList.remove("dark");
    document.body.classList.remove("fade-in-dark");
    window.localStorage.setItem("prefers-theme", "light");
    if (toggleButton) {
      toggleButton.setAttribute("aria-pressed", false);
      toggleButton.setAttribute("aria-label", "Activate Dark Mode");
    }
  } else {
    document.body.classList.add("fade-in-dark");
    document.body.classList.add("dark");
    document.body.classList.remove("fade-in-light");
    window.localStorage.setItem("prefers-theme", "dark");
    if (toggleButton) {
      toggleButton.setAttribute("aria-pressed", true);
      toggleButton.setAttribute("aria-label", "Activate Light Mode");
    }
  }
}

const localPreference = window.localStorage.getItem("prefers-theme");
if (localPreference) {
  if (localPreference === "light") document.body.classList.remove("dark");
  else document.body.classList.add("dark");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}

// upload Custom Font Functionality
const fontFile = document.getElementById("font-file");
fontFile.addEventListener("change", function () {
  var fileName = this.files[0].name;
  var maxLength = 20; // Maximum length of the displayed filename
  if (fileName.length > maxLength) {
    var truncatedFileName =
      fileName.substring(0, maxLength - 3) +
      "..." +
      fileName.substring(fileName.length - 10);
    document.getElementById("font-file-name-span").textContent =
      truncatedFileName;
  } else {
    document.getElementById("font-file-name-span").textContent = fileName;
  }
});

// Upload Custom Paper Background Functionality
document.getElementById("paper-file").addEventListener("change", function () {
  var fileName = this.files[0].name;
  var maxLength = 20; // Maximum length of the displayed filename
  if (fileName.length > maxLength) {
    var truncatedFileName =
      fileName.substring(0, maxLength - 3) +
      "..." +
      fileName.substring(fileName.length - 10);
    document.getElementById("paper-file-name-span").textContent =
      truncatedFileName;
  } else {
    document.getElementById("paper-file-name-span").textContent = fileName;
  }
});

// Get the reference to the head element
const head = document.head || document.getElementsByTagName("head")[0];

// Array of font file names
const fontFiles = [
  "Hindi_Type.ttf",
  "QEAntonyLark.ttf",
  "QEBEV.ttf",
  "QEBradenHill.ttf",
  "QECarolineMutiboko.ttf",
  "QECursiveVersion.ttf",
  "QEDSFont.ttf",
  "QEDaveMergens.ttf",
  "QEDavidReid.ttf",
  "QEDavidReidCAP.ttf",
  "QEDonaldRoss.ttf",
  "QEGHHughes.ttf",
  "QEGarrettWMoretz.ttf",
  "QEHerbertCooper.ttf",
  "QEJER.ttf",
  "QEJeffDungan.ttf",
  "QEJohnCaplin.ttf",
  "QEJohnWilliams.ttf",
  "QEJulianDean.ttf",
  "QEKevinKnowles.ttf",
  "QEKevinShirley.ttf",
  "QEKunjarScript.ttf",
  "QEMamasAndPapas.ttf",
  "QEPamRosenberry.ttf",
  "QEPhilipBean.ttf",
  "QEPhillips.ttf",
  "QEPrintVersion.ttf",
  "QERoystonSuch.ttf",
  "QERoystonSuchCAP.ttf",
  "QERufus.ttf",
  "QERuthStafford.ttf",
  "QESamRoberts.ttf",
  "QESamRoberts2.ttf",
  "QEScottWilliams.ttf",
  "QETonyFlores.ttf",
  "QEVRead.ttf",
  "QEVickyCaulfield.ttf",
  "QEgeeKzoid.ttf",
];

// Loop through the font files array
fontFiles.forEach((fontFile) => {
  // Create a style element
  const style = document.createElement("style");
  // Set the font-face CSS rule
  style.appendChild(
    document.createTextNode(`
        @font-face {
            font-family: ${fontFile.replace(/\.[^/.]+$/, "")};
            src: url(fonts/${fontFile});
        }
    `)
  );
  // Append the style element to the head
  head.appendChild(style);
});

// Custom color functionality
const inkColorSelect = document.getElementById("ink-color");
function isValidColor(input) {
  // Check if input is null (user clicked Cancel)
  if (input === null) {
    return false;
  }

  // Trim leading and trailing whitespace
  input = input.trim();

  // Check if input is empty after trimming whitespace
  if (!input) {
    alert("Please enter a valid color name or hex code.");
    return false;
  }

  if (/^[a-zA-Z]+$/.test(input)) {
    const div = document.createElement("div");
    div.style.color = input;
    if (div.style.color !== "") {
      return true;
    } else {
      alert("Invalid color name. Please enter a valid color name or hex code.");
      return false;
    }
  }

  // Check if input is a valid hex code
  if (/^#[0-9A-F]{6}$/i.test(input)) {
    return true;
  }

  // If input is neither a valid color name nor a valid hex code, show error message
  alert("Invalid color format. Please enter a valid color name or hex code.");
  return false;
}

inkColorSelect.addEventListener("change", (e) => {
  if (e.target.value === "custom") {
    const customColor = prompt("Enter Custom Color Name or HEX Code:");

    if (isValidColor(customColor)) {
      inkColorSelect.innerHTML += `<option value="${customColor}">${customColor}</option>`;
      inkColorSelect.value = customColor;
    } else {
      inkColorSelect.value = "black";
    }
  }
});

// whenever the user will upload a picture, show the remove image button
document.getElementById("paper-file").addEventListener("change", function () {
  document.getElementById("remove-paper-bg-button").style.display = "block";
});

// whenever the user will click on remove image button, remove the image
const pageTextAreaPath = document.querySelector(
  "#generate-image-form > div > div.flex-1.page-container-super > div.flex-1.page-container > div"
);
document
  .getElementById("remove-paper-bg-button")
  .addEventListener("click", function () {
    pageTextAreaPath.style.backgroundImage = "none";
    document.getElementById("paper-file-name-span").innerText =
      "Select Paper Image";
    document.getElementById("paper-file").value = "";
    this.style.display = "none";
  });

// Paper Themes Functionality

const paperThemes = document.querySelectorAll(".paper-themes-gallery .card");
paperThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    const img = theme.querySelector("img");
    const src = img.src;
    pageTextAreaPath.style.backgroundImage = `url(${src})`;
  });
});
// show the remove image button when the user will click on any paper theme
paperThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    document.getElementById("remove-paper-bg-button").style.display = "block";
  });
});

// Margin Color & Size Change Functionality
document.getElementById("margin-color").addEventListener("change", function () {
  document
    .querySelector(".page-a")
    .style.setProperty("--margin-color", this.value);
});
document
  .getElementById("top-margin-size")
  .addEventListener("input", function () {
    document
      .querySelector(".page-a")
      .style.setProperty("--page-margin-top-size", this.value + "px");
  });
document
  .getElementById("left-margin-size")
  .addEventListener("input", function () {
    document
      .querySelector(".page-a")
      .style.setProperty("--page-margin-left-size", this.value + "px");
  });


