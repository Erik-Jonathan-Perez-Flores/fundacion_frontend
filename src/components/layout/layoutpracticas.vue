<template>
  <div >
    <div class="wrapper">
  <header class="main-header">
    <a href="index2.html" class="logo">
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="public/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">Alexander Pierces</span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <img src="public/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <aside class="main-sidebar">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="public/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
       <li>
          <router-link :to="'/'"
            ><i class="fa fa-arrow-left" aria-hidden="true"></i><span> Regresar a materias</span></router-link>    
        </li>
        <li>
          <router-link :to="'#'"
            ><i class="fa fa-pencil" aria-hidden="true"></i><span> Ver practicas</span></router-link>    
        </li>
      </ul>

    </section>
  </aside>
  <div class="content-wrapper">
    <section class="content">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
             <router-view :key="$route.fullPath"/>
          </div>
    </section>
  </div>
  
  
</div>  
    
  </div>
</template>
<script>
export default{
  name:'layoutpracticas'
}
</script>
<style>

</style>