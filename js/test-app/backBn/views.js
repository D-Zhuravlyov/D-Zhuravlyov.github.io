
var TextFieldView = Backbone.View.extend({
    initialize: function () {
        this.render();
        console.log("initialized TextFieldView");

    }
    ,
    render: function () {
        var template = _.template($("#message_template").html());
        this.$el.html(template);
        console.log("rendered TextFieldView");
    }
    ,
    events: {
        "click input[type=submit]": "writeText"
    }
    ,
    writeText: function (event, client){
        var fileName = $("#fileName").val();
        var message = $("#message").val();
        client.writeFile(fileName.append(".txt"), message.append("\n"), function(error, stat) {
            if (error) {
                return showError(error);  // Something went wrong.
            }
            alert("File saved as revision " + stat.versionTag);
        });
    }
});


var LoginView = Backbone.View.extend({
    initialize: function () {
        console.log("initializing LoginView");
        this.render();
    },
    render: function () {
        var template = _.template($("#login_template").html());
        this.$el.html(template);
        console.log("rendered LoginView");
    },
    events: {
        "click input[type=submit]": "doLogin"
    },
    doLogin: function (event) {
        var client = new Dropbox.Client({key: "biv0y19f0lw8d3o"});
        client.authenticate({interactive: false}, function (error, client) {
            if (error) {
                return handleError(error);
            }
            if (client.isAuthenticated()) {
                var textFieldView = new TextFieldView({el: $("#message_container")});
                textFieldView.initialize();
                console.log("Client is already Authenticated");
                // Cached credentials are available, make Dropbox API calls.
            } else {
                console.log("Authenticating Client");
                client.authenticate(function (error, client) {
                    if (error) {
                        return handleError(error);
                    }


                });
            }
        });

    }
});
var login_view = new LoginView({el: $("#login_container")});