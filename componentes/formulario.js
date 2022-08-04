
Vue.component('formulario',{
template: //html
 `
<div class="container">
  <div class="row">
    <div class="col-3">
     
    </div>
    <div class="col-6 ">

    <form class="bg-light  rounded">

    <div class="bg-white d-flex rounded-top">
    
    <legend class="  p-3">Login to our site</legend>
   
    <i class="fa fa-lock text-secondary text-opacity-25 display-4 p-3" aria-hidden="true"></i>
    </div>

    <p class=" px-3 bg-white" >Enter your username and password to log on: </p>

    <div class="form-group p-3 mt-3">
      <input type="email" class="form-control rounded-0 p-2 border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username...">
      
    </div>
    <div class="form-group px-3">
      <input type="password" class="form-control rounded-0 p-2 border-secondary" id="exampleInputPassword1" placeholder="Password...">
    </div>
   
    <div class="form-group p-3">
   
    <button type="submit" class="btn btn-warning w-100 rounded-0 mb-3 p-2 text-white">Sign in!</button>
    </div>
   
   </form>


    </div>
    <div class="col-3">
  
    </div>

  </div>
      
</div>



`,



})

