AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" } //we will be assigning a blank variable for keeping track of the poster that we hovered over because the same one will be changed when we do mosueleave on that
    },
    init: function () {
      //calling both events initally
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handlePosterListState: function () {
      const id = this.el.getAttribute("id"); //getting id of the poster we have hovered over
      const posterId = ["assassination-classroom", "demon-slayer", "jojo", "the-promised-neverland"];
      //comparing if the ids belong to any of them
      if (posterId.includes(id)) {
        const posterContainer = document.querySelector("#posters-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 0.4,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePosterListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data;
        if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if(id == selectedItemId){
            el.setAttribute("material", {
              color: "#fff",
              opacity: 0.4
            });
          }
        }
      });
    },
  });  