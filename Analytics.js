var Analytics = {

  controller: window.parent.DG.currGameController,

  analyze: function() {
    console.log("I am inside analyze function.");
    var this_ = this;
    this_.doAnalysis();
  },

  doAnalysis: function() {
    var this_ = this;
    console.log("I am inside do Analytics Function");

    this_.controller.doCommand( {
      action: 'initGame',
      args: {
        name: "DataInteractive",
        dimensions: { width: 450, height: 200 },
      }
    });

    this_.controller.doCommand( {
      action: 'createCollection',
      args: {
        name: 'Logs',
        attrs: [{ name: 'cases' }, { name: 'Values'}],
        log: false
      }
    });
    this_.controller.doCommand( {
      action: 'createCases',
      args: {
        collection: "Logs",
        values: [
                  [ "Case 1", 2],
                  [ "Case 2", 4],
                  [ "Case 3", 6]
                ]
      }
    });
  }

};
