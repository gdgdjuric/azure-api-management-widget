const {deployNodeJS} = require("@azure/api-management-custom-widgets-tools")

const serviceInformation = {
	"resourceId": "subscriptions/05e6c100-4fca-4586-995a-483fae019132/resourceGroups/rg-apim-portal-dev/providers/Microsoft.ApiManagement/service/apim-portal-mvp-demo",
	"managementApiEndpoint": "https://management.azure.com"
}
const name = "cw-assistantwidget"
const fallbackConfigPath = "./static/config.msapim.json"
const config = {
	"interactiveBrowserCredentialOptions": {
		"redirectUri": "http://localhost:1337",
		"tenantId": "351a8b0e-b81f-4f9a-93a1-81470d856ede"
	}
}

deployNodeJS(serviceInformation, name, fallbackConfigPath, config)
