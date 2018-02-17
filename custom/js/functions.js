var dataGlobalUrl = [];
$('document').ready(function()
{
	$(document).ready(function(){
	    $('#example').DataTable();
	});

	lectorUrl();

	$('#btn-menu').click(function()
	{
		positionMenu();
	});

	$('#container').click(function()
	{
		$('#menuFlotante').slideUp();
	});

	$('#header-logo-img').click(function()
	{
		location.assign('home.php');
	});

	$('.itemMenuFlotante').click(function()
	{
		cargarMenu($(this).data('send'));
	});

	$('#nuevoUsuario').click(function()
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','E-mail','Fecha de Nacimiento','Tipo de Documento','Número de Documento','Estado','Teléfono Fijo','Teléfono Celular','EPS','Pais','Departamento','Ciudad','Dirección','Genero','Perfil','Granja'];//'Empresa'
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','re_correoElectronico','rd_fechaNacimiento','rs_idTipoDocumento','rn_identificacion','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','rs_idPais','rs_idDepartamento','rs_idCiudad','r_direccion','rs_idGenero','rs_idPerfil','s_idGranja'];//'rs_idEmpresa'
		var formulario = 'new_user';
		$('#container-modal-title').html('<h2>Nuevo Usuario</h2>');
		formNuevo(titulo,campo,formulario);

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoUsuario');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevoUsuarioEmpresa').click(function()
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Fecha de Nacimiento','Tipo de Documento','Número de Documento','Teléfono Fijo','Teléfono Celular','EPS','Departamento','Ciudad','Dirección','Genero','Empresa'];//
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rd_fechaNacimiento','rs_idTipoDocumento','rn_identificacion','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','rs_idDepartamento','rs_idCiudad','r_direccion','rs_idGenero','rs_idEmpresa'];//
		var formulario = 'new_userCompany';
		$('#container-modal-title').html('<h2>Nuevo Usuario-Empresa</h2>');
		formNuevo(titulo,campo,formulario);

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoUsuarioEmpresa');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevaEmpresa').click(function()
	{
		var titulo = ['Nombre','Nit','Persona responsable','Teléfono Responsable','Departamento','Ciudad','Plan Comercial'];
		var campo = ['r_nombre','r_nit','r_personaResponsable','r_telefono','rs_idDepartamento','rs_idCiudad','rs_idPlanComercial'];
		var formulario = 'new_company';
		$('#container-modal-title').html('<h2>Nueva Empresa</h2>');
		formNuevo(titulo,campo,formulario);

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevaEmpresa');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevaGranja').click(function()
	{
		var titulo = ['Nombre','Pais','Departamento','Ciudad','Estado'];
		var campo = ['r_nombre','rs_idPais','rs_idDepartamento','rs_idCiudad','rs_idEstado'];
		var formulario = 'new_farm';
		$('#container-modal-title').html('<h2>Nueva Granja</h2>');
		formNuevo(titulo,campo,formulario);

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevaGranja');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevoGalpon').click(function()
	{
		var titulo = ['Nombre','Granja','Clima','Capacidad','Estado'];
		var campo = ['r_nombre','rs_idGranja','rs_idTipoClima','rn_capacidad','rs_idEstado'];
		var formulario = 'new_galpon';
		$('#container-modal-title').html('<h2>Nuevo Galpon</h2>');
		formNuevo(titulo,campo,formulario);

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoGalpon');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevoInsumo').click(function()
	{
		var titulo = ['Nombre','Fecha Inicio','Cantidad','','Granja'];
		var campo = ['r_nombre','rd_fechaInicio','rn_cantidad','rs_idTipoCantidad','rs_idGranja'];
		var formulario = 'new_supply';
		$('#container-modal-title').html('<h2>Nuevo Insumo</h2>');
		formNuevo(titulo,campo,formulario);

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoInsumo');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevoInsumoGalpon').click(function()
	{
		var titulo = ['Galpon','Insumo','cantidad','','Fecha Inicio'];
		var campo = ['rs_idGalpon','rs_idInsumo','n_cantidad','ls_idTipoCantidad','rd_fechaInicio'];
		var formulario = 'new_supplyGalpon';
		$('#container-modal-title').html('<h2>Nuevo Insumo a Galpon</h2>');
		formNuevo(titulo,campo,formulario);

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoInsumoGalpon');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});


});

	function isset(data)
	{
		return data !== undefined;
	}
	
	function lectorUrl()
	{
		var actuallyUrl = window.location.href;
		var divisor = actuallyUrl.split('?');

		if(divisor[1] == undefined)
		{
			return false;
		}
		else
		{
			var dataContentVar = divisor[1].split('&');
			for(var countDataContent=0;countDataContent<dataContentVar.length;countDataContent++)
			{
				var dataContent = dataContentVar[countDataContent];
				var data = dataContent.split('=');
				var nameVar = data[0];
				var valueVar = data[1];
				dataGlobalUrl[nameVar] = valueVar;
			}
		}
	}

	function cargarPaises()
	{
		$('#idPais').html('cargando...');//pais
		$('#idDepartamento').html('');//municipio
		$('#idCiudad').html('');//ciudad

		datosPaises = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarPaises'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosPaises += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idPais').html(datosPaises);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarDepartamentos()
	{
		$('#idDepartamento').html('cargando...');//municipio
		$('#idCiudad').html('');//ciudad

		datosDepartamentos = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarDepartamentos'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosDepartamentos += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idDepartamento').html(datosDepartamentos);

		    $('#idDepartamento').change(function()
				{
					cargarCiudades();
				});
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarEmpresas()
	{
		$('#idEmpresa').html('cargando...');

		datosEmpresa = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarEmpresas'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosEmpresa += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idEmpresa').html(datosEmpresa);

		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarCiudades()
	{
		$('#idCiudad').html('cargando...');//ciudad

		if($('#idDepartamento').val() < 10)
		{
			tipo = 1;
		}
		else
		{
			tipo = 2;
		}

		datosCiudades = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarCiudades',idDepartamento: $('#idDepartamento').val(), tipo:tipo}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosCiudades += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idCiudad').html(datosCiudades);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarPerfiles()
	{
		$('#idPerfil').html('cargando...');//pais

		datosPerfil = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarPerfiles'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosPerfil += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idPerfil').html(datosPerfil);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {

	  });
	}

	function cargarTipoCantidad()
	{
		$('#idTipoCantidad').html('cargando...');//ciudad

		datosTipoCantidad = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarTipoCantidad'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosTipoCantidad += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idTipoCantidad').html(datosTipoCantidad);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarEps()
	{
		$('#idAdministradoraEps').html('cargando...');//ciudad

		datosEps = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarEps'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosEps += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idAdministradoraEps').html(datosEps);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}
	
	function cargarGranjas()
	{
		$('#idGranja').html('cargando...');//ciudad

		datosGranja = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarGranjas'}
		}).done(function(data) {
			datosGranja += '<option>Seleccione...</option>';
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosGranja += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idGranja').html(datosGranja);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarGenero()
	{
		$('#idGenero').html('cargando...');//ciudad

		datosCiudades = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarGenero'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosCiudades += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idGenero').html(datosCiudades);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarTipoClima()
	{
		$('#idTipoClima').html('cargando...');//ciudad

		datosTipoClima = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarTipoClima'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosTipoClima += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idTipoClima').html(datosTipoClima);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarEstados()
	{
		$('#idEstado').html('cargando...');//ciudad

		datosEstado = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarEstados'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosEstado += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idEstado').html(datosEstado);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarGalpones()
	{
		$('#idGalpon').html('cargando...');//ciudad

		datosGalpones = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarGalpones'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosGalpones += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idGalpon').html(datosGalpones);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarInsumos()
	{
		$('#idInsumo').html('cargando...');//ciudad

		datosInsumos = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarInsumos'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosInsumos += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idInsumo').html(datosInsumos);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarPlanComercial()
	{
		$('#idPlanComercial').html('cargando...');//ciudad

		datosPlanComercial = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarPlanComercial'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosPlanComercial += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idPlanComercial').html(datosPlanComercial);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarTipoDocumento()
	{
		$('#idTipoDocumento').html('cargando...');//ciudad

		datosTipoDocumento = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarTipoDocumento'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosTipoDocumento += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idTipoDocumento').html(datosTipoDocumento);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function mostrarTablaUsuariosEmpresas()
	{
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaUsuriosEmpresas",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        });
    	},
		  "columns": [
					{"data": "nombre"},
					{"data": "identificacion"},
					{"data": "empresa"},
					{"data": "ciudad", "class": "busqueda"},
					{"data": "telefonos"},
		      {"data": "estado", "class": "busqueda" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 6,
            "data": "identificacion",
            "render": function(data) {
              return "<span data-emco='"+data+"' class='material-icons editForm'>create</span>";
            },
        }],
        
		  	"language": {
		      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json" 
		  },
		  stateSave: true
		});

		$('#example tbody').on( 'click', 'span', function () {
		  var dialog = document.querySelector('dialog');
			formEditarUsuarioEmpresa($(this).data('emco'));
			dialogPolyfill.registerDialog(dialog);
			dialog.showModal();
			var showDialogButton = document.querySelector('span');
			if (dialog.showModal) {
			  dialogPolyfill.registerDialog(dialog);
			}
			showDialogButton.addEventListener('click', function() {
			  dialog.showModal();
			});
			dialog.querySelector('.close').addEventListener('click', function() {
			  dialog.close();
			});
		});
		/*
		idEmpresa = 0;

		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Nombres','Apellidos','Identificación','Empresa','Ciudad','Teléfonos','Perfil','Estado','Editar'];

		camposConsulta = '';
		nombresCampos = '';
		for(var i = 0;i < titulo.length;i++)
		{
			nombresCampos += '<th class="orderBy" id="'+i+'">'+titulo[i]+'</th>';
		}
		$('#tablaInfoHead').html(nombresCampos);

		$('.orderBy').click(function()
		{

		});

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaUsuriosEmpresas'}
		}).done(function(data) {

		    for(var ii = 0; ii < data.length; ii++)
		    {
		    	camposConsulta += '<tr>';
		    	camposConsulta += '<td>'+data[ii].nombres+'</td>';
		    	camposConsulta += '<td>'+data[ii].Apellidos+'</td>';
		    	camposConsulta += '<td>'+data[ii].identificacion+'</td>';
		    	camposConsulta += '<td>'+data[ii].empresa+'</td>';
		    	camposConsulta += '<td>'+data[ii].ciudad+'</td>';
		    	camposConsulta += '<td>'+data[ii].telefonos+'</td>';
		    	camposConsulta += '<td>'+data[ii].perfil+'</td>';
		    	camposConsulta += '<td>'+data[ii].estado+'</td>';
		    	camposConsulta += '<td><span data-emCo="'+data[ii].identificacion+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarUsuarioEmpresa($(this).data('emco'));
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	  */
	}

	function mostrarTablaUsuarios()
	{
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaUsurios",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
					{"data": "nombre"},
					{"data": "identificacion"},
					{"data": "telefonos"},
					{"data": "granja", "class": "busqueda"},
					{"data": "perfil", "class": "busqueda"},
		      {"data": "estado", "class": "busqueda"},
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 6,
            "data": "identificacion",
            "render": function(data) {
              return "<span data-emco='"+data+"' class='material-icons editForm'>create</span>";
            },
        }],
        
		  	"language": {
		      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json" 
		  },
		  stateSave: true
		});

		$('#example tbody').on( 'click', 'span', function () {
		  var dialog = document.querySelector('dialog');
			formEditarUsuario($(this).data('emco'));
			dialogPolyfill.registerDialog(dialog);
			dialog.showModal();
			var showDialogButton = document.querySelector('span');
			if (dialog.showModal) {
			  dialogPolyfill.registerDialog(dialog);
			}
			showDialogButton.addEventListener('click', function() {
			  dialog.showModal();
			});
			dialog.querySelector('.close').addEventListener('click', function() {
			  dialog.close();
			});
		});
	}

	//pendiente
	function mostrarTablaInsumosGalpon()
	{
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaInsumoGalpon",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
					{"data": "nombre"},
					{"data": "ciudad", "class": "busqueda"},
					{"data": "responsable"},
					{"data": "telefono"},
		      {"data": "planComercial", "class": "busqueda" },
		      {"data": "estado", "class": "busqueda" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 6,
            "data": "id",
            "render": function(data) {
              return "<span data-emco='"+data+"' class='material-icons editForm'>create</span>";
            },
        }],
        
		  	"language": {
		      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json" 
		  },
		  stateSave: true
		});

		$('#example tbody').on( 'click', 'span', function () {
		  var dialog = document.querySelector('dialog');
			formEditarEmpresa($(this).data('emco'));
			dialogPolyfill.registerDialog(dialog);
			dialog.showModal();
			var showDialogButton = document.querySelector('span');
			if (dialog.showModal) {
			  dialogPolyfill.registerDialog(dialog);
			}
			showDialogButton.addEventListener('click', function() {
			  dialog.showModal();
			});
			dialog.querySelector('.close').addEventListener('click', function() {
			  dialog.close();
			});
		});
		/*	
		idGalpon = 0;

		if(isset(dataGlobalUrl['id']))
		{
			idGalpon = dataGlobalUrl['id'];
		}

		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Insumo','Galpon','Fecha Inicio','Cantidad','Disponible',''];

		camposConsulta = '';
		nombresCampos = '';
		for(var i = 0;i < titulo.length;i++)
		{
			nombresCampos += '<th class="orderBy" id="'+i+'">'+titulo[i]+'</th>';
		}
		$('#tablaInfoHead').html(nombresCampos);

		$('.orderBy').click(function()
		{

		});

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaInsumoGalpon',idGalpon: idGalpon}
		}).done(function(data) {

		    for(var ii = 0; ii < data.length; ii++)
		    {
		    	camposConsulta += '<tr>';
		    	camposConsulta += '<td>'+data[ii].insumo+'</td>';
		    	camposConsulta += '<td>'+data[ii].galpon+'</td>';
		    	camposConsulta += '<td>'+data[ii].fechaInicio+'</td>';
		    	camposConsulta += '<td>'+data[ii].cantidad+' '+data[ii].tipo+'</td>';
		    	camposConsulta += '<td>'+data[ii].cantidad+' '+data[ii].tipo+'</td>';
		    	camposConsulta += '<td><span class="material-icons editForm">warning</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	//formEditarUsuario($(this).data('employed'));
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	  */
	}


	function mostrarTablaEmpresas()
	{
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaEmpresas",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
					{"data": "nombre"},
					{"data": "ciudad", "class": "busqueda"},
					{"data": "responsable"},
					{"data": "telefono"},
		      {"data": "planComercial", "class": "busqueda" },
		      {"data": "estado", "class": "busqueda" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 6,
            "data": "id",
            "render": function(data) {
              return "<span data-emco='"+data+"' class='material-icons editForm'>create</span>";
            },
        }],
        
		  	"language": {
		      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json" 
		  },
		  stateSave: true
		});

		$('#example tbody').on( 'click', 'span', function () {
		  var dialog = document.querySelector('dialog');
			formEditarEmpresa($(this).data('emco'));
			dialogPolyfill.registerDialog(dialog);
			dialog.showModal();
			var showDialogButton = document.querySelector('span');
			if (dialog.showModal) {
			  dialogPolyfill.registerDialog(dialog);
			}
			showDialogButton.addEventListener('click', function() {
			  dialog.showModal();
			});
			dialog.querySelector('.close').addEventListener('click', function() {
			  dialog.close();
			});
		});
	}

	function mostrarTablaGranjas()
	{
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaGranjas",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
					{"data": "nombre"},
					{"data": "ciudad", "class": "busqueda"},
					{"data": "galpon"},
		      {"data": "estado", "class": "busqueda" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 4,
            "data": "id",
            "render": function(data) {
              return "<span data-emco='"+data+"' class='material-icons editForm'>create</span>";
            },
        }],
        
		  	"language": {
		      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json" 
		  },
		  stateSave: true
		});

		$('#example tbody').on( 'click', 'span', function () {
		  var dialog = document.querySelector('dialog');
			formEditarGranja($(this).data('emco'));
			dialogPolyfill.registerDialog(dialog);
			dialog.showModal();
			var showDialogButton = document.querySelector('span');
			if (dialog.showModal) {
			  dialogPolyfill.registerDialog(dialog);
			}
			showDialogButton.addEventListener('click', function() {
			  dialog.showModal();
			});
			dialog.querySelector('.close').addEventListener('click', function() {
			  dialog.close();
			});
		});
	}

	function mostrarTablaInsumos()
	{
				var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaInsumos",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
					{"data": "nombre"},
					{"data": "fechaInicio", "class": "busqueda"},
					{"data": "cantidad"},
					{"data": "cantidadUsada"},
		      {"data": "fechaFinal", "class": "busqueda" },
		      {"data": "granja", "class": "busqueda" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 6,
            "data": "id",
            "render": function(data) {
              return "<span data-emco='"+data+"' class='material-icons editForm'>create</span>";
            },
        }],
        
		  	"language": {
		      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json" 
		  },
		  stateSave: true
		});

		$('#example tbody').on( 'click', 'span', function () {
		  var dialog = document.querySelector('dialog');
			formEditarEmpresa($(this).data('emco'));
			dialogPolyfill.registerDialog(dialog);
			dialog.showModal();
			var showDialogButton = document.querySelector('span');
			if (dialog.showModal) {
			  dialogPolyfill.registerDialog(dialog);
			}
			showDialogButton.addEventListener('click', function() {
			  dialog.showModal();
			});
			dialog.querySelector('.close').addEventListener('click', function() {
			  dialog.close();
			});
		});
	}

	function mostrarTablaGalpones(data)
	{
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaGalpones",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
					{"data": "nombre"},
					{"data": "granja", "class": "busqueda"},
					{"data": "clima"},
					{"data": "capacidad"},
					{"data": "disponibilidad"},
		      {"data": "estado", "class": "busqueda" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 6,
            "data": "id",
            "render": function(data) {
              return "<span data-emco='"+data+"' class='material-icons editForm'>create</span>";
            },
        }],
        
		  	"language": {
		      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json" 
		  },
		  stateSave: true
		});

		$('#example tbody').on( 'click', 'span', function () {
		  var dialog = document.querySelector('dialog');
			formEditarGalpon ($(this).data('emco'));
			dialogPolyfill.registerDialog(dialog);
			dialog.showModal();
			var showDialogButton = document.querySelector('span');
			if (dialog.showModal) {
			  dialogPolyfill.registerDialog(dialog);
			}
			showDialogButton.addEventListener('click', function() {
			  dialog.showModal();
			});
			dialog.querySelector('.close').addEventListener('click', function() {
			  dialog.close();
			});
		});
	}

	function accionFormulario(formulario)
	{
		var data = formulario.split('_');//separar tipo de nombre
		var type = data[0];//tipo de campo
		
		switch(type)
		{
			case 'new':
			return 'Crear';
			break;

			case 'edit':
			return 'Editar';
			break;
		}
	}

	function formEditarGalpon(idGalpon)
	{
		
		var titulo = ['Nombre','Granja','Clima','Capacidad','Estado',''];
		var campo = ['r_nombre','rs_idGranja','rs_idTipoClima','n_capacidad','rs_idEstado','rh_idGalpon'];
		var formulario = 'edit_galpon';

		$('#container-modal-title').html('<h2>'+accionFormulario(formulario)+' Galpon</h2>');

		formNuevo(titulo,campo,formulario);

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaGalpon',idGalpon: idGalpon}
		}).done(function(data) {
			$('#idGalpon').val(data[0].id);
			$('#nombre').val(data[0].nombre);
			$('#idGranja').val(data[0].idGranja);
			$('#idTipoClima').val(data[0].idTipoClima);
			$('#capacidad').val(data[0].capacidad);
			$('#idEstado').val(data[0].idEstado);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function formEditarEmpresa(idEmpresa)
	{
		
		var titulo = ['Nombre','Nit','Persona responsable','Teléfono Responsable','Estado','Plan Comercial',''];
		var campo = ['r_nombre','r_nit','r_personaResponsable','r_telefono','rs_idEstado','rs_idPlanComercial','rh_idEmpresa'];
		var formulario = 'edit_company';

		$('#container-modal-title').html('<h2>'+accionFormulario(formulario)+' Empresa</h2>');

		formNuevo(titulo,campo,formulario);

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaEmpresa',idEmpresa: idEmpresa}
		}).done(function(data) {
			$('#nombre').val(data[0].nombre);
			$('#nit').val(data[0].nit);
			$('#idEmpresa').val(data[0].id);
			$('#telefono').val(data[0].telefono);
			$('#personaResponsable').val(data[0].personaResponsable);
			$('#idEstado').val(data[0].idEstado);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function formEditarGranja(idGranja)
	{
		
		var titulo = ['Nombre','Empresa','Estado',''];
		var campo = ['r_nombre','rs_idEmpresa','rs_idEstado','rh_idGranja'];
		var formulario = 'edit_farm';

		$('#container-modal-title').html('<h2>'+accionFormulario(formulario)+' Granja</h2>');

		formNuevo(titulo,campo,formulario);

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaGranja',idGranja: idGranja}
		}).done(function(data) {
			$('#nombre').val(data[0].nombre);
			$('#idEmpresa').val(data[0].idEmpresa);
			$('#idGranja').val(data[0].id);
			$('#idEstado').val(data[0].idEstado);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function formNuevo(titulo,campos,formulario)
	{
		$('#container-modal-content').html('');
		pintarForm = '';
		pintarForm += '<form method="post" action="controller/'+formulario+'.php" class="formSection">';
		for(var i = 0; i< titulo.length;i++)
		{
			var data = campos[i].split('_');//separar tipo de nombre
			var type = data[0];//tipo de campo
			var campo =data[1];//nombre del campo
 
			pintarForm += '<div class="sectionForm">';

			if(type == 'r' || type == 'rs' || type == 'rn' || type == 're')
			{
				pintarForm += '<div class="titulo">'+titulo[i]+'*</div>';
			}
			else
			{
				pintarForm += '<div class="titulo">'+titulo[i]+'</div>';	
			}
			switch(type)
			{
				case 'i':
					//pintarForm += '<input class="mdl-textfield__input" type="input" id="'+campo+'" name="'+campo+'">';
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="input" id="'+campo+'" name="'+campo+'">';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 's':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<select class="mdl-textfield__input" id="'+campo+'" name="'+campo+'"><option selected="selected">seleccione...</option></select>';
					  pintarForm += '</div>';
				break;
				case 'n':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="number" id="'+campo+'" name="'+campo+'">';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'd':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="date" id="'+campo+'" name="'+campo+'">';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				//datos obligatorios
				case 'rs':
					//pintarForm += '<select class="mdl-textfield__input" id="'+campo+'" name="'+campo+'" required><option selected="selected">seleccione...</option></select>';
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<select class="mdl-textfield__input" id="'+campo+'" name="'+campo+'" required><option selected="selected">seleccione...</option></select>';
					  pintarForm += '</div>';
				break;
				case 'rn':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="number" id="'+campo+'" name="'+campo+'" min="0" required>';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'r':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="text" id="'+campo+'" name="'+campo+'" required>';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'ro':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="text" id="'+campo+'" name="'+campo+'" readOnly="readOnly">';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'rd':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="date" id="'+campo+'" name="'+campo+'" required>';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'rh':
					    pintarForm += '<input class="mdl-textfield__input" type="hidden" id="'+campo+'" name="'+campo+'" required>';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
				break;
				case 're':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="mail" id="'+campo+'" name="'+campo+'" required>';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'l':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="text" id="'+campo+'" name="'+campo+'" disabled="disabled">';
					    //pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'ls':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
						pintarForm += '<select class="mdl-textfield__input" id="'+campo+'" name="'+campo+'" disabled="disabled"></select>';
				  	pintarForm += '</div>';
				break;
				default:

				break;
			}
			pintarForm += '</div>';	
		}
			ContentModal = '<h4 id="container-modal-title" class="mdl-dialog__title">'+accionFormulario(formulario)+'</h4>';
			ContentModal += '<form method="post" action="controller/'+formulario+'.php" class="formSection">';
			ContentModal += '<div class="mdl-dialog__content" id="container-modal-content" class="formSection">';
				ContentModal += pintarForm;
			ContentModal += '</div>';
			ContentModal += '<div class="mdl-dialog__actions">';
        ContentModal += '<button type="submit" class="mdl-button btn-primary">Aceptar</button>';
      ContentModal += '</form>';  
			  ContentModal += '<button type="button" class="mdl-button close">Cerrar</button>';
			ContentModal += '</div>';

			$('#dialog-content').html(ContentModal);		
		cargarFunciones();
	}

	function cargarFunciones()
	{
		cargarPaises();
		cargarEps();
		cargarTipoDocumento();
		cargarEstados();
		cargarGenero();
		cargarPerfiles();
		cargarEmpresas();
		cargarDepartamentos();
		cargarPlanComercial();
		cargarTipoClima();
		cargarGranjas();
		cargarTipoCantidad();
		cargarGalpones();
		cargarInsumos();
	}
	


	
	function formEditarUsuarioEmpresa(idEmpleado)
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Fecha de Nacimiento','Estado','Teléfono Fijo','Teléfono Celular','EPS','Dirección','Perfil','Empresa',''];
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rd_fechaNacimiento','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','r_direccion','rs_idPerfil','rs_idEmpresa','rh_identificacion',];
		var formulario = 'edit_userCompany';
		$('#container-modal-title').html('<h2>'+accionFormulario(formulario)+' Usuario - Empresa</h2>');
		formNuevo(titulo,campo,formulario);
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaUsurio',idEmpleado: idEmpleado}
		}).done(function(data) {
			$('#primerNombre').val(data[0].primerNombre);
			$('#segundoNombre').val(data[0].segundoNombre);
			$('#primerApellido').val(data[0].primerApellido);
			$('#segundoApellido').val(data[0].segundoApellido);
			$('#fechaNacimiento').val(data[0].fechaNacimiento);
			$('#idTipoDocumento').val(data[0].idTipoDocumento);
			$('#identificacion').val(data[0].identificacion);
			$('#idEstado').val(data[0].idEstado);
			$('#telefonoFijo').val(data[0].telefonoFijo);
			$('#telefonoCelular').val(data[0].telefonoCelular);
			$('#idAdministradoraEps').val(data[0].idAdministradoraEps);
			$('#idPais').val(data[0].idPais);
			$('#idDepartamento').val(data[0].idDepartamento);
			$('#direccion').val(data[0].direccion);
			$('#idGenero').val(data[0].idGenero);
			$('#idPerfil').val(data[0].idPerfil);
			$('#idEmpresa').val(data[0].idEmpresa);
			$('#idCiudad').val(data[0].idCiudad);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function formEditarUsuario(idEmpleado)
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Fecha de Nacimiento','Estado','Teléfono Fijo','Teléfono Celular','EPS','Dirección','Perfil','Granja',''];//'Empresa'
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rd_fechaNacimiento','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','r_direccion','rs_idPerfil','s_idGranja','rh_identificacion'];//'rs_idEmpresa'
		var formulario = 'edit_user';
		$('#container-modal-title').html('<h2>'+accionFormulario(formulario)+' Usuario</h2>');
		formNuevo(titulo,campo,formulario);
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaUsurio',idEmpleado: idEmpleado}
		}).done(function(data) {
			$('#primerNombre').val(data[0].primerNombre);
			$('#segundoNombre').val(data[0].segundoNombre);
			$('#primerApellido').val(data[0].primerApellido);
			$('#segundoApellido').val(data[0].segundoApellido);
			$('#fechaNacimiento').val(data[0].fechaNacimiento);
			$('#idTipoDocumento').val(data[0].idTipoDocumento);
			$('#identificacion').val(data[0].identificacion);
			$('#idEstado').val(data[0].idEstado);
			$('#telefonoFijo').val(data[0].telefonoFijo);
			$('#telefonoCelular').val(data[0].telefonoCelular);
			$('#idAdministradoraEps').val(data[0].idAdministradoraEps);
			$('#idPais').val(data[0].idPais);
			$('#idDepartamento').val(data[0].idDepartamento);
			$('#direccion').val(data[0].direccion);
			$('#idGenero').val(data[0].idGenero);
			$('#idPerfil').val(data[0].idPerfil);
			$('#idEmpresa').val(data[0].idEmpresa);
			$('#idCiudad').val(data[0].idCiudad);
			$('#idGranja').val(data[0].idGranja);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarMenu(data)
	{
		datosMenuPrincipal = '';
		$('#menuFlotante').html('');
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarMenu'}
		}).done(function(data) {
			datosMenuPrincipal += '<a class="mdl-navigation__link" href="home.php">Inicio</a>';
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosMenuPrincipal += '<a class="mdl-navigation__link" href="'+data[i].enlace+'.php">'+data[i].nombre+'</a>';
		    }
		    $('#menuPrincipal').html(datosMenuPrincipal);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function formatDate(date)
	{
		months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

		var fecha = date.split("-");

		var year = fecha[0];
		var month = fecha[1];
		if(month < 11)
		{
			month = month[1];
		}
		else
		{
			month = month;
		}
		var day = fecha[2];

		return months[month]+" "+day+" de "+year;
	}

	//funcion para crear tarjetas
	//recibe 3 parametros
	//parametro 1:titulo
	//parametro 2:informacion
	//parametro 3:enlace
	//parametro 4:seccion a mostrar
	function mostrarTarjetas(titulo,informacion,id,seccion)
	{
		datosTarjeta = '';
		datosTarjeta += '<div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">';
      datosTarjeta += '<div class="mdl-card__title">';
        datosTarjeta += '<h4 class="mdl-card__title-text">'+titulo+'</h4>';
      datosTarjeta += '</div>';
      datosTarjeta += '<div class="mdl-card__supporting-text">';
        datosTarjeta += informacion;
	    datosTarjeta += '</div>';
	    datosTarjeta += '<div class="mdl-card__actions">';
	      datosTarjeta += '<a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase mdl-button--colored '+seccion+'" onclick="mostrarContainerGalpones('+id+')">Ver más';
	        datosTarjeta += '<i class="material-icons">chevron_right</i>';
	      datosTarjeta += '</a>';
	    datosTarjeta += '</div>';
	  datosTarjeta += '</div>';
	  
	  $('#'+seccion).append(datosTarjeta);
	  /*
	  $('.containerGranjas').click(function()
	  {
	  	$('#containerGalpones').html('');
	  	$('#containerInsumos').html('');
	  	alert($(this).data('value'));
	  	mostrarContainerGalpones($(this).data('value'));
	  });
		*/


	}

	function mostrarContainerGranjas()
	{
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'InformacionGranja'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosContainerGranjas = '<table>';
			    	datosContainerGranjas += '<tr>';
			    		datosContainerGranjas += '<td>Galpones:</td>';		
			    		datosContainerGranjas += '<td>'+data[i].galpon+'</td>';			      
			      datosContainerGranjas += '</tr>';
			      datosContainerGranjas += '<tr>';
			      	datosContainerGranjas += '<td>Insumos</td>';		
			    		datosContainerGranjas += '<td>'+data[i].insumos+'</td>';			      
			      datosContainerGranjas += '</tr>';
			    datosContainerGranjas += '</table>';
		    	//nombreGranja,InformacionGranja,moduloDireccion,seccion
		    	mostrarTarjetas(data[i].Granja,datosContainerGranjas,data[i].idGranja,'containerGranjas');
		    }
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function mostrarContainerGalpones(idGranja)
	{
		$('#containerGalpones').html('');
		
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'InformacionGalpon',idGranja: idGranja}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
			    datosContainerGalpon = '<div class="">'+data[i].granja+'</div>';			      
		    	datosContainerGalpon += '<table>';
		    	datosContainerGalpon += '<tr>';	
			      datosContainerGalpon += '</tr>';
		    	datosContainerGalpon += '<tr>';
			    		datosContainerGalpon += '<td>Estado</td>';		
			    		datosContainerGalpon += '<td>'+data[i].estado+'</td>';			      
			      datosContainerGalpon += '</tr>';
			    	datosContainerGalpon += '<tr>';
			    		datosContainerGalpon += '<td>Capacidad</td>';		
			    		datosContainerGalpon += '<td>'+data[i].disponibilidad+'</td>';			      
			      datosContainerGalpon += '</tr>';
			      datosContainerGalpon += '<tr>';
			      	datosContainerGalpon += '<td>Disponibilidad</td>';		
			    		datosContainerGalpon += '<td>'+data[i].disponibilidad+'</td>';
			      datosContainerGalpon += '</tr>';
			      datosContainerGalpon += '<tr>';		
			    		datosContainerGalpon += '<td colspan="2">Insumos</td>';		
			      datosContainerGalpon += '</tr>';
			      datosContainerGalpon += '<tr>';
			      	datosContainerGalpon += '<td>Nombre</td>';		
			    		datosContainerGalpon += '<td>Cantidad</td>';
			      datosContainerGalpon += '</tr>';
			    		datosContainerGalpon += '<td>'+data[i].insumo+'</td>';
			    		datosContainerGalpon += '<td>'+data[i].cantidad+'</td>';
			      datosContainerGalpon += '</tr>';
			      datosContainerGalpon += '<tr>';
			    datosContainerGalpon += '</table>';
		    	//nombreGranja,InformacionGranja,moduloDireccion,seccion
		    	mostrarTarjetas(data[i].nombre,datosContainerGalpon,data[i].idGalpon,'containerGalpones');
		    }
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	  
	}



