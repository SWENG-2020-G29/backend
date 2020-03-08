Vue.component('NotFound', {
  template: `
    <div>
      <h1>Not Found</h1>
      <p class="lead">Couldn't find that page, sorry.</p>
      <code>¯\\_(ツ)_/¯</code>
    </div>
  `
});

Vue.component('HomeView', {
  template: `
    <div>
      <h1>Home</h1>
      <p class="lead">Hello, world!</p>
    </div>
  `
});

Vue.component('Dashboard', {
  template: `
    <div>
    <div class="sidenav">
      <i class="fa fa-home fa-lg"> <a href="#"> Dashboard </a></i>
      <i class="fa fa-terminal fa-lg"> <a href="#"> Console </a></i>
      <i class="fa fa-cog fa-lg"> <a href="#"> Configs </a></i>
      <i class="fa fa-globe fa-lg"> <a href="#"> Domains </a></i>
      <i class="fa fa-plug fa-lg"> <a href="#"> Ports </a></i>
    </div>
    </div>
  `
});

Vue.component('Login', {
  template: `
  <template>
    <div class ="center">
      <img class="center" src="/static/images/logo.jpg" alt="Netsoc Logo">
      <form @submit.prevent="handleSubmit">
          <div class="form-group login-box center">
              <input type="text" name="username" class="form-control" placeholder="Username" style="border:none"/>
          </div>
          <div class="form-group login-box center">
              <input type="password" name="password" class="form-control" placeholder="Password" style="border:none"/>
          </div>
      </form>
      <button class= "login-button center" type="button"> Login </button>
    </div>
  </template>
  `
});
