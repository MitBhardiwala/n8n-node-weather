import { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class WeatherApi implements ICredentialType {
	name = 'weatherApi';
	displayName = 'Weather API';
	documentationUrl = 'https://openweathermap.org/api';
	icon: Icon = 'file:weather.svg';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
}
