<template>
  <div class="m-grid m-grid--hor m-grid--root m-page">
    <!-- BEGIN: Header -->
    <header id="m_header" class="m-grid__item m-header" m-minimize="minimize" m-minimize-mobile="minimize" m-minimize-offset="200" m-minimize-mobile-offset="200" >
      <div class="m-container m-container--fluid m-container--full-height">
        <div class="m-stack m-stack--ver m-stack--desktop  m-header__wrapper">      
          <!-- BEGIN: Brand -->
          <div class="m-stack__item m-brand m-brand--mobile">
            <div class="m-stack m-stack--ver m-stack--general">
              <div class="m-stack__item m-stack__item--middle m-brand__logo">
                <a class="m-brand__logo-wrapper">
                  <img alt="" src="@/assets/img/logo.png" style="height: 50px">
                </a>  
              </div>
              <div class="m-stack__item m-stack__item--middle m-brand__tools"/>
            </div>
          </div>
          <!-- END: Brand -->         
                    
          <div id="m_header_nav" class="m-stack__item m-stack__item--middle m-stack__item--left m-header-head">
            <div class="m-stack m-stack--ver m-stack--desktop">
                          
              <div class="m-stack__item m-stack__item--fluid">
                <!-- BEGIN: Horizontal Menu -->
                <button id="m_aside_header_menu_mobile_close_btn" class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark "><i class="la la-close"/></button>
                <div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark" style="padding: 0px">
                  <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
                    <li class="m-menu__item m-menu__item--submenu m-menu__item--rel">
                      <a class="m-menu__link m-menu__toggle">
                        <span class="m-menu__item-here"/><span class="m-menu__link-text">Dashboard</span>
                      </a>
                    </li>
                    <li class="m-menu__item m-menu__item--submenu m-menu__item--rel">
                      <a class="m-menu__link m-menu__toggle">
                        <span class="m-menu__item-here"/><span class="m-menu__link-text">Source</span>
                      </a>
                    </li>
                    <li class="m-menu__item m-menu__item--submenu m-menu__item--rel">
                      <a class="m-menu__link m-menu__toggle">
                        <span class="m-menu__item-here"/><span class="m-menu__link-text">Link</span>
                      </a>
                    </li>
                    <li class="m-menu__item m-menu__item--submenu m-menu__item--rel">
                      <a class="m-menu__link m-menu__toggle">
                        <span class="m-menu__item-here"/><span class="m-menu__link-text">Raw</span>
                      </a>
                    </li>
                    <li class="m-menu__item m-menu__item--submenu m-menu__item--rel">
                      <a class="m-menu__link m-menu__toggle">
                        <span class="m-menu__item-here"/><span class="m-menu__link-text">Corpus</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- END: Horizontal Menu -->
              </div>
            </div>          
          </div>
                            
          <div class="m-stack__item m-stack__item--middle m-stack__item--center">
            <!-- BEGIN: Brand -->
            <a class="m-brand m-brand--desktop">
              <img src="~/assets/img/logo.png" style="height: 45px">
            </a>
            <!-- END: Brand -->         
          </div>

          <div class="m-stack__item m-stack__item--right">
            <!-- BEGIN: Topbar -->
            <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
                                        
              <div class="m-stack__item m-topbar__nav-wrapper">
                <ul class="m-topbar__nav m-nav m-nav--inline">               
                  <li class="m-nav__item m-nav__item--info">
                    <span class="m-nav__link">
                      <span class="m-nav__link-icon m-nav__link-icon-alt">
                        <span class="m-nav__link-icon-wrapper"><i class="flaticon-settings"/></span>
                      </span>
                    </span>
                  </li>  
                  <li class="m-nav__item m-nav__item--info">
                    <span class="m-nav__link">
                      <span class="m-nav__link-icon m-nav__link-icon-alt">
                        <span class="m-nav__link-icon-wrapper"><i class="flaticon-web"/></span>
                      </span>
                    </span>
                  </li>  
                  <li class="m-nav__item m-nav__item--info">
                    <span class="m-nav__link">
                      <span class="m-nav__link-icon m-nav__link-icon-alt">
                        <span class="m-nav__link-icon-wrapper"><i class="fa fa-power-off"/></span>
                      </span>
                    </span>
                  </li>           
                </ul>
              </div>

            </div>
            <!-- END: Topbar -->            
          </div>
        </div>
      </div>
    </header>
    <!-- END: Header -->

    <!-- begin::Body -->
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor-desktop m-grid--desktop m-body">
      <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-container m-container--responsive m-container--xxl m-container--full-height">
        <div class="m-grid__item m-grid__item--fluid m-wrapper">
          <nuxt/>
        </div>
      </div>
    </div>
    <!-- end:: Body -->

    <!-- begin::Footer -->
    <!-- <footer class="m-grid__item m-footer">
      <div class="m-container m-container--responsive m-container--xxl m-container--full-height">
        <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
          <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
            <span class="m-footer__copyright">
              2017 &copy; Metronic theme by <a href="https://keenthemes.com" class="m-link">Keenthemes</a>
            </span>
          </div>
          <div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
            <ul class="m-footer__nav m-nav m-nav--inline m--pull-right">
              <li class="m-nav__item">
                <a href="#" class="m-nav__link">
                  <span class="m-nav__link-text">About</span>
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </footer> -->
    <!-- end::Footer -->        
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class:
        'm--skin- m-content--skin-light m-header--fixed m-header--fixed-mobile m-aside-left--offcanvas-default m-aside-left--enabled m-aside-left--fixed m-aside-left--skin-dark m-aside--offcanvas-default'
    }
  }
}
</script>
