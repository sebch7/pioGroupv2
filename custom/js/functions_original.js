var dataGlobalUrl = [];
$('document').ready(function()
{
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
	});

	$('#nuevoUsuarioEmpresa').click(function()
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Fecha de Nacimiento','Tipo de Documento','Número de Documento','Teléfono Fijo','Teléfono Celular','EPS','Pais','Departamento','Ciudad','Dirección','Genero','Empresa'];//
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rd_fechaNacimiento','rs_idTipoDocumento','rn_identificacion','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','rs_idPais','rs_idDepartamento','rs_idCiudad','r_direccion','rs_idGenero','rs_idEmpresa'];//
		var formulario = 'new_userCompany';
		$('#container-modal-title').html('<h2>Nuevo Usuario-Empresa</h2>');
		formNuevo(titulo,campo,formulario);
	});

	$('#nuevaEmpresa').click(function()
	{
		var titulo = ['Nombre','Nit','Persona responsable','Teléfono Responsable','Pais','Departamento','Ciudad','Plan Comercial','Estado'];
		var campo = ['r_nombre','r_nit','r_personaResponsable','r_telefono','rs_idPais','rs_idDepartamento','rs_idCiudad','rs_idPlanComercial','rs_idEstado'];
		var formulario = 'new_company';
		$('#container-modal-title').html('<h2>Nueva Empresa</h2>');
		formNuevo(titulo,campo,formulario);
	});

	$('#nuevaGranja').click(function()
	{
		var titulo = ['Nombre','Pais','Departamento','Ciudad','Estado'];
		var campo = ['r_nombre','rs_idPais','rs_idDepartamento','rs_idCiudad','rs_idEstado'];
		var formulario = 'new_farm';
		$('#container-modal-title').html('<h2>Nueva Granja</h2>');
		formNuevo(titulo,campo,formulario);
	});

	$('#nuevoGalpon').click(function()
	{
		var titulo = ['Nombre','Granja','Clima','Capacidad','Estado'];
		var campo = ['r_nombre','rs_idGranja','rs_idTipoClima','rn_capacidad','rs_idEstado'];
		var formulario = 'new_galpon';
		$('#container-modal-title').html('<h2>Nuevo Galpon</h2>');
		formNuevo(titulo,campo,formulario);
	});

	$('#nuevoInsumo').click(function()
	{
		var titulo = ['Nombre','Fecha Inicio','Cantidad','','Granja'];
		var campo = ['r_nombre','rd_fechaInicio','rn_cantidad','rs_idTipoCantidad','rs_idGranja'];
		var formulario = 'new_supply';
		$('#container-modal-title').html('<h2>Nuevo Insumo</h2>');
		formNuevo(titulo,campo,formulario);
	});

	$('#nuevoInsumoGalpon').click(function()
	{
		var titulo = ['Galpon','Insumo','cantidad','','Fecha Inicio'];
		var campo = ['rs_idGalpon','rs_idInsumo','n_cantidad','ls_idTipoCantidad','rd_fechaInicio'];
		var formulario = 'new_supplyGalpon';
		$('#container-modal-title').html('<h2>Nuevo Insumo a Galpon</h2>');
		formNuevo(titulo,campo,formulario);
	});
	

	$('#btn-cancel-modal').click(function()
		{
			$('#modal').slideUp();
		});

});

	function positionMenu()
	{
		var wa = $(window).width();
		var wh = $(window).height();

		//$('#menuFlotante').css('top',topp).css('left',left).slideUp();
		var position = $("#draggable").position();
		topp = position.top;
		left = position.left;

		if((wa/2) < left)
		{	top = position.top;
			left = position.left-190;
		}
		$('#menuFlotante').css('top',topp).css('left',left).slideToggle();
	}

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
	}

	function mostrarTablaUsuarios()
	{
		idEmpresa = 0;

		if(isset(dataGlobalUrl['id']))
		{
			idEmpresa = dataGlobalUrl['id'];
		}

		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Nombres','Apellidos','Identificación','Ciudad','Teléfonos','Perfil','Granja','Estado','Editar'];

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
		  data: {accion: 'consultaUsurios',idEmpresa: idEmpresa}
		}).done(function(data) {

		    for(var ii = 0; ii < data.length; ii++)
		    {
		    	camposConsulta += '<tr>';
		    	camposConsulta += '<td>'+data[ii].nombres+'</td>';
		    	camposConsulta += '<td>'+data[ii].Apellidos+'</td>';
		    	camposConsulta += '<td>'+data[ii].identificacion+'</td>';
		    	camposConsulta += '<td>'+data[ii].ciudad+'</td>';
		    	camposConsulta += '<td>'+data[ii].telefonos+'</td>';
		    	camposConsulta += '<td>'+data[ii].perfil+'</td>';
		    	camposConsulta += '<td>'+data[ii].granja+'</td>';
		    	camposConsulta += '<td>'+data[ii].estado+'</td>';
		    	camposConsulta += '<td><span data-employed="'+data[ii].identificacion+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarUsuario($(this).data('employed'));
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function mostrarTablaInsumosGalpon()
	{
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
	}


	function mostrarTablaEmpresas()
	{
		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Empresa','responsable','Pais','Departamento','Ciudad','Granjas','Tipo Plan','Estado','Editar'];

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
		  data: {accion: 'consultaEmpresas'}
		}).done(function(data) {

		    for(var ii = 0; ii < data.length; ii++)
		    {
		    	camposConsulta += '<tr>';
		    	camposConsulta += '<td>'+data[ii].nombre+'<br>'+data[ii].nit+'</td>';
		    	camposConsulta += '<td>'+data[ii].responsable+' - '+data[ii].telefono+'</td>';
		    	camposConsulta += '<td>'+data[ii].pais+'</td>';
		    	camposConsulta += '<td>'+data[ii].departamento+'</td>';
		    	camposConsulta += '<td>'+data[ii].ciudad+'</td>';
		    	camposConsulta += '<td><a class="enlaceTabla" href="granjas.php?id='+data[ii].id+'">'+data[ii].granja+'</a></td>';
		    	//camposConsulta += '<td><a href="usuarios.php?id='+data[ii].id+'">'+data[ii].empleados+'</a></td>';
		    	camposConsulta += '<td>'+data[ii].planComercial+'</td>';
		    	camposConsulta += '<td>'+data[ii].estado+'</td>';
		    	camposConsulta += '<td><span data-company="'+data[ii].id+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarEmpresa($(this).data('company'));
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function mostrarTablaGranjas()
	{
		idEmpresa = 0;

		if(isset(dataGlobalUrl['id']))
		{
			idEmpresa = dataGlobalUrl['id'];
		}

		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Nombre','Empresa','Pais','Departamento','Ciudad','Galpones','Estado','Editar'];

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
		  data: {accion: 'consultaGranjas',idEmpresa:idEmpresa}
		}).done(function(data) {

		    for(var ii = 0; ii < data.length; ii++)
		    {
		    	camposConsulta += '<tr>';
		    	camposConsulta += '<td>'+data[ii].nombre+'</td>';
		    	camposConsulta += '<td>'+data[ii].empresa+'</td>';
		    	camposConsulta += '<td>'+data[ii].pais+'</td>';
		    	camposConsulta += '<td>'+data[ii].departamento+'</td>';
		    	camposConsulta += '<td>'+data[ii].ciudad+'</td>';
		    	camposConsulta += '<td><a class="enlaceTabla" href="galpones.php?id='+data[ii].id+'">'+data[ii].galpon+'</a></td>';
		    	camposConsulta += '<td>'+data[ii].estado+'</td>';
		    	camposConsulta += '<td><span data-farm="'+data[ii].id+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarGranja($(this).data('farm'));
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function mostrarTablaInsumos()
	{
		idGranja = 0;

		if(isset(dataGlobalUrl['id']))
		{
			idGranja = dataGlobalUrl['id'];
		}

		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Nombre','Granja','Fecha Compra','Cantidad Total','Cantidad Disponible','Fecha Final'];

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
		  data: {accion: 'consultaInsumos',idGranja:idGranja}
		}).done(function(data) {

		    for(var ii = 0; ii < data.length; ii++)
		    {
		    	camposConsulta += '<tr>';
		    	camposConsulta += '<td>'+data[ii].nombre+'</td>';
		    	camposConsulta += '<td>'+data[ii].Granja+'</td>';
		    	camposConsulta += '<td>'+formatDate('2017-01-03')+'</td>';
		    	camposConsulta += '<td>'+data[ii].cantidad+' '+data[ii].TipoCantidad+'</td>';
		    	camposConsulta += '<td>'+data[ii].cantidadUsada+' '+data[ii].TipoCantidad+'</td>';
		    	camposConsulta += '<td>'+data[ii].fechaFinal+'</td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarGalpon($(this).data('galpon'));
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function mostrarTablaGalpones(data)
	{
		idGranja = 0;

		if(isset(dataGlobalUrl['id']))
		{
			idGranja = dataGlobalUrl['id'];
		}
		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Nombre','Granja','Clima','Capacidad','Disponibilidad','Estado','Editar'];

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
		  data: {accion: 'consultaGalpones',idGranja: idGranja}
		}).done(function(data) {

		    for(var ii = 0; ii < data.length; ii++)
		    {
		    	camposConsulta += '<tr>';
		    	camposConsulta += '<td>'+data[ii].nombre+'</td>';
		    	camposConsulta += '<td>'+data[ii].granja+'</td>';
		    	camposConsulta += '<td>'+data[ii].clima+'</td>';
		    	camposConsulta += '<td>'+data[ii].capacidad+'</td>';
		    	camposConsulta += '<td>'+data[ii].disponibilidad+'</td>';
		    	camposConsulta += '<td>'+data[ii].estado+'</td>';
		    	camposConsulta += '<td><span data-galpon="'+data[ii].id+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarGalpon($(this).data('galpon'));
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
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
		//$('#container-modal-title').html('<h2>'+accionFormulario(formulario)+'</h2>');

		$('#container-modal-content').html('');
		pintarForm = '';
		pintarForm += '<form method="post" action="controller/'+formulario+'.php">';
		for(var i = 0; i< titulo.length;i++)
		{
			var data = campos[i].split('_');//separar tipo de nombre
			var type = data[0];//tipo de campo
			var campo =data[1];//nombre del campo
 
			//pintarForm += '<div class="divClass2">';

			if(type == 'r' || type == 'rs' || type == 'rn')
			{
				pintarForm += '<div>'+titulo[i]+'*</div>';
			}
			else
			{
				pintarForm += '<div>'+titulo[i]+'</div>';	
			}
			switch(type)
			{
				case 'i':
					//pintarForm += '<input class="mdl-textfield__input" type="input" id="'+campo+'" name="'+campo+'">';
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="input" id="'+campo+'" name="'+campo+'">';
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
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
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'd':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="date" id="'+campo+'" name="'+campo+'">';
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
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
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'r':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="text" id="'+campo+'" name="'+campo+'" required>';
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'rd':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="date" id="'+campo+'" name="'+campo+'" required>';
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'rh':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="hidden" id="'+campo+'" name="'+campo+'" required>';
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 're':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="mail" id="'+campo+'" name="'+campo+'" required>';
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'l':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
					    pintarForm += '<input class="mdl-textfield__input" type="number" id="'+campo+'" name="'+campo+'" disabled="disabled">';
					    pintarForm += '<label class="mdl-textfield__label" for="sample1">Text...</label>';
					  pintarForm += '</div>';
				break;
				case 'ls':
					pintarForm += '<div class="mdl-textfield mdl-js-textfield">';
						pintarForm += '<select class="mdl-textfield__input" id="'+campo+'" name="'+campo+'" disabled="disabled"><</select>';
				  	pintarForm += '</div>';
				break;
				default:

				break;
			}
			//pintarForm += '</div>';
		}

		pintarForm += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="btn-new-user" type="submit">'+accionFormulario(formulario)+'</button>';
	  
	
		pintarForm += '</form>';

		$('#container-modal-content').html(pintarForm);
		
		cargarFunciones();
		
		$('#modal').slideDown();
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

	function menuPrincipal()
	{
		$('#menuPrincipal').html('');
		datosMenuPrincipal = '';
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarMenu'}
		}).done(function(data) {
	    for(var i = 0; i < data.length; i++)
	    {
	    	datosMenuPrincipal = '<a class="mdl-navigation__link" href="">Phones</a>';
	    }
	    $('#menuPrincipal').html(datosMenuPrincipal);
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



