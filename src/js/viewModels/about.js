/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(['accUtils', 
        'ojs/ojhtmlutils', 
        'ojs/ojlabel', 
        'ojs/ojselectsingle', 
        'ojs/ojchart', 
        'ojs/ojbinddom', 
        'my-dropdown-with-chart/loader', 
        // 'jet-composites/demo-card/loader'
      ],
 function(accUtils, HtmlUtils) {
    function AboutViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      // Color for p tag
      this.color = 'purple';
      this.customId = 'purple';

      // HTML elements
      this.config = {
        view: HtmlUtils.stringToNodeArray("<h1>Content from config object</h1>"),
        data: {}
      };

      // Class binding
      this.pinkBox = 'pinkBox';

      // Flip card data
      this.employees = [
        {
            name: "Deb Raphaely",
            avatar: "../images/composites/debraphaely.png",
            title: "Purchasing Director",
            work: 5171278899,
            email: "deb.raphaely@oracle.com",
        },
        {
            name: "Adam Fripp",
            avatar: null,
            title: "IT Manager",
            work: 6501232234,
            email: "adam.fripp@oracle.com",
        },
      ];

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Information page loaded.', 'assertive');
        document.title = "Information";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return AboutViewModel;
  }
);
