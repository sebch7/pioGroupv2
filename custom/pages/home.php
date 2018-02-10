<?php
  require_once('../start.php');
?>
<!DOCTYPE html>
<html>
<head>
  <?php
    include('header.php');
  ?>
  <script>
  $(function() 
  {
    mostrarTablaEmpresas();

    mostrarContainerGranjas();

  });
    
  </script>
</head>
      <?php
        include('headerBody.php');
      ?>
        <div class="android-more-section">
          <div class="android-section-title mdl-typography--display-1-color-contrast">Granjas</div>
          <div id="containerGranjas" class="android-card-container mdl-grid">
          <!-- fin tarjeta -->
            
          <!-- fin tarjeta -->
          </div>
          <div class="android-section-title mdl-typography--display-1-color-contrast">Galpones</div>
          <div id="containerGalpones" class="android-card-container mdl-grid">
          <!-- fin tarjeta -->
            
          <!-- fin tarjeta -->
          </div>
          <div class="android-section-title mdl-typography--display-1-color-contrast">Insumos</div>
          <div id="containerInsumos" class="android-card-container mdl-grid">
          <!-- fin tarjeta -->
            
          <!-- fin tarjeta -->
          </div>  
    <?php
      include('footer.php');
    ?>
    
