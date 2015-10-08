<script type="text/template" id="login_template">
   <div class="row">
       <div class="\36 6u$ u\24 -3u" id="input">
           <div class="field">
				<h3>Login Form</h3>
                    </div>
				<form method="post" action="#">
				<div class="field">
				<input type="text" name="login" id="login" value="" placeholder="Login">
				</div>
				<div class="field">
				<input type="password" name="password" id="password" value="" placeholder="Password">
				</div>
				<div class="field">
				<ul class="actions">
				    <li><input type="submit" value="Submit Login" class="special"></li>
				</ul>
				</div>
				</form>
				</div>
    </div>
</script>

<div id="login_container"></div>

<script type="text/javascript">
  var LoginView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render: function(){
      // Compile the template using underscore
      var template = _.template( $("#login_template").html());
      // Load the compiled HTML into the Backbone "el"
      this.$el.html( template );
    },
    events: {
      "click input[type=submit]": "doLogin"  
    },
    doLogin: function( event ){
        var loginData = new LoginData({ login: $("#login").val(),
                                    password: CryptoJS.SHA3($("#password").val())});
        loginData.save({}, {
        success: function (model, respose, options) {
        console.log("The model has been saved to the server");
        },
        error: function (model, xhr, options) {
        console.log("Something went wrong while saving the model") 
        }
        });
        
        alert(loginData.login);
  });

  var login_view = new LoginView({ el: $("#search_container") });
</script>
    
<script type="text/javascript">
var LoginData = Backbone.Model.extend({
  defaults: {
    login: '',
    password:'',
  },
  initialize: function(){
    console.log("LoginData model initialized");
  }
});
</script>
