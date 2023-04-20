//Variables
const accordian = document.getElementsByClassName("content-container"); //many containers

for (i = 0; i < accordian.length; i++) {
  // loop throught every container
  accordian[i].addEventListener("click", function () {
    // add evnt lis for each container
    this.classList.toggle("active"); // add class if not have , remove if have class already
  });
}
// click + --> add class --> show output follow class set
