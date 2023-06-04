import Vue from "vue";
import Sortable from "sortablejs";

Vue.directive("blur", {
  inserted: function (el) {
    el.onfocus = (ev) => ev.target.blur();
  },
});

Vue.directive("sortable-table", {
  inserted: (el, binding) => {
    el.querySelectorAll("th").forEach((draggableEl) => {
      // Need a class watcher because sorting v-data-table rows asc/desc removes the sortHandle class
      watchClass(draggableEl, "sortHandle");
      draggableEl.classList.add("sortHandle");
    });
    Sortable.create(
      el.querySelector("tr"),
      binding.value ? { ...binding.value, handle: ".sortHandle" } : {}
    );
  },
  update: (el, binding) => {
    el.querySelectorAll("th").forEach((draggableEl) => {
      // Need a class watcher because sorting v-data-table rows asc/desc removes the sortHandle class
      watchClass(draggableEl, "sortHandle");
      draggableEl.classList.add("sortHandle");
    });
    Sortable.create(
      el.querySelector("tr"),
      binding.value ? { ...binding.value, handle: ".sortHandle" } : {}
    );
  },
});

function watchClass(targetNode, classToWatch) {
  let lastClassState = targetNode.classList.contains(classToWatch);
  const observer = new MutationObserver((mutationsList) => {
    for (let i = 0; i < mutationsList.length; i++) {
      const mutation = mutationsList[i];
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const currentClassState =
          mutation.target.classList.contains(classToWatch);
        if (lastClassState !== currentClassState) {
          lastClassState = currentClassState;
          if (!currentClassState) {
            mutation.target.classList.add("sortHandle");
          }
        }
      }
    }
  });
  observer.observe(targetNode, { attributes: true });
}
