function StageAssistant() {
	/* this is the creator function for your stage assistant object */
}

StageAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the stage is first created */
	
  var MenuAttr = {omitDefaultItems: true};
  var MenuModel = {
    visible: true,
    items: [
      {label: "About Dominionator...", command: 'do-about'},
      {label: "Preferences", command: 'do-prefs'}
    ]
  };
	
	/* for a simple application, the stage assistant's only task is to push the scene, making it
	   visible */
	this.controller.pushScene("first");

	//this.controller.setupWidget(Mojo.Menu.appMenu, MenuAttr, MenuModel);
};


StageAssistant.prototype.handleCommand = function(event) {
  var currentScene = this.controller.activeScene();
  if(event.type == Mojo.Event.command) {
    switch(event.command) {
      case 'do-about':
        currentScene.showAlertDialog({
          onChoose: function(value) {},
          title: "Dominionator v 0.0.2",
          message: "Copyright &copy; 2011 by Jeff",
          choices:[
           {label: "OK", value:""}
                  ]
            });
		  break;
		case 'do-prefs':
			this.controller.pushScene("Prefs");
			break;
    }
  }
};