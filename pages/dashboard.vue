<template>
  <div>
    <!-- <div class="m-subheader ">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">Dashboard</h3>         
          <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
            <li class="m-nav__item m-nav__item--home">
              <a href="#" class="m-nav__link m-nav__link--icon">
                <i class="m-nav__link-icon la la-home"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="m-portlet  m-portlet--unair">
      <div class="m-portlet__body  m-portlet__body--no-padding">
        <div class="row m-row--no-padding m-row--col-separator-xl">
          <div class="col-md-12 col-lg-6 col-xl-3">
            <info-box
              :value="shorten(source.all)"
              :progress="calculateProgress(source.all, source.active)"
              color="warning"
              title="Source"
              desc="news sources registered"
              progress-title="activated"
            />
          </div>
          <div class="col-md-12 col-lg-6 col-xl-3">
            <info-box
              :value="shorten(link.all)"
              :progress="calculateProgress(link.all, link.done)"
              color="info"
              title="Link"
              desc="links stored"
              progress-title="crawled"
            />
          </div>
          <div class="col-md-12 col-lg-6 col-xl-3">
            <info-box
              :value="shorten(raw.all)"
              :progress="calculateProgress(raw.all, raw.done)"
              color="danger"
              title="Raw"
              desc="raws stored"
              progress-title="scrapped"
            />
          </div>
          <div class="col-md-12 col-lg-6 col-xl-3">
            <info-box
              :value="corpus.all"
              :progress="corpus.all"
              color="success"
              title="Corpus"
              desc="corpuses stored"
              progress-title="available"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-8">
        <div class="m-portlet m-portlet--mobile ">
          <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-title">
                <h3 class="m-portlet__head-text">
                  Exclusive Datatable Plugin
                </h3>
              </div>
            </div>
            <div class="m-portlet__head-tools">
              <ul class="m-portlet__nav">
                <li class="m-portlet__nav-item">
                  <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
                    <a href="#" class="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
                      <i class="la la-ellipsis-h m--font-brand"/>
                    </a>
                    <div class="m-dropdown__wrapper">
                      <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"/>
                      <div class="m-dropdown__inner">
                        <div class="m-dropdown__body">
                          <div class="m-dropdown__content">
                            <ul class="m-nav">
                              <li class="m-nav__section m-nav__section--first">
                                <span class="m-nav__section-text">Quick Actions</span>
                              </li>
                              <li class="m-nav__item">
                                <a href="" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-share"/>
                                  <span class="m-nav__link-text">Create Post</span>
                                </a>
                              </li>
                              <li class="m-nav__item">
                                <a href="" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-chat-1"/>
                                  <span class="m-nav__link-text">Send Messages</span>
                                </a>
                              </li>
                              <li class="m-nav__item">
                                <a href="" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-multimedia-2"/>
                                  <span class="m-nav__link-text">Upload File</span>
                                </a>
                              </li>
                              <li class="m-nav__section">
                                <span class="m-nav__section-text">Useful Links</span>
                              </li>
                              <li class="m-nav__item">
                                <a href="" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-info"/>
                                  <span class="m-nav__link-text">FAQ</span>
                                </a>
                              </li>
                              <li class="m-nav__item">
                                <a href="" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-lifebuoy"/>
                                  <span class="m-nav__link-text">Support</span>
                                </a>
                              </li>
                              <li class="m-nav__separator m-nav__separator--fit m--hide"/>
                              <li class="m-nav__item m--hide">
                                <a href="#" class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">Submit</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>				</li>
              </ul>
            </div>
          </div>
          <div class="m-portlet__body">
            <!--begin: Datatable -->
            <div id="m_datatable_latest_orders" class="m_datatable m-datatable m-datatable--default m-datatable--loaded m-datatable--scroll" style=""><table class="m-datatable__table" style="display: block; min-height: 300px; max-height: 380px;"><thead class="m-datatable__head"><tr class="m-datatable__row" style="left: -3px;"><th data-field="RecordID" class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--all m-checkbox--solid m-checkbox--brand"><input type="checkbox">&nbsp;<span/></label></span></th><th data-field="OrderID" class="m-datatable__cell m-datatable__cell--sort" data-sort="asc"><span style="width: 150px;">Order ID<i class="la la-arrow-up"/></span></th><th data-field="ShipName" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 150px;">Ship Name</span></th><th data-field="ShipDate" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 110px;">Ship Date</span></th><th data-field="Status" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 100px;">Status</span></th><th data-field="Type" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 100px;">Type</span></th><th data-field="Actions" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 110px;">Actions</span></th></tr></thead><tbody class="m-datatable__body ps ps--active-x ps--active-y" style="max-height: 329px;"><tr data-row="0" class="m-datatable__row" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="45">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0007-3230 - RU</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Kuhlman-Bosco</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">10/1/2016</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--success m-badge--wide">Success</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown ">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="1" class="m-datatable__row m-datatable__row--even" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="88">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0007-4142 - HT</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Gutmann, Kessler and Jast</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">11/28/2017</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--info m-badge--wide">Info</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown ">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="2" class="m-datatable__row" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="162">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0024-5851 - BR</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Abbott, Muller and Kunze</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">4/10/2018</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--danger m-badge--wide">Danger</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown ">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="3" class="m-datatable__row m-datatable__row--even" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="266">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0054-0085 - PG</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Stoltenberg, Wilderman and Lang</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">4/1/2016</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--brand m-badge--wide">Pending</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown ">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="4" class="m-datatable__row" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="316">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0054-0101 - GR</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Hammes-Pagac</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">6/6/2017</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--info m-badge--wide">Info</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown ">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="5" class="m-datatable__row m-datatable__row--even" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="104">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0062-0165 - PT</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Nienow-Smith</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">6/20/2016</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--primary m-badge--wide">Canceled</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--danger m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-danger">Online</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown ">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="6" class="m-datatable__row" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="193">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0074-2278 - ZA</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Swaniawski, Murray and Powlowski</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">11/30/2016</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--success m-badge--wide">Success</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown dropup">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="7" class="m-datatable__row m-datatable__row--even" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="246">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0074-3010 - CN</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">West LLC</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">2/24/2016</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--success m-badge--wide">Success</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--danger m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-danger">Online</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown dropup">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="8" class="m-datatable__row" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="311">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0074-3282 - CN</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Wintheiser, Prosacco and Ward</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">2/7/2016</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--info m-badge--wide">Info</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown dropup">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><tr data-row="9" class="m-datatable__row m-datatable__row--even" style="left: 0px;"><td class="m-datatable__cell--center m-datatable__cell m-datatable__cell--check" data-field="RecordID"><span style="width: 40px;"><label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="25">&nbsp;<span/></label></span></td><td class="m-datatable__cell--sorted m-datatable__cell" data-field="OrderID"><span style="width: 150px;">0093-1016 - ID</span></td><td data-field="ShipName" class="m-datatable__cell"><span style="width: 150px;">Pfannerstill-Jenkins</span></td><td data-field="ShipDate" class="m-datatable__cell"><span style="width: 110px;">4/12/2018</span></td><td data-field="Status" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge  m-badge--danger m-badge--wide">Danger</span></span></td><td data-field="Type" class="m-datatable__cell"><span style="width: 100px;"><span class="m-badge m-badge--primary m-badge--dot"/>&nbsp;<span class="m--font-bold m--font-primary">Retail</span></span></td><td data-field="Actions" class="m-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">                        <div class="dropdown dropup">                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"/>                            </a>                            <div class="dropdown-menu dropdown-menu-right">                                <a class="dropdown-item" href="#"><i class="la la-edit"/> Edit Details</a>                                <a class="dropdown-item" href="#"><i class="la la-leaf"/> Update Status</a>                                <a class="dropdown-item" href="#"><i class="la la-print"/> Generate Report</a>                            </div>                        </div>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">                            <i class="la la-edit"/>                        </a>                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">                            <i class="la la-trash"/>                        </a>                    </span></td></tr><div class="ps__rail-x" style="width: 786px; left: 3px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 2px; width: 686px;"/></div><div class="ps__rail-y" style="top: 0px; height: 329px; right: -3px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 188px;"/></div></tbody></table><div class="m-datatable__pager m-datatable--paging-loaded clearfix"><ul class="m-datatable__pager-nav"><li><a title="First" class="m-datatable__pager-link m-datatable__pager-link--first m-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="la la-angle-double-left"/></a></li><li><a title="Previous" class="m-datatable__pager-link m-datatable__pager-link--prev m-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="la la-angle-left"/></a></li><li style="display: none;"><a title="More pages" class="m-datatable__pager-link m-datatable__pager-link--more-prev" data-page="1"><i class="la la-ellipsis-h"/></a></li><li style="display: none;"><input type="text" class="m-pager-input form-control" title="Page number"></li><li><a class="m-datatable__pager-link m-datatable__pager-link-number m-datatable__pager-link--active" data-page="1" title="1">1</a></li><li><a class="m-datatable__pager-link m-datatable__pager-link-number" data-page="2" title="2">2</a></li><li><a class="m-datatable__pager-link m-datatable__pager-link-number" data-page="3" title="3">3</a></li><li><a class="m-datatable__pager-link m-datatable__pager-link-number" data-page="4" title="4">4</a></li><li><a class="m-datatable__pager-link m-datatable__pager-link-number" data-page="5" title="5">5</a></li><li><a class="m-datatable__pager-link m-datatable__pager-link-number" data-page="6" title="6">6</a></li><li><a title="More pages" class="m-datatable__pager-link m-datatable__pager-link--more-next" data-page="7"><i class="la la-ellipsis-h"/></a></li><li><a title="Next" class="m-datatable__pager-link m-datatable__pager-link--next" data-page="2"><i class="la la-angle-right"/></a></li><li><a title="Last" class="m-datatable__pager-link m-datatable__pager-link--last" data-page="35"><i class="la la-angle-double-right"/></a></li></ul><div class="m-datatable__pager-info"><div class="dropdown bootstrap-select m-datatable__pager-size" style="width: 70px;"><select class="selectpicker m-datatable__pager-size" title="Select page size" data-width="70px" data-selected="10" tabindex="-98"><option class="bs-title-option" value="">Select page size</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="50">50</option><option value="100">100</option></select><button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" title="Select page size"><div class="filter-option"><div class="filter-option-inner">10</div></div>&nbsp;<span class="bs-caret"><span class="caret"/></span></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"/></div></div></div><span class="m-datatable__pager-detail">Displaying 1 - 10 of 350 records</span></div></div></div>
            <!--end: Datatable -->
          </div>
      </div>  </div>
      <div class="col-xl-4">
        <!--begin:: Widgets/Audit Log-->
        <div class="m-portlet m-portlet--full-height ">
          <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-title">
                <h3 class="m-portlet__head-text">
                  Audit Log
                </h3>
              </div>
            </div>
            <div class="m-portlet__head-tools">
              <ul class="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
                <li class="nav-item m-tabs__item">
                  <a class="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget4_tab1_content" role="tab">
                    Today
                  </a>
                </li>
                <li class="nav-item m-tabs__item">
                  <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_widget4_tab2_content" role="tab">
                    Week
                  </a>
                </li>
                <li class="nav-item m-tabs__item">
                  <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_widget4_tab3_content" role="tab">
                    Month
                  </a>  
                </li>
              </ul>
            </div>
          </div>
          <div class="m-portlet__body">
            <div class="tab-content">
              <div id="m_widget4_tab1_content" class="tab-pane active">
                <div class="m-scrollable m-scroller ps ps--active-y" data-scrollable="true" data-height="400" style="height: 400px; overflow: hidden;">
                  <div class="m-list-timeline m-list-timeline--skin-light">
                    <div class="m-list-timeline__items">
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--success"/>
                        <span class="m-list-timeline__text">12 new users registered</span>
                        <span class="m-list-timeline__time">Just now</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--info"/>
                        <span class="m-list-timeline__text">System shutdown <span class="m-badge m-badge--success m-badge--wide">pending</span></span>
                        <span class="m-list-timeline__time">14 mins</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--danger"/>
                        <span class="m-list-timeline__text">New invoice received</span>
                        <span class="m-list-timeline__time">20 mins</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--accent"/>
                        <span class="m-list-timeline__text">DB overloaded 80% <span class="m-badge m-badge--info m-badge--wide">settled</span></span>
                        <span class="m-list-timeline__time">1 hr</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--warning"/>
                        <span class="m-list-timeline__text">System error - <a href="#" class="m-link">Check</a></span>
                        <span class="m-list-timeline__time">2 hrs</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--brand"/>
                        <span class="m-list-timeline__text">Production server down</span>
                        <span class="m-list-timeline__time">3 hrs</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--info"/>
                        <span class="m-list-timeline__text">Production server up</span>
                        <span class="m-list-timeline__time">5 hrs</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--success"/>
                        <span href="" class="m-list-timeline__text">New order received <span class="m-badge m-badge--danger m-badge--wide">urgent</span></span>
                        <span class="m-list-timeline__time">7 hrs</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--success"/>
                        <span class="m-list-timeline__text">12 new users registered</span>
                        <span class="m-list-timeline__time">Just now</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--info"/>
                        <span class="m-list-timeline__text">System shutdown <span class="m-badge m-badge--success m-badge--wide">pending</span></span>
                        <span class="m-list-timeline__time">14 mins</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--danger"/>
                        <span class="m-list-timeline__text">New invoice received</span>
                        <span class="m-list-timeline__time">20 mins</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--accent"/>
                        <span class="m-list-timeline__text">DB overloaded 80% <span class="m-badge m-badge--info m-badge--wide">settled</span></span>
                        <span class="m-list-timeline__time">1 hr</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--danger"/>
                        <span class="m-list-timeline__text">New invoice received</span>
                        <span class="m-list-timeline__time">20 mins</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--accent"/>
                        <span class="m-list-timeline__text">DB overloaded 80% <span class="m-badge m-badge--info m-badge--wide">settled</span></span>
                        <span class="m-list-timeline__time">1 hr</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--warning"/>
                        <span class="m-list-timeline__text">System error - <a href="#" class="m-link">Check</a></span>
                        <span class="m-list-timeline__time">2 hrs</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--brand"/>
                        <span class="m-list-timeline__text">Production server down</span>
                        <span class="m-list-timeline__time">3 hrs</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--info"/>
                        <span class="m-list-timeline__text">Production server up</span>
                        <span class="m-list-timeline__time">5 hrs</span>
                      </div>
                      <div class="m-list-timeline__item">
                        <span class="m-list-timeline__badge m-list-timeline__badge--success"/>
                        <span href="" class="m-list-timeline__text">New order received <span class="m-badge m-badge--danger m-badge--wide">urgent</span></span>
                        <span class="m-list-timeline__time">7 hrs</span>
                      </div>
                    </div>
                  </div>
                <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"/></div><div class="ps__rail-y" style="top: 0px; height: 400px; right: 4px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 245px;"/></div></div>
              </div>
              <div id="m_widget4_tab2_content" class="tab-pane"/>
              <div id="m_widget4_tab3_content" class="tab-pane"/>
            </div>
          </div>
        </div>
        <!--end:: Widgets/Audit Log-->  
      </div>
    </div>            
  </div>

</template>

<script>
import InfoBox from '~/components/widgets/InfoBox';
export default {
  middleware: 'authenticated',
  components: {
    InfoBox
  },
  data: () => ({
    source: {
      all: 0,
      active: 0
    },
    link: {
      all: 0,
      done: 0
    },
    raw: {
      all: 0,
      done: 0
    },
    corpus: {
      all: 0
    }
  }),
  mounted() {
    this.$axios
      .get('/home/summary')
      .then(({ data: { content: { source, link, raw, corpus } } }) => {
        this.source = source;
        this.link = link;
        this.raw = raw;
        this.corpus = corpus;
      })
      .then(() => {
        const listener = new Listener('home');
        listener.bind('link-changed', this.linkChanged);
        listener.bind('raw-changed', this.rawChanged);
      });
  },
  methods: {
    calculateProgress: (a, b) => (100 / parseFloat(a)) * parseFloat(b),
    linkChanged({ all, done }) {
      if (all) this.link.all += all;
      if (done) this.link.done += done;
    },
    rawChanged({ all, done }) {
      if (all) this.raw.all += all;
      if (done) this.raw.done += done;
    },
    shorten(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num;
    }
  }
};
</script>

<style>
</style>
