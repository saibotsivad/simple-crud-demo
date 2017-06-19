$(function () {
	window.swaggerUi = new SwaggerUi({
		url: 'assets/v1.yaml',
		dom_id: 'swagger-ui-container',
		supportedSubmitMethods: [ 'get', 'post', 'put', 'delete', 'patch' ],
		onFailure: function(data) {
			console.error('unable to load swagger data!')
		},
		docExpansion: 'none',
		jsonEditor: false,
		apisSorter: 'alpha',
		defaultModelRendering: 'schema',
		showRequestHeaders: false
	})

	window.swaggerUi.load()
})
