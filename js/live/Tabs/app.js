function setupTabs() {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const slideBar = button.parentElement;
            const tabsContainer = slideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            // console.log(slideBar);
            // console.log(tabsContainer);
            // console.log(tabNumber);
            // console.log(tabToActivate);
            // console.log(button);

            slideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        })
    })
}
var ee = document.querySelectorAll(".tabs__content");
document.querySelectorAll(".tabs__content").forEach(button => {
    console.log(button);
});
console.log(ee);

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
})