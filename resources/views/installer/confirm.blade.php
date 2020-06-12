@extends('layouts.installer')

@section('subtitle', 'Confirm your settings')

@section('content')
	@error('install')
		<div class="text-red-500">{{ $message }}</div>
	@enderror

	<div class="flex flex-col">
		<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
			<div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
				
				@foreach($data as $datum)
					<table class="mb-5 min-w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Field
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Value
								</th>
							</tr>
						</thead>
						<tbody>
							@foreach($datum as $field => $value)
								<tr class="bg-white">
									<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
										{{ $field }}
									</td>
									<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
										{{ $value }}
									</td>
								</tr>
							@endforeach
						</tbody>
					</table>
				@endforeach

			</div>
		</div>
	</div>

	<form method="POST">
		@csrf

		<div class="mt-5 flex justify-between">
			<x-installer.button class="w-1/3" label="Start Over" href="/installer"/>
			<x-installer.button class="w-1/3" label="Install!" type="submit"/>
		</div>
	</form>
@endsection