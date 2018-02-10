$('document').ready(function()
{
	$('#header-logo-img').click(function()
	{
		location.assign('menuPrincipal.php');
	});

	$('.itemMenu').click(function()
	{
		mmenuPrincipal($(this).data('send'));
	});
});
	
	function mmenuPrincipal(data)
	{
		if(data == '')
		{
			location.assign("../mmenuPrincipal.php");
		}
		else
		{
			switch(data)
			{
				case 'ModUsuario':
					pag = "pages/usuarios.php";
				break;
				case 'ModGranja':
					pag = "pages/granjas.php";
				break;
				case 'ModGalpon':
					pag = "pages/galpones.php";
				break;
				case 'ModInsumo':
					pag = "pages/insumos.php";
				break;
				case 'ModCerrarSesion':
					pag = "cerrarSesion.php";
				break;
				default:
					pag = "menuPrincipal.php";
				break;

				
			}
			location.assign(pag);
		}
	}










