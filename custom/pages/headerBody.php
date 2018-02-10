<body>
	<div id="modal">
		<div id="container-modal">
			<div id="container-modal-title">
				<h2></h2>
			</div>
			<div id="container-modal-content">

			</div>
			<div id="container-modal-footer" class="divClass4">
				<div class="divClass4"><button type="button" id="btn-cancel-modal" class="btn-modal danger btn">Cancelar</button></div>
			</div>
		</div>
	</div>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

      <div class="android-header mdl-layout__header mdl-layout__header--waterfall">
        <div class="mdl-layout__header-row">
          <span class="android-title mdl-layout-title">
            <img class="android-logo-image" src="../img/logoHeader.png">
          </span>
          <!-- Add spacer, to align navigation to the right in desktop -->
          <div class="android-header-spacer mdl-layout-spacer"></div>
          <!-- Navigation -->
          <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
            <i class="material-icons">more_vert</i>
          </button>
          <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
            <a href="../cerrarSesion.php"><li class="mdl-menu__item">Cerrar Sesión</li></a>
          </ul>
        </div>
      </div>

      <div class="android-drawer mdl-layout__drawer">
        <span class="mdl-layout-title">
          <img class="android-logo-image" src="../img/android-logo.png">
        </span>
        <nav id="menuPrincipal" class="mdl-navigation">
          
        </nav>
      </div>
      <div class="android-content mdl-layout__content">
