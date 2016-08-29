(function(){

	"use strict";

	angular

		.module("backoffice", ["ngRoute","once","ngDialog","ui.tinymce"] )

		.constant("settings", {
			"base" : "/app"
		} )

		.config( function( $routeProvider ){

			$routeProvider

				.when("/", {
					templateUrl: "/app/views/catalogo/catalogo.html"
				} )

				.when("/templates", {
					templateUrl: "/app/views/main.html"
				} )

				.when("/catalogo", {
					templateUrl: "/app/views/catalogo/catalogo.html"
				} )

				.when("/descarga", {
					templateUrl: "/app/views/descarga.html"
				} )

				.when("/agregar_filial", {
					templateUrl: "/app/views/catalogo/agregar_filial.html"
				} )

				.when("/envio_por_mail", {
					templateUrl: "/app/views/catalogo/envio_por_mail.html"
				} )

				.when("/editar_filial", {
					templateUrl: "/app/views/catalogo/editar_filial.html"
				} )

				.when("/editar_especialidad", {
					templateUrl: "/app/views/catalogo/editar_especialidad.html"
				} )

				.when("/faq", {
					templateUrl: "/app/views/faq/faq.html"
				} )

				.when("/faq-editar", {
					templateUrl: "/app/views/faq/faq-editar.html"
				} )

				.when("/prestadores", {
					templateUrl: "/app/views/prestadores/prestadores.html"
				} )

				.when("/tyc", {
					templateUrl: "/app/views/tyc/tyc.html"
				} )

				.when("/reporte", {
					templateUrl: "/app/views/reporte/reporte.html"
				} )

				.when("/agenda", {
					templateUrl: "/app/views/reporte/agenda.html"
				} )

				.when("/pacientes", {
					templateUrl: "/app/views/reporte/pacientes.html"
				} )

				.when("/turnos", {
					templateUrl: "/app/views/reporte/turnos.html"
				} )

				.when("/turnos_estado", {
					templateUrl: "/app/views/reporte/turnos_estado.html"
				} )

				.when("/turnos_mensuales", {
					templateUrl: "/app/views/reporte/turnos_mensuales.html"
				} )


				.when("/envio", {
					templateUrl: "/app/views/envio/envio.html"
				} )

				.when("/configuracion_de_filtros", {
					templateUrl: "/app/views/configuracion/configuracion_de_filtros.html"
				} )

				.otherwise({
					redirectTo : "/"
				})

				;

		} )

} )()
