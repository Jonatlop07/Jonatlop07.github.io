var details = document.querySelector(".details").children;

const showDetails = (projectNumber) => {
   for (let i = 0; i < details.length; i++) {
      if (i === projectNumber) {
         details[i].style.display = "block";
         if (!!details[i] && details[i].scrollIntoView) {
            details[i].scrollIntoView();
         }
      } else {
         details[i].style.display = "none";
      }
   }
};
