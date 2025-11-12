import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Weather implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Weather',
		name: 'weather',
		icon: 'file:weather.svg',
		group: ['transform'],
		version: 1,
		description: 'Get current weather info using wttr.in (no API key needed)',
		defaults: { name: 'Weather' },
		inputs: ['main'],
		outputs: ['main'],

		properties: [
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				placeholder: 'e.g. London',
				required: true,
				routing: {
					request: { url: 'https://api.sampleapis.com/coffee/hot' },
				},
			},
			{
				displayName: 'District',
				name: 'district',
				type: 'string',
				default: '',
				placeholder: 'e.g. district',
				required: true,
			},
		],
	};
}
