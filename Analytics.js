var Analytics = {

  controller: window.parent.DG,

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
        name: 'Users',
        attrs: [{ name: 'uname' }],
        childAttrName: "Logs",
        log: false
      }
    });

    this_.controller.doCommand( {
      action: 'createCollection',
      args: {
        name: 'Logs',
        attrs: [
          { name: 'event', colormap: { "Started Session": 'green', "Logged In": 'yellow', "Changed Mass": 'red'} }, 
          { name: 'time'}
        ],
        log: false
      }
    });

    result = this_.controller.doCommand( {
      action: 'createCases',
      args: {
        collection: "Users",
        values: [
                  ["User 1"],
                  ["User 2"],
                  ["User 3"]
                ]
      }
    });
    console.log(result["caseIDs"]);
    for (var i=0; i<result["caseIDs"].length; i++){
      this_.controller.doCommand( {
        action: 'createCases',
        args: {
          collection: "Logs",
          parent: result["caseIDs"][i],
          values: [
                    ["Started Session", 2],
                    ["Logged In", 4],
                    ["Changed Mass", 6]
                  ]
        }
      });
    }
  }
};
