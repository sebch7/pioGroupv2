var dataGlobalUrl = [];
$('document').ready(function()
{
<<<<<<< HEAD
	$(document).ready(function(){
	    $('#example').DataTable();
	});

	lectorUrl();
=======
>>>>>>> e2536ef2cf20fb1624212151dc01c596b7d259b3

	$(document).ready(function(){
	    $('#example').DataTable();
	});

	lectorUrl();

	$('#header-logo-img').click(function()
	{
		location.assign('home.php');
	});

	
	$('#nuevoUsuarioDocente').click(function()
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','E-mail','Fecha de Nacimiento','Tipo de Documento','Número de Documento','Estado','Teléfono Fijo','Teléfono Celular','EPS','Pais','Departamento','Ciudad','Dirección','Genero'];//'Empresa'
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','re_correoElectronico','rd_fechaNacimiento','rs_idTipoDocumento','rn_identificacion','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','rs_idPais','rs_idDepartamento','rs_idCiudad','r_direccion','rs_idGenero'];//'rs_idEmpresa'
		var formulario = 'new_userTeacher';
		//$('#container-modal-title').text('Nuevo Usuario');
		formNuevo(titulo,campo,formulario);
		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoUsuarioDocente');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevoUsuarioEstudiante').click(function()
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','E-mail','Fecha de Nacimiento','Tipo de Documento','Número de Documento','Curso','Estado','Teléfono Fijo','Teléfono Celular','EPS','Pais','Departamento','Ciudad','Dirección','Genero','Nombres del acudiente','Apellidos del acudiente','Numero de telefono acudiente','Numero celular acudiente','E-mail acudiente'];//'Empresa'
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','re_correoElectronico','rd_fechaNacimiento','rs_idTipoDocumento','rn_identificacion','rs_idCurso','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','rs_idPais','rs_idDepartamento','rs_idCiudad','r_direccion','rs_idGenero','i_nombreAcudiente','i_apellidoAcudiente','rn_telefonoAcudiente','n_celularAcudiente','re_emailAcudiente'];//'rs_idEmpresa'
		var formulario = 'new_userStudent';
		//$('#container-modal-title').text('Nuevo Usuario');
		formNuevo(titulo,campo,formulario);
		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoUsuarioEstudiante');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevoUsuarioPrincipal').click(function()
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Fecha de Nacimiento','Tipo de Documento','Número de Documento','E-mail','Teléfono Fijo','Teléfono Celular','EPS','Pais','Departamento','Ciudad','Dirección','Genero','Empresa'];//
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rd_fechaNacimiento','rs_idTipoDocumento','rn_identificacion','re_correoElectronico','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','rs_idPais','rs_idDepartamento','rs_idCiudad','r_direccion','rs_idGenero','rs_idEmpresa'];//
		var formulario = 'new_userPrincipal';
		$('#container-modal-title').text('Nuevo Usuario principal');
		formNuevo(titulo,campo,formulario);
<<<<<<< HEAD
	});
	
	$('#nuevoGalpon').click(function()
=======

		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoUsuarioPrincipal');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    showDialogButton.addEventListener('click', function() {
	      dialog.showModal();
	    });
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevaEmpresa').click(function()
>>>>>>> e2536ef2cf20fb1624212151dc01c596b7d259b3
	{
		var titulo = ['Nombre','Nit','Persona responsable','Teléfono Responsable','Pais','Departamento','Ciudad','Plan Comercial','Estado'];
		var campo = ['r_nombre','r_nit','r_personaResponsable','r_telefono','rs_idPais','rs_idDepartamento','rs_idCiudad','rs_idPlanComercial','rs_idEstado'];
		var formulario = 'new_company';
		$('#container-modal-title').text('Nueva Empresa');
		formNuevo(titulo,campo,formulario);
		
		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevaEmpresa');
	    if (!dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    showDialogButton.addEventListener('click', function() {
	      dialog.showModal();
	    });
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	});

	$('#nuevoCurso').click(function()
	{
		var titulo = ['Nombre','Capacidad','Jornada','Estado'];
		var campo = ['r_nombre','rn_capacidad','rs_idJornada','rs_idEstado'];
		var formulario = 'new_classRoom';
		$('#container-modal-title').text('Nuevo Curso');
		formNuevo(titulo,campo,formulario);
		var dialog = document.querySelector('dialog');
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
	    var showDialogButton = document.querySelector('#nuevoCurso');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    showDialogButton.addEventListener('click', function() {
	      dialog.showModal();
	    });
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

	function cargarJornadas()
	{
		$('#idPais').html('cargando...');//pais
		$('#idDepartamento').html('');//municipio
		$('#idCiudad').html('');//ciudad

		datosJornadas = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarJornadas'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosJornadas += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idJornada').html(datosJornadas);
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

	function cargarCursos()
	{
		$('#idCurso').html('cargando...');

		datosCurso = '';

		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'cargarCursos'}
		}).done(function(data) {
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosCurso += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
		    }
		    $('#idCurso').html(datosCurso);
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

	function cargarPlanComercial()
	{
		$('#idPlanComercial').html('cargando...');//ciudad

		datosPlanComercial = '';
<<<<<<< HEAD

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
		    	camposConsulta += '<td><span data-cont="'+ii+'" data-emCo="'+data[ii].identificacion+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	var dialog = document.querySelector('dialog');
		    	formEditarUsuarioEmpresa($(this).data('emco'));
				dialogPolyfill.registerDialog(dialog);
		    	dialog.showModal();
			    var showDialogButton = document.querySelector('#nuevoUsuarioEmpresa');
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
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	function cargarModal(id)
	{

	}

	/*
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
		    	camposConsulta += '<td><span data-cont="'+ii+'" data-employed="'+data[ii].identificacion+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarUsuario($(this).data('employed'));
		    	var dialog = document.querySelector('dialog');
				dialogPolyfill.registerDialog(dialog);
		    	dialog.showModal();
			    var showDialogButton = document.querySelector('#nuevoUsuario');
			    if (! dialog.showModal) {
			      dialogPolyfill.registerDialog(dialog);
			    }
			    showDialogButton.addEventListener('click', function() {
			      dialog.showModal();
			    });
			    dialog.querySelector('.close').addEventListener('click', function() {
			      dialog.close();
			    });
		    });
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}
	*/

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
		      { "data": "nombres"},
		      { "data": "identificacion"},
		      { "data": "ciudad" , "class": "busqueda"},
		      { "data": "telefonos" },
		      { "data": "estado" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 5,
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
			formEditarEstudiante($(this).data('emco'));
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

		var titulo = ['Empresa','responsable','Pais','Departamento','Ciudad','Granjas','Empleados','Tipo Plan','Estado','Editar'];

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
		    			camposConsulta += '<td>'+data[ii].nombre+'</td>';
				    	camposConsulta += '<td>'+data[ii].responsable+' - '+data[ii].telefono+'</td>';
				    	camposConsulta += '<td>'+data[ii].pais+'</td>';
				    	camposConsulta += '<td>'+data[ii].departamento+'</td>';
				    	camposConsulta += '<td>'+data[ii].ciudad+'</td>';
				    	camposConsulta += '<td><a href="granjas.php?id='+data[ii].id+'">'+data[ii].granja+'</a></td>';
				    	camposConsulta += '<td>'+data[ii].empleados+'</a></td>';
				    	camposConsulta += '<td>'+data[ii].planComercial+'</td>';
				    	camposConsulta += '<td>'+data[ii].estado+'</td>';
			    	  camposConsulta += '<td><span data-cont="'+ii+'" data-company="'+data[ii].id+'" class="material-icons editForm">create</span></td>';
		    	camposConsulta += '</tr>';
		    	//nombreGranja,InformacionGranja,moduloDireccion,seccion
		    	//mostrarTarjetas(data[ii].nombre,camposConsulta,data[ii].pais,'tablaInfo');
		    }
		    $('#tablaInfoBody').html(camposConsulta);
		    $('.editForm').click(function()
		    {
		    	formEditarEmpresa($(this).data('company'));
		    	var dialog = document.querySelector('dialog');
				dialogPolyfill.registerDialog(dialog);
		    	dialog.showModal();
			    var showDialogButton = document.querySelector('#nuevaEmpresa');
			    if (! dialog.showModal) {
			      dialogPolyfill.registerDialog(dialog);
			    }
			    showDialogButton.addEventListener('click', function() {
			      dialog.showModal();
			    });
			    dialog.querySelector('.close').addEventListener('click', function() {
			      dialog.close();
			    });
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
=======
>>>>>>> e2536ef2cf20fb1624212151dc01c596b7d259b3

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

	function mostrarTablaUsuariosPrincipales()
	{
		idEmpresa = 0;
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaUsuariosPrincipales",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
					{"data": "nombres"},
					{"data": "empresa"},
					{"data": "ciudad"},
					{"data": "telefonos"},
		      { "data": "estado" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 5,
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
			formEditarUsuarioPrincipal($(this).data('emco'));
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

	function mostrarTablaUsuariosDocentes()
	{
		idEmpresa = 0;
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaUsuriosDocentes",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
		      { "data": "nombres"},
		      { "data": "identificacion"},
		      { "data": "ciudad" , "class": "busqueda"},
		      { "data": "telefonos" },
		      { "data": "estado" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 5,
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
			formEditarDocente($(this).data('emco'));
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

	function mostrarTablaUsuariosEstudiantes()
	{
		idEmpresa = 0;
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultaUsuriosEstudiantes",
		      "dataSrc": ""
		  },
		  "initComplete": function () {
        var api = this.api();
        api.$('.busqueda').click( function () {
            api.search( this.innerHTML ).draw();
        } );
    	},
		  "columns": [
		      { "data": "nombres"},
		      { "data": "identificacion"},
		      { "data": "curso", "class": "busqueda"},
		      { "data": "ciudad" , "class": "busqueda"},
		      { "data": "telefonos" },
		      //{ "data": "nombreAcudiente" },
		      //{ "data": "telefonoAcudiente" },
		      //{ "data": "emailAcudiente" },
		      { "data": "estado" },
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
			formEditarEstudiante($(this).data('emco'));
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
					{"data": "cursos", "class": "busqueda"},
		      {"data": "planComercial", "class": "busqueda" },
		      {"data": "estado", "class": "busqueda" },
		  	],
		  	
		  	"columnDefs": [
        {
            "targets": 7,
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

	function mostrarTablaCursos()
	{
		idCurso = 0;
		var table =  $('#example').DataTable(
		{
		  "ajax": {
		      "url": "../controller/services/select.php?accion=consultarCursos",
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
					{"data": "capacidad"},
					{"data": "jornada", "class": "busqueda"},
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
			formEditarCurso($(this).data('emco'));
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
		idCurso = 0;

		if(isset(dataGlobalUrl['id']))
		{
			idCurso = dataGlobalUrl['id'];
		}

		$('#tablaInfoHead').html('');
		$('#tablaInfoBody').html('');

		var titulo = ['Colegio','Nombre','Jornada','Capacidad/Disponible','Estado','Editar'];

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
		  data: {accion: 'consultarCursos',idCurso:idCurso}
		}).done(function(data) {
			if(data.length == 0 || data[0].id == null)
			{
				camposConsulta = '<tr>';
				camposConsulta += '<td colspan="6">No contiene información</td>';
				camposConsulta += '</tr>';
				$('#tablaInfoBody').html(camposConsulta);
			}
			else
			{
			    for(var ii = 0; ii < data.length; ii++)
			    {
			    	camposConsulta += '<tr>';
			    	camposConsulta += '<td>'+data[ii].empresa+'</td>';
			    	camposConsulta += '<td>'+data[ii].nombre+'</td>';
			    	camposConsulta += '<td>'+data[ii].jornada+'</td>';
			    	camposConsulta += '<td>'+data[ii].capacidad+' / '+data[ii].capacidad+'</td>';
			    	camposConsulta += '<td>'+data[ii].estado+'</td>';
			    	camposConsulta += '<td><span data-curso="'+data[ii].id+'" class="material-icons editForm">create</span></td>';
			    	camposConsulta += '</tr>';
			    }
			    $('#tablaInfoBody').html(camposConsulta);

			    $('.editForm').click(function()
			    {
			    	formEditarCurso($(this).data('curso'));
			    	var dialog = document.querySelector('dialog');
					dialogPolyfill.registerDialog(dialog);
			    	dialog.showModal();
				    var showDialogButton = document.querySelector('#nuevoCurso');
				    if (! dialog.showModal) {
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
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	  */
	}

	function accionFormulario(formulario)
	{
		var data = formulario.split('_');//separar tipo de nombre
		var type = data[0];//tipo de campo
		
		switch(type)
		{
			case 'new':
			return 'Registrar';
			break;

			case 'edit':
			return 'Editar';
			break;
		}
	}

	function formEditarEmpresa(idEmpresa)
	{
		
		var titulo = ['Nombre','Nit','Persona responsable','Teléfono Responsable','Estado','Plan Comercial',''];
		var campo = ['r_nombre','r_nit','r_personaResponsable','r_telefono','rs_idEstado','rs_idPlanComercial','rh_idEmpresa'];
		var formulario = 'edit_company';

		$('#container-modal-title').text(accionFormulario(formulario)+' Empresa');

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

	function formEditarCurso(idCurso)
	{
		
		var titulo = ['Nombre','Capacidad','Jornada','Estado',''];
		var campo = ['i_nombre','rn_capacidad','rs_idJornada','rs_idEstado','rh_idCurso'];
		var formulario = 'edit_classRoom';

		$('#container-modal-title').text(accionFormulario(formulario)+' Curso');

		formNuevo(titulo,campo,formulario);
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaCurso',idCurso: idCurso}
		}).done(function(data) {
			$('#nombre').val(data[0].nombre);
			$('#capacidad').val(data[0].capacidad);
			$('#idJornada').val(data[0].idJornada);
			$('#idEstado').val(data[0].idEstado);
			$('#idCurso').val(data[0].id);
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
<<<<<<< HEAD
        ContentModal += '<button type="submit" class="mdl-button">Aceptar</button>';
      ContentModal += '</form>';  
			  ContentModal += '<button type="button" class="mdl-button close">Cerrar</button>';
			ContentModal += '</div>';
=======
        ContentModal += '<button type="submit" class="mdl-button btn-primary">Aceptar</button>';
      ContentModal += '</form>';  
			  ContentModal += '<button type="button" class="mdl-button close">Cerrar</button>';
			ContentModal += '</div>';


>>>>>>> e2536ef2cf20fb1624212151dc01c596b7d259b3
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
		cargarJornadas();
		cargarCursos();
	}
	


	
	function formEditarEstudiante(idEmpleado)
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Curso','Fecha de Nacimiento','Estado','Teléfono Fijo','Teléfono Celular','EPS','Dirección',''];
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rs_idCurso','rd_fechaNacimiento','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','r_direccion','rh_identificacion'];
		var formulario = 'edit_student';
		$('#container-modal-title').text(accionFormulario(formulario)+' Estudiante');
		formNuevo(titulo,campo,formulario);
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaEstudiante',idEmpleado: idEmpleado}
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
			$('#idCiudad').val(data[0].idCiudad);
			$('#idCurso').val(data[0].idCurso);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}


	function formEditarDocente(idEmpleado)
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Estado','Teléfono Fijo','Teléfono Celular','Dirección',''];
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','r_direccion','rh_identificacion'];
		var formulario = 'editTeacher';
		$('#container-modal-title').text(accionFormulario(formulario)+' Estudiante');
		formNuevo(titulo,campo,formulario);
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaEstudiante',idEmpleado: idEmpleado}
		}).done(function(data) {
			$('#primerNombre').val(data[0].primerNombre);
			$('#segundoNombre').val(data[0].segundoNombre);
			$('#primerApellido').val(data[0].primerApellido);
			$('#segundoApellido').val(data[0].segundoApellido);
			$('#idTipoDocumento').val(data[0].idTipoDocumento);
			$('#identificacion').val(data[0].identificacion);
			$('#idEstado').val(data[0].idEstado);
			$('#telefonoFijo').val(data[0].telefonoFijo);
			$('#telefonoCelular').val(data[0].telefonoCelular);
			$('#idDepartamento').val(data[0].idDepartamento);
			$('#direccion').val(data[0].direccion);
			$('#idCiudad').val(data[0].idCiudad);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	/*
	function formEditarUsuario(idEmpleado)
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Fecha de Nacimiento','Estado','Teléfono Fijo','Teléfono Celular','EPS','Dirección','Perfil','Granja',''];//'Empresa'
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rd_fechaNacimiento','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','rs_idAdministradoraEps','r_direccion','rs_idPerfil','s_idGranja','rh_identificacion'];//'rs_idEmpresa'
		var formulario = 'edit_user';
		$('#container-modal-title').text(accionFormulario(formulario)+' Usuario principal');
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
	*/


	function formEditarUsuarioPrincipal(idEmpleado)
	{
		var titulo = ['Primer Nombre','Segundo Nombre','Primer Apellido','Segundo Apellido','Estado','Teléfono Fijo','Teléfono Celular','Dirección',''];//'Empresa'
		var campo = ['r_primerNombre','i_segundoNombre','r_primerApellido','i_segundoApellido','rs_idEstado','rn_telefonoFijo','n_telefonoCelular','r_direccion','rh_identificacion'];//'rs_idEmpresa'
		var formulario = 'edit_userPrincipal';
		$('#container-modal-title').text(accionFormulario(formulario)+' Usuario principal');
		formNuevo(titulo,campo,formulario);
		$.ajax({
		  method: "POST",
		  dataType: 'json',
		  url: "../controller/services/select.php",
		  data: {accion: 'consultaUsurioPrincipal',idEmpleado: idEmpleado}
		}).done(function(data) {
			$('#primerNombre').val(data[0].primerNombre);
			$('#segundoNombre').val(data[0].segundoNombre);
			$('#primerApellido').val(data[0].primerApellido);
			$('#segundoApellido').val(data[0].segundoApellido);
			$('#idEstado').val(data[0].idEstado);
			$('#identificacion').val(data[0].identificacion);
			$('#telefonoFijo').val(data[0].telefonoFijo);
			$('#telefonoCelular').val(data[0].telefonoCelular);
			$('#idDepartamento').val(data[0].idDepartamento);
			$('#idCiudad').val(data[0].idCiudad);
			$('#direccion').val(data[0].direccion);
			$('#idEmpresa').val(data[0].idEmpresa);
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}

	
	/*
	//obsoleta
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
	*/

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
				datosMenuPrincipal += '<a><img style="width:100%;" src="../img/logoHeaderNormal.png"></a>';
				datosMenuPrincipal += '<a class="mdl-navigation__link" href="home.php">Inicio</a>';
		    for(var i = 0; i < data.length; i++)
		    {
		    	datosMenuPrincipal += '<a class="mdl-navigation__link" href="'+data[i].enlace+'.php">'+data[i].nombre+'</a>';
		    }

		    datosMenuPrincipal += '<hr><a class="mdl-navigation__link" href="../cerrarSesion.php">Cerrar Sesión</a>';
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
		datosTarjeta += '<div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">';
      datosTarjeta += '<div class="mdl-card__title">';
        datosTarjeta += '<h4 class="mdl-card__title-text">'+titulo+'</h4>';
      datosTarjeta += '</div>';
      datosTarjeta += '<div class="mdl-card__supporting-text">';
        datosTarjeta += informacion;
	    datosTarjeta += '</div>';
	    datosTarjeta += '<div class="mdl-card__actions">';
	    	switch(seccion)
	    	{
	    		case 'containerGranjas':
	      		datosTarjeta += '<a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase mdl-button--colored '+seccion+'" onclick="mostrarContainerGalpones('+id+')">Ver más';
		      		datosTarjeta += '<i class="material-icons">chevron_right</i>';
			      datosTarjeta += '</a>';
	    		break;
	    		case 'containerGalpones':
	    			datosTarjeta += '<a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase mdl-button--colored '+seccion+'" onclick="mostrarContainerInsumos('+id+')">Ver más';
		    			datosTarjeta += '<i class="material-icons">chevron_right</i>';
			      datosTarjeta += '</a>';
	    		break;
	    		case 'containerInsumos':
	    			datosTarjeta += '';
	    		break;
	    	}
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
			if(data.length == 0 || data[0].idGranja == null)
			{
				$('#containerGranjas').html('<p>Ups! no tienes granjas creadas, da <a class="refImportant" href="granjas.php">click aqui</a> para realizar un registro.</p>');
			}
			else
			{
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
			}    
		})
		.fail(function(data) {
	    
	  })
	  	.always(function() {
	    	
	  });
	}




