let allTabsListItem = document.querySelectorAll(".tabs-list-item");
let allTabsListItemCon = document.querySelectorAll(".tabs-container");

allTabsListItem.forEach(button => {
    button.addEventListener("click", function() {
        let tabsListItemPar = button.parentNode;
        let tabsListItemMainPar = tabsListItemPar.parentNode;
        let tabsListItemFor = button.dataset.tabs;
        let tabsListItemForCon = document.querySelector(`[data-tabs-con="${tabsListItemFor}"]`);

        // allTabsListItem.forEach((num, i) => {
        //     // this.classList.remove("active");
        //     let allTabsListItemactiemove = allTabsListItem[i];
        //     allTabsListItemactiemove.classList.remove("active");
        // });

        allTabsListItem.forEach((num) => {
            num.classList.remove("active");
        });

        allTabsListItemCon.forEach((num) => {
            num.classList.remove("active");
        });

        button.classList.add("active");
        tabsListItemForCon.classList.add("active");



        // console.log(button);
        // console.log(tabsListItemPar);
        // console.log(tabsListItemMainPar);
        // console.log(tabsListItemFor);
        // console.log(tabsListItemForCon);
    });
})